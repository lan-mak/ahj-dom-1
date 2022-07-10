export default class Game {
  constructor() {
    this.boardSize = 4;
    this.board = null;
    this.fields = document.getElementsByClassName('field');
    this.goblinPosition = null;
  }

  getContainer(board) {
    if (!(board instanceof HTMLElement)) {
      throw new Error('неполучен контейнер для доски');
    }
    this.board = board;
  }

  createBoard() {
    this.boardSize **= 2;
    const field = '<div class="field"></div>';
    for (let i = 0; i < this.boardSize; i += 1) {
      this.board.innerHTML += field;
    }
  }

  randomField() {
    const randomIndex = Math.floor(Math.random() * this.fields.length);
    if (randomIndex === this.goblinPosition) {
      this.randomField();
    }
    return randomIndex;
  }

  showGoblin() {
    this.goblinPosition = this.randomField();
    this.fields[this.goblinPosition].classList.add('goblin');
  }

  deleteGoblin() {
    this.fields[this.goblinPosition].classList.remove('goblin');
  }

  startGame() {
    setInterval(() => {
      if (this.goblinPosition !== null) {
        this.deleteGoblin();
      }
      this.showGoblin();
    }, 1000);
  }

  init() {
    this.getContainer(document.querySelector('.board'));
    this.createBoard();
    this.startGame();
  }
}
