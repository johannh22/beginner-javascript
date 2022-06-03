import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromInput, fromSelector, toSelector, toEl } from './elements.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelector.value,
    toSelector.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelector.value);
}
