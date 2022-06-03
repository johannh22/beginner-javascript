import currencies from './currencies.js';
import { fromSelector, toSelector } from './elements.js';
import { generateOptions } from './utils.js';
import { handleInput } from './handlers.js';

export function init() {
  // when the page loads, this code runs!
  const myForm = document.querySelector('.app form');
  const optionsHTML = generateOptions(currencies);
  fromSelector.innerHTML = optionsHTML;
  toSelector.innerHTML = optionsHTML;

  myForm.addEventListener('input', handleInput);
}
