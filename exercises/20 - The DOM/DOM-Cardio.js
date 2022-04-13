// Make a div
const myFragment = document
  .createRange()
  .createContextualFragment(`<div></div>`);

// add a class of wrapper to it
const myDiv = myFragment.querySelector('div');
myDiv.classList.add('wrapper');

// put it into the body
document.body.append(myDiv);

// make an unordered list
const myList = document
  .createRange()
  .createContextualFragment(`<ul></ul>`)
  .querySelector('ul');

// add three list items with the words "one, two, three" in them
const listItems = [`one`, `two`, `three`];
listItems.forEach((el) => {
  myList.innerHTML += `<li>${el}</li>`;
});

// put that list into the above wrapper
const wrapper = document.querySelector('.wrapper');
wrapper.append(myList);

// create an image
const myImage = document
  .createRange()
  .createContextualFragment(`<img/>`)
  .querySelector(`img`);

// set the source to an image
myImage.src = `https://picsum.photos/500`;

// set the width to 250
myImage.width = 250;

// add a class of cute
myImage.classList.add(`cute`);

// add an alt of Cute Puppy
myImage.alt = `Cute Puppy`;

// Append that image to the wrapper
wrapper.append(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div>
    <p>I'm a paragraph</p>
    <p>Hey, I'm also a paragraph!</p>
  </div>
`;

const div2 = document
  .createRange()
  .createContextualFragment(myHTML)
  .querySelector(`div`);

// put this div before the unordered list from above
document.querySelector('ul').insertAdjacentElement(`beforebegin`, div2);

// add a class to the second paragraph called warning
const p2 = div2.lastElementChild;
p2.classList.add(`warning`);

// remove the first paragraph
const p1 = div2.firstElementChild;
p1.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
  const cardHTML = `
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class="remove">Remove</button>
  `;
  const div = document.createElement('div');
  div.classList.add('playerCard');
  div.innerHTML = cardHTML;
  return div;
};

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');

// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard('jojo', 23, 177);
const player2 = generatePlayerCard('lulu', 23, 164);
const player3 = generatePlayerCard('messi', 35, 170);
const player4 = generatePlayerCard('midoriya', 16, 172);

// append those cards to the div
divCards.append(player1);
divCards.append(player2);
divCards.append(player3);
divCards.append(player4);

// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', divCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => button.parentElement.remove());
});
