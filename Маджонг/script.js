const buttons = document.querySelectorAll('.button');


let firstButton = null;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (firstButton === null) {
      firstButton = button;
      firstButton.classList.add('selected');
    } else {
      if (button.innerHTML === firstButton.innerHTML && button !== firstButton) {
        button.classList.add('disappear');
        firstButton.classList.add('disappear');
      }
      firstButton.classList.remove('selected');
      firstButton = null;
    }
  });
});