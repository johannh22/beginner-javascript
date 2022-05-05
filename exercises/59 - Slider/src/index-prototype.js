function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // select the elements needed for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // when the slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // Event listeners
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move('ahead'));
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slides.querySelector('.current') || this.slides.firstElementChild;
  this.previous =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.previous.classList.add('prev');
  this.current.classList.add('current');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // first strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.previous.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  // [previous, current, next].forEach(el => el.classList.remove(...classesToRemove))
  if (direction === 'back') {
    [this.previous, this.current, this.next] = [
      this.previous.previousElementSibling || this.slides.lastElementChild,
      this.previous,
      this.current,
    ];
  } else {
    [this.previous, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

// eslint-disable-next-line no-unused-vars
const mySlider = new Slider(document.querySelector('.slider'));
// eslint-disable-next-line no-unused-vars
const dogSlider = new Slider(document.querySelector('.dog-slider'));
