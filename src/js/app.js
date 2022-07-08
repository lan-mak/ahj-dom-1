// TODO: write code here
const fields = document.getElementsByClassName('field');
const goblin = '<img src="https://raw.githubusercontent.com/lan-mak/ahj-homeworks/simplification/dom/pic/goblin.png" alt="Гоблин">';

function randomImg() {
  for (const i of fields) {
    if (i.hasChildNodes()) {
      i.querySelector('img').remove();
    }
  }

  const randomIndex = Math.floor(Math.random() * fields.length);
  fields[randomIndex].insertAdjacentHTML('afterbegin', goblin);
}

setInterval(randomImg, 1000);
