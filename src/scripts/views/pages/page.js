import { createElement, getElement } from '../../utils';

class Page extends HTMLElement {
  constructor({ basePageElement, contentElement }) {
    super();
    this._basePageElement = basePageElement;
    this._contentElement = contentElement;
  }

  connectedCallback() {
    this._render();
    this.contentElement = createElement(this._contentElement);
    this._contentContainer.appendChild(this.contentElement);
  }

  set data(data) {
    this._data = data;
    this._showContent();
  }

  _render() {
    this.innerHTML = this._basePageElement;
    this._contentContainer = getElement('section.container');
  }

  showMessage(message) {
    this._contentContainer.innerHTML = /* html */`
      <div class="message">
        <p class="message_heading">⛔️</p>
        <p class="message_content">${message}</p>
      </div>
    `;
  }
}

export default Page;
