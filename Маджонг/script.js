const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  button.style.transform = `translate(${x}px, ${y}px)`;
});

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
