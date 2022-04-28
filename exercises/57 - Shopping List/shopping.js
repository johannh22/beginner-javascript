/* eslint-disable no-use-before-define */
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // clear the form
  e.target.reset();
  displayItems();
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
  const button = document.querySelector('.shopping-item button');
  button.addEventListener('click', handlebutt);
}

function handlebutt(e) {
  e.currentTarget.parentElement.remove();
}

shoppingForm.addEventListener('submit', handleSubmit);
