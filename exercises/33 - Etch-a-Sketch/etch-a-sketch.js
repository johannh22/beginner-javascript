// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 25;

// setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x + 0.0001, y + 0.0001);
ctx.stroke();

// write a draw function
function draw({ key }) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  hue += 10;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear / shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

// listen for button click
shakebutton.addEventListener('click', clearCanvas);
