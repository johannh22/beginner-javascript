/* eslint-disable */
const doctorize = function (firstName) {
  doesntExist();
  return `Dr. ${firstName}`;
};

// arrow function
const inchToCM = (inches) => inches * 2.54;
const add = (a, b = 3) => a + b;
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

// IFFE (immediately invoked functional expression)
// Not used so much
// (function (age) {
//   console.log("Running the Anon function");
//   return `You are cool and ${age}`;
// })(age);

const jojo = {
  nickName: 'JoJo',
  // Method
  sayHi: function () {
    console.log(`Hey JoJo!`);
    return `Hey JoJo!`;
  },
  // Short hand Method
  yellHi() {
    console.log("HEY JOJOOOOO");
  },
  // Arrow function
  whisperHi: () => {
    console.log('hiii jojo im a mouse');
  },
};

const button = document.querySelector(".clickMe");
button.addEventListener("click", jojo.sayHi);

setTimeout(jojo.yellHi, 1000);
setTimeout(() => console.log("DONE TIME TO EAT"), 2000);