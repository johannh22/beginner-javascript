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

const generatePlayerCard = (name, age, height) => `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${
  age * 7
}. That would be a tall dog!</p>
    </div>
  `;

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
