// const p = document.querySelector('p');
// const imgs = document.querySelector('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// set the textContent property on that element
// heading.textContent = 'Jojo is cool';
// console.log(heading.textContent); // aware of styling and returns hidden text
// console.log(heading.innerText); // human readable text

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕'); // best way to attach text

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

// pic.setAttribute('alt', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));
