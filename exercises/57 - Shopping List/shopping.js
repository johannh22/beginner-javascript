/* eslint-disable no-use-before-define */
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  // if it's empty, then don't submit it
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  // clear the form
  e.target.reset();
  // fire off a custom event that will tell anyone else who cares that the items have been updated!
}

function displayItems() {
  // just a caveat: we're not handling security issues right now
  const html = items
    .map(
      (item) => `<li class="shopping-item">
    <input 
      type="checkbox" 
      value="${item.id}"
      ${item.complete && 'checked'}
    >
    <span class="itemName">${item.name}</span>
    <button 
      aria-label="Remove ${item.name}"
      value="${item.id}"
    >
      &times;
    </button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // a few different ways to do this
    // turn items into a let and use items = lsItems;
    // lsItems.forEach(item => items.push(item));
    items.push(...lsItems); // spread operator, I like it 'cause it's nifty
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // update our items array without this one
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Event Delegation: we listen for the click on the list <ul> but
// then delegate the click over to the button if that is what was clicked
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage(); // run on page load
