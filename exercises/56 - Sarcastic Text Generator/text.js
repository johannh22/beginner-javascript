const textarea = document.querySelector('[name="text"');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"');

const funkyLetters = {
  // eslint-disable-next-line prettier/prettier
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };

const filters = {
  sarcastic(letter, idx) {
    let sarcastic = letter;
    if (idx % 2 === 0) {
      sarcastic = letter.toLowerCase();
    } else {
      sarcastic = letter.toUpperCase();
    }
    return sarcastic;
  },
  funky(letter) {
    let funky = funkyLetters[letter];

    // check for a lowercase version if not found
    if (!funky) {
      funky = funkyLetters[letter.toLowerCase()];
    }

    // if we still don't have nothing, use the normal letter
    if (!funky) {
      funky = letter;
    }

    return funky;
  },
  unable(letter) {
    const luckyNum = Math.floor(Math.random() * 3); // goes from 0 to 2

    if (letter === ' ' && luckyNum === 2) {
      return '...';
    }
    return letter;
  },
};

function handleInput(text) {
  const filter = document.querySelector('[name="filter"]:checked').value;
  // take the text, and loop over each letter
  const mod = Array.from(text);
  result.textContent = mod.map(filters[filter]).join('');
}

textarea.addEventListener('input', (e) => handleInput(e.target.value));

filterInputs.forEach((input) =>
  input.addEventListener('input', () => handleInput(textarea.value))
);
