import { increaseCount } from './utils.mjs';

export class Counter extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    const styles = document.createElement('style');
    this.root.appendChild(styles);
    async function loadCss() {
      const request = await fetch('/count.css');
      const css = await request.text();
      styles.textContent = css;
    }
    loadCss();
  }

  connectedCallback() {
    const template = document.getElementById('counter-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    this.dataset.id = app.store.counter.length;
    app.store.counter.push({ id: app.store.counter.length, count: 0 });

    this.render();

    this.root
      .querySelector("button[data-counter='increase']")
      .addEventListener('click', () => {
        app.store.counter = increaseCount(app.store.counter, this.dataset.id);
      });

    window.addEventListener('countchange', () => {
      this.render();
    });
  }

  render() {
    this.root.querySelector('p[data-counter="count"]').textContent =
      app.store.counter[this.dataset.id].count;
  }
}

customElements.define('counter-component', Counter);
