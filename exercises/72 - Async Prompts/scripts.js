/* eslint-disable no-async-promise-executor */
/* eslint-disable no-promise-executor-return */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null;
}

function ask(options) {
  return new Promise(async (resolve) => {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
      <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }

    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
      },
      { once: true } // only listen to this event once
    );
    // when someone does submit it, resolve the data that was in the input box!

    // insert that popup into the DOM
    document.body.appendChild(popup);

    // put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const answer = await ask({
    title: button.dataset.question,
    cancel: 'cancel' in button.dataset,
    // cancel: button.hasAttribute('data-cancel'),
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(await callback(item));
  }
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
