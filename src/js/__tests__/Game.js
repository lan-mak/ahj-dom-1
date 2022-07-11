/**
 * @jest-environment jsdom
*/

import Game from '../Game';

const ga = new Game();
document.body.innerHTML = '<div class="board"></div>';
ga.boardSize = 4;

test('getContainer() => выдаст ошибку', () => {
  expect(() => ga.getContainer(null)).toThrowError(new Error('неполучен контейнер для доски'));
});

test('Доска создана', () => {
  ga.getContainer(document.querySelector('.board'));
  ga.createBoard();
  expect(ga.board.children.length).toBe(ga.boardSize);
});

test('Установка Гоблина - добавление класса', () => {
  ga.showGoblin();
  expect(ga.fields[ga.goblinPosition].className).toBe('field goblin');
});

test('Удаление Гоблина - удаление класса', () => {
  ga.deleteGoblin();
  expect(ga.fields[ga.goblinPosition].className).toBe('field');
});

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
test('startGame() запускает setInterval', () => {
  ga.startGame();
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('init() должен вызывать методы', () => {
  ga.getContainer = jest.fn();
  ga.createBoard = jest.fn();
  ga.startGame = jest.fn();
  ga.init();
  expect(ga.getContainer).toHaveBeenCalled();
  expect(ga.createBoard).toHaveBeenCalled();
  expect(ga.startGame).toHaveBeenCalled();
});
