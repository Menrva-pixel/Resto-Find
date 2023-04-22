import { createElement } from '../../utils';

class RestoDetail extends HTMLElement {
  connectedCallback() {
    this._renderSkeleton();
  }

  set details(details = {}) {
    this._details = details;
    this._render();
  }

  _renderSkeleton() {
    this.innerHTML = /* html */`
      <div class="description skeleton">
        <div class="skeleton_head"></div>
        <div class="desc_content">
          <div class="skeleton_body"></div>
          <div class="skeleton_body"></div>
        </div>
      </div>
      
      <div class="info">
        <div class="main-info">
          <div class="skeleton_head"></div>
          <div class="skeleton_body"></div>
        </div>
        <div class="resto-menus">
          <div class="skeleton_head"></div>
          <div class="menus">
            <div class="skeleton_body"></div>
            <div class="skeleton_body"></div>
          </div>
        </div>
      </div>
    `;
  }

  _render() {
    const details = this._details;
    const name = details.name;
    const description = details.description;
    const city = details.city;
    const address = details.address;
    const pictureId = details.pictureId;
    const categories = details.categories;
    const menus = details.menus;
    const rating = details.rating;

    this.innerHTML = '';

    const infoRestoElement = createElement('resto-info');
    this.appendChild(infoRestoElement);

    this._favButton = createElement('button');
    this._favButton.setAttribute('id', 'fav-button');
    this.appendChild(this._favButton);

    const infoResto = {
      name: name,
      city: city,
      address: address,
      pictureId: pictureId,
      rating: rating,
      description: description,
      categories: categories,
      menus: menus,
    };
    infoRestoElement.infoResto = infoResto;
  }

  /**
   * @param {boolean} isFavorited
   */
  set favButtonState(isFavorited) {
    const icon = isFavorited ? '💔' : '💖';
    const label = isFavorited
      ? 'Hapus dari daftar Restaurant Favorite'
      : 'Tambah ke daftar Restaurant Favorite';

    this._favButton.textContent = icon;
    this._favButton.setAttribute('aria-label', label);
    this._favButton.setAttribute('title', label);
    if (isFavorited) {
      this._favButton.classList.add('favorited');
    } else {
      this._favButton.classList.remove('favorited');
    }
  }
}

customElements.define('resto-details', RestoDetail);
