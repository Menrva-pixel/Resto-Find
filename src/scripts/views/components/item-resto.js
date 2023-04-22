import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
  set restoData(data) {
    this._restoItem = data;
    this._render();
  }

  renderSkeleton() {
    this.innerHTML = `
      <div class="resto_item skeleton">
        <div class="resto_thumbnail">
          <div class="skeleton_body"></div>
        </div>
        <div class="resto_content">
          <div class="skeleton_head"></div>
          <div class="sm skeleton_body"></div>
        </div>
      </div>
    `;
  }

  _render() {
    const {
      pictureId,
      name,
      rating,
      city,
      id,
      description,
    } = this._restoItem;
    this.innerHTML = `
    <article class="restaurant">
    <div class="restaurant-thumbnail">
      <img class="lazyload" data-src="${CONFIG.SMALL_BASE_IMAGE_URL}${pictureId}" alt="Resto Image ${name}">
      <div class="restaurant-rating">
        <p class="rating-number">${rating}</p>
        <div class="rating-star"></div>
      </div>
      <p class="restaurant-city">${city}</p>
    </div>
    <div class="restaurant-content">
      <a class="restaurant-name">${name}</a>
      <p class="restaurant-description">${description}</p>
      <div class="buttons">
      <a href="/#/detail/${id}" class="restaurant-button">Lihat Detail</a>
    </div
    </div>
  </article>
    `;
  }

  set favButtonState(isFavorited) {
    const label = isFavorited
      ? 'Hapus dari daftar Restaurant Favorite'
      : 'Tambah ke daftar Restaurant Favorite';

    this._favButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path d="${isFavorited ? 'M19 6H5v12h14V6zm-2 8H7v-2h10v2z' : 'M12 3L9 9h6l-3 6 6-3v8h2V9l-6 3 3-6z'}"></path>
    </svg>
  `;
    this._favButton.ariaLabel = label;
    this._favButton.title = label;
    this._favButton.classList.toggle('favorited', isFavorited);
    this._favButton.classList.add('animate');

    this._favButton.addEventListener('click', () => {
      const newFavState = !this._restaurant.isFavorite;
      this._restaurant.isFavorite = newFavState;
      this.favButtonState = newFavState;
    });

    setTimeout(() => {
      this._favButton.classList.remove('animate');
    }, 500);
  }
}

customElements.define('resto-item', RestoItem);
