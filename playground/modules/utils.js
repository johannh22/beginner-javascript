const first = 'jojo';
const last = 'bos';
const middle = 'slam dunk';

export function returnHi(name) {
  return `hi ${name}`;
}

export default first;
// NAMED exports - we can have as many as we want
export { last, middle };
