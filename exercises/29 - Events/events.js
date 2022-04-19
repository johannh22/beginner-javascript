const butts = document.querySelector('.butts');

function handleClick() {
  console.log('IT GOT CLICKED!!!!!!!');
}

butts.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(e) {
  console.log('You clicked a button');
  const button = e.target;
  console.log(button.textContent);
  console.log(parseFloat(e.target.dataset.price));
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);
  console.log(e.target === e.currentTarget);
  // stop this event from bubbling up
  e.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
  console.count(e.currentTarget);
  console.log(this);
});
