/* eslint-disable no-promise-executor-return */
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor((max - min) * randomNumber + min);
}

// async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     const { typeMin, typeMax } = el.dataset;
//     await wait(amountOfTimeToWait);
//   }
// }

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  let { typeMin, typeMax } = el.dataset;
  typeMin = parseInt(typeMin);
  typeMax = parseInt(typeMax);
  const waitingTime = getRandomBetween(typeMin, typeMax);
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    await wait(waitingTime);
    if (index <= text.length) drawLetter();
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
