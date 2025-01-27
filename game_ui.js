const buttons = document.getElementById('buttons');
const buttonsParent = buttons.parentElement;
const lastScore = document.getElementById('lastScore');
const status = document.getElementById('status');

const divScore = document.getElementById('score');
const divTime = document.getElementById('time');
const divLives = document.getElementById('lives');
const divMultiplier = document.getElementById('multiplier');
const divCombo = document.getElementById('combo');

class GameUI {
  static showButtons() {
    buttonsParent.appendChild(buttons);
  }

  static hideButtons() {
    buttonsParent.removeChild(buttons);
  }

  static showEndScreen(score) {
    lastScore.innerHTML = 'Last score: ' + score;
    status.innerHTML = 'Game over! Press "Start" to play again.';

    GameUI.showButtons();
  }

  static prepareGame() {
    lastScore.innerHTML = '';
    status.innerHTML = '';

    GameUI.hideButtons();
  }

  static updateInfo(timeLeft, score, lives, multiplier, combo) {
    divScore.innerHTML = '★: ' + score;
    divTime.innerHTML = '⌛: ' + timeLeft.toFixed(2);
    divLives.innerHTML = '♥: ' + lives;
    divMultiplier.innerHTML = 'x: ' + multiplier;
    divCombo.innerHTML = '#: ' + combo;
  }
}

export default GameUI;
