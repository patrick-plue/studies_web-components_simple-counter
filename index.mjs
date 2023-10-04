import { Counter } from './Counter.mjs';
import Store from './Store.mjs';
import { increaseAll, decreaseAll } from './utils.mjs';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  createCounter();
});

document
  .querySelector('button[data-counter="create"]')
  .addEventListener('click', () => {
    createCounter();
  });

document
  .querySelector('button[data-counter="increaseAll"]')
  .addEventListener('click', () => {
    increaseAll();
  });
document
  .querySelector('button[data-counter="decreaseAll"]')
  .addEventListener('click', () => {
    decreaseAll();
  });

function createCounter() {
  const counter = document.createElement('counter-component');
  document.querySelector('#main').appendChild(counter);
}
