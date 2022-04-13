// const item = document.querySelector('.item');

const src = `https://picsum.photos/200`;
const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
console.log(myFragment);
