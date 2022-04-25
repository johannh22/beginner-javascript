const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

let prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
  Static Methods
*/

// Array.of();

// Make a function that creates a range from x to y with Array.from();
const createRange = (x, y) => {
  const range = Array.from({ length: y - x }, (_, index) => index + x);
  return range;
};

const teste = createRange(1, 30);
console.log(teste);

// Check if the last array you created is really an array with Array.isArray();
console.log(Array.isArray(teste));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
const entries = Object.entries(meats);
const keys = Object.keys(meats);
const values = Object.values(meats);

console.log(entries);
console.log(keys);
console.log(values);

entries.forEach(([key, value]) => {
  console.log(key, value);
});

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split(','));

// take the last item off toppings with pop()
console.log(toppings);
const poppedItem = toppings.pop();
console.log(toppings);

// add it back with push()
toppings.push(poppedItem);
console.log(toppings);

// take the first item off toppings with shift()
const shiftedItem = toppings.shift();
console.log(toppings);

// add it back in with unshift()
toppings.unshift(shiftedItem);
console.log(toppings);

// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1);
console.log(newToppings);
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

newToppings = toppings.slice(1, toppings.length);
console.log(newToppings);
newToppings = [toppings[0], ...newToppings];
console.log(newToppings);

// Make a copy of the toppings array with slice()
const toppingsSlice = toppings.slice(0, toppings.length);

// Make a copy of the toppings array with a spread
const toppingsSpread = [...toppings];

// take out items 3 to 5 of your new toppings array with splice()
toppingsSlice.splice(3, 3);
console.log(toppingsSlice);

// find the index of Avocado with indexOf() / lastIndexOf()
console.log(toppingsSpread.indexOf('Avocado'));
console.log(toppingsSpread.lastIndexOf('Avocado'));

// Check if hot sauce is in the toppings with includes()
console.log(toppings.includes('hot sauce'));

// add it if it's not
toppings.push('hot sauce');

// flip those toppings around with reverse()
console.log(toppings.reverse());

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
const burgerRating = feedback.find((singleFeedback) =>
  singleFeedback.comment.includes('burg')
);
console.log(burgerRating);

// find all ratings that are above 2 with filter()
const ratingAboveTwo = feedback.filter(
  (singleFeedback) => singleFeedback.rating > 2
);
console.log(ratingAboveTwo);

// find all ratings that talk about a burger with filter()
const findByWord = function (word) {
  return function (singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
};
const burgerRatingss = feedback.filter(findByWord('burg'));
console.log(burgerRatingss);

// Remove the one star rating however you like!
const legitFeedbacks = feedback.filter(
  (singleFeedback) => singleFeedback.rating !== 1
);
console.log(legitFeedbacks);

// check if there is at least 5 of one type of meat with some()
function testCount(testValue) {
  return function (meatCount) {
    return meatCount >= testValue;
  };
}

const meatArr = Object.values(meats);
console.log(meatArr.some(testCount(5)));

// make sure we have at least 3 of every meat with every()
console.log(meatArr.every(testCount(3)));

// sort the toppings alphabetically with sort()
console.log(toppings.sort());

// sort the order totals from most expensive to least with .sort()
console.log(orderTotals.sort((tot1, tot2) => tot1 < tot2));

// Sort the prices with sort()
const pricesArr = Object.entries(prices);
console.log(pricesArr.sort((price1, price2) => price1[1] >= price2[1]));

prices = Object.fromEntries(pricesArr);

console.log(prices);

/*
  Looping Methods (next)
*/
