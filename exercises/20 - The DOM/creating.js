const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.append(myParagraph);
myDiv.append(myImage);

document.body.append(myDiv);

// oh shoot! we need to add something to the top, like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('beforebegin', heading);

// creating a list
const myList = document.createElement('ul');
const myArr = ['one', 'two', 'three', 'four', 'five'];

myArr.forEach((liContent) => {
  const myItem = document.createElement('li');
  myItem.textContent = liContent;
  myList.append(myItem);
});

document.body.insertAdjacentElement('afterbegin', myList);
