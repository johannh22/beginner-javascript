const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// Console Methods

/* console.group
people.forEach((person, index) => {
  // console.groupCollapsed(`${person.name}`); // an alternative to make it collapsed by default
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('DONE!!');
  console.groupEnd(`${person.name}`);
}); 
*/

/* people.forEach((person, index) => {
  console.log(person.name);
});

people.forEach((person, index) => {
  console.info(person.name);
});

people.forEach((person, index) => {
  console.error(person.name);
});

people.forEach((person, index) => {
  console.warn(person.name);
});

console.table(people); */

// Callstack

// Grabbing Elements

// Breakpoints
people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
});

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  // console.count('running doctorize'); // counts based on what strings you pass it
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('starting the app!');
  go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Im one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}
