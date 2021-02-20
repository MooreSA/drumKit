const buttonAnimation = (keyPressed) => {
  const pressedButton = document.querySelector(`.${keyPressed}`);
  pressedButton.classList.add('pressed');
  setTimeout(() => {
    pressedButton.classList.remove('pressed');
  }, 100);
};

const makeSounds = (testCase) => {
  let audioFile;
  switch (testCase) {
    case 'w':
      audioFile = new Audio('./sounds/tom-1.mp3');
      audioFile.play();
      break;
    case 'a':
      audioFile = new Audio('./sounds/tom-2.mp3');
      audioFile.play();
      break;
    case 's':
      audioFile = new Audio('./sounds/tom-3.mp3');
      audioFile.play();
      break;
    case 'd':
      audioFile = new Audio('./sounds/tom-4.mp3');
      audioFile.play();
      break;
    case 'j':
      audioFile = new Audio('./sounds/crash.mp3');
      audioFile.play();
      break;
    case 'k':
      audioFile = new Audio('./sounds/snare.mp3');
      audioFile.play();
      break;
    case 'l':
      audioFile = new Audio('./sounds/kick-bass.mp3');
      audioFile.play();
      break;
    default:
      break;
  }
};
const eventHandler = (event) => {
  let key;
  if (event instanceof MouseEvent) {
    key = event.target.innerHTML;
  } else if (event instanceof KeyboardEvent) {
    key = event.key.toLowerCase();
  } else key = null;
  makeSounds(key);
  buttonAnimation(key);
};

document.addEventListener('keydown', eventHandler);

document
  .querySelectorAll('.drum')
  .forEach((button) => button.addEventListener('click', eventHandler));
