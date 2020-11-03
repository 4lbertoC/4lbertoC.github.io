[...document.querySelectorAll('.button-rotateCounterclockwise')].forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.parentElement.parentElement.querySelector('.card');
    if (card.classList.contains('card--rotated90deg')) {
      card.classList.remove('card--rotated90deg');
      card.classList.add('card--rotated180deg');
    } else if (card.classList.contains('card--rotated180deg')) {
      card.classList.remove('card--rotated180deg');
      card.classList.add('card--rotated270deg');
    } else if (card.classList.contains('card--rotated270deg')) {
      card.classList.remove('card--rotated270deg');
    } else {
      card.classList.add('card--rotated90deg');
    }
  });
});

[...document.querySelectorAll('.button-rotateClockwise')].forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.parentElement.parentElement.querySelector('.card');
    if (card.classList.contains('card--rotated90deg')) {
      card.classList.remove('card--rotated90deg');
    } else if (card.classList.contains('card--rotated180deg')) {
      card.classList.remove('card--rotated180deg');
      card.classList.add('card--rotated90deg');
    } else if (card.classList.contains('card--rotated270deg')) {
      card.classList.remove('card--rotated270deg');
      card.classList.add('card--rotated180deg');
    } else {
      card.classList.add('card--rotated270deg');
    }
  });
});

[...document.querySelectorAll('.button-swapLeft')].forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.parentElement.parentElement;
    if (card.classList.contains('Adventurer-first-position')) {
      const cardToSwitchWith = document.querySelector('.Adventurer-third-position');
      card.classList.remove('Adventurer-first-position');
      card.classList.add('Adventurer-third-position');
      cardToSwitchWith.classList.remove('Adventurer-third-position');
      cardToSwitchWith.classList.add('Adventurer-first-position');
    } else if (card.classList.contains('Adventurer-second-position')) {
      const cardToSwitchWith = document.querySelector('.Adventurer-first-position');
      card.classList.remove('Adventurer-second-position');
      card.classList.add('Adventurer-first-position');
      cardToSwitchWith.classList.remove('Adventurer-first-position');
      cardToSwitchWith.classList.add('Adventurer-second-position');
    } else if (card.classList.contains('Adventurer-third-position')) {
      const cardToSwitchWith = document.querySelector('.Adventurer-second-position');
      card.classList.remove('Adventurer-third-position');
      card.classList.add('Adventurer-second-position');
      cardToSwitchWith.classList.remove('Adventurer-second-position');
      cardToSwitchWith.classList.add('Adventurer-third-position');
    }
  });
});

[...document.querySelectorAll('.button-swapRight')].forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.parentElement.parentElement;
    if (card.classList.contains('Adventurer-first-position')) {
      const cardToSwitchWith = document.querySelector('.Adventurer-second-position');
      card.classList.remove('Adventurer-first-position');
      card.classList.add('Adventurer-second-position');
      cardToSwitchWith.classList.remove('Adventurer-second-position');
      cardToSwitchWith.classList.add('Adventurer-first-position');
    } else if (card.classList.contains('Adventurer-second-position')) {
      const cardToSwitchWith = document.querySelector('.Adventurer-third-position');
      card.classList.remove('Adventurer-second-position');
      card.classList.add('Adventurer-third-position');
      cardToSwitchWith.classList.remove('Adventurer-third-position');
      cardToSwitchWith.classList.add('Adventurer-second-position');
    } else if (card.classList.contains('Adventurer-third-position')) {
      const cardToSwitchWith = document.querySelector('.Adventurer-first-position');
      card.classList.remove('Adventurer-third-position');
      card.classList.add('Adventurer-first-position');
      cardToSwitchWith.classList.remove('Adventurer-first-position');
      cardToSwitchWith.classList.add('Adventurer-third-position');
    }
  });
});

function tutorialNext() {
  const currentPage = document.querySelector('.tutorial-page--current');
  const nextPage = currentPage.nextElementSibling;
  if (nextPage) {
    currentPage.classList.remove('tutorial-page--current');
    nextPage.classList.add('tutorial-page--current');

    const nextPageId = [...nextPage.parentElement.children].indexOf(nextPage);
    
    document
      .getElementById('game-area-tutorial-page-modifier')
      .classList.add(`p${nextPageId}`);
    // document
    //   .getElementById('game-area-tutorial-page-modifier')
    //   .setAttribute('class', `game-area-tutorial-page-modifier--page${nextPageId}`);
  }
}

function tutorialPrevious() {
  const currentPage = document.querySelector('.tutorial-page--current');
  const previousPage = currentPage.previousElementSibling;
  if (previousPage) {
    currentPage.classList.remove('tutorial-page--current');
    previousPage.classList.add('tutorial-page--current');

    const currentPageId = [...currentPage.parentElement.children].indexOf(currentPage);
    
    document
      .getElementById('game-area-tutorial-page-modifier')
      .classList.remove(`p${currentPageId}`);
    // document
      // .getElementById('game-area-tutorial-page-modifier')
      // .setAttribute('class', `game-area-tutorial-page-modifier--page${previousPageId}`);
  }
}

document.querySelector('.button-tutorialNext').addEventListener('click', tutorialNext);

document.querySelector('.button-tutorialPrevious').addEventListener('click', tutorialPrevious);

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowLeft':
      tutorialPrevious();
      event.preventDefault();
      break;
    case 'ArrowRight':
      tutorialNext();
      event.preventDefault();
      break;
  }
});
