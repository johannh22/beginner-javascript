const butts = document.querySelector('.butts');
const buyButtons = document.querySelectorAll('.buy');

function handleClick() {
  console.log('IT GOT CLICKED!!!!!!!');
}

butts.addEventListener('click', handleClick);

buyButtons.forEach((button) => {
  console.log('Binding the buy button');
  button.addEventListener('click', handleClick);
});
