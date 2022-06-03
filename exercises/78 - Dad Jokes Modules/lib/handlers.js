import { fetchJoke } from './index.js';
import { randomItemFromArray } from './utils.js';
import buttonText from '../data/buttonText.js';
import { loader, jokeButtonSpan, jokeHolder } from './elements.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
