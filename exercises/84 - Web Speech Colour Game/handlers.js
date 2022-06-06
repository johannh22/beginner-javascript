import { isValidColor } from './colors.js';

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  if (!isValidColor(color)) return;

  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
}
