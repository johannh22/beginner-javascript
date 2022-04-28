function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // create some variables for working with the slider
  let previous;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slides.querySelector('.current') || slides.firstElementChild;
    previous = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    previous.classList.add('prev');
    current.classList.add('current');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    previous.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // [previous, current, next].forEach(el => el.classList.remove(...classesToRemove))
    if (direction === 'back') {
      [previous, current, next] = [
        previous.previousElementSibling || slides.lastElementChild,
        previous,
        current,
      ];
    } else {
      [previous, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }

  // Event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', () => move('ahead'));

  // when the slider is created, run the start slider function
  startSlider();
  applyClasses();
}

// eslint-disable-next-line no-unused-vars
const mySlider = Slider(document.querySelector('.slider'));
// eslint-disable-next-line no-unused-vars
const dogSlider = Slider(document.querySelector('.dog-slider'));
