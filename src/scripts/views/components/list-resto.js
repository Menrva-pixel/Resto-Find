import {
  createElement,
} from '../../utils';

class RestoList extends HTMLElement {
  connectedCallback() {
    this._renderSkeleton();
  }

  set restoList(restoList) {
    if (Array.isArray(restoList)) {
      this._renderRestoList(restoList);
    }
  }

  _renderSkeleton() {
    const numberItemSkeleton = 6;
    for (let i = 0; i < numberItemSkeleton; i++) {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.renderSkeleton();
      this.appendChild(restoItemElement.firstElementChild);
    }
  }

  _renderRestoList(restoList) {
    this.innerHTML = '';
    const restoItemElements = restoList.map((resto) => {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.restoData = resto;
      return restoItemElement.firstElementChild;
    });
    restoItemElements.forEach((restoItemElement) => {
      this.appendChild(restoItemElement);
    });
  }
}

customElements.define('resto-list', RestoList);
