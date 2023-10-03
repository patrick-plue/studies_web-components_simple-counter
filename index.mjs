import { Counter } from './Counter.mjs';
import Store from './Store.mjs';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  createCounter();
});

document.querySelector('#create').addEventListener('click', () => {
  createCounter();
});

function createCounter() {
  const counter = document.createElement('counter-component');
  document.querySelector('#main').appendChild(counter);
}
