import CONFIG from '../../globals/config';

class RestoInfo extends HTMLElement {
  set infoResto(infoResto) {
    this._infoResto = infoResto;
    this._showRestoInfo();
  }

  _showRestoInfo() {
    const {
      name,
      city,
      address,
      pictureId,
      rating,
      description,
      categories,
      menus,
    } = this._infoResto;

    const restoCategories = `${createList(categories)}`;
    const restoFoodMenu = `${createList(menus.foods)}`;
    const restodrinksMenu = `${createList(menus.drinks)}`;

    this.innerHTML = `
    <article class="resto-details">
    <div class="resto-header">
      <h1>${name}</h1>
      <div class="resto-img">
        <img src="${CONFIG.SMALL_BASE_IMAGE_URL}${pictureId}" alt="Resto Image ${name}">
      </div>
    </div>
    <hr>
    <section class="resto-info">
      <div class="resto-menus">
        <h2>Menu</h2>
        <div class="menus">
          <div class="sub-menu">
            <h3>Main Course</h3>
            <ul>
              ${restoFoodMenu}
            </ul>
          </div>
          <div class="sub-menu">
            <h3>Beverages</h3>
            <ul>
              ${restodrinksMenu}
            </ul>
          </div>
        </div>
      </div>
      <div class="resto-details__section">
        <div class="resto-details__content">
          <div class="address">
            <h3>Address</h3>
            <p>${address}</p>
          </div>
          <div class="city">
            <h3>City</h3>
            <p>${city}</p>
          </div>
          <div class="rating">
            <h3>Rating</h3>
            <p class="rating__value">
            ${rating}
            <span class="rating-stars">
              ${Array(Math.floor(rating)).fill('<i class="rating-star"></i>').join('')}
            </span>
          </p>
        </div>
            <div class="categories">
              <h3>Category</h3>
              <ul>
                ${restoCategories}
              </ul>
            </div>
          </div>
      </div>
    </section>
      <div class="resto-description">
        <h2>Description</h2>
        <p>${description}</p>
      </div>
    </article>
    `;
  }
}

function createList(items) {
  let listItems = '';

  for (let i = 0; i < items.length; i++) {
    const itemName = items[i].name;
    listItems += `<li>${itemName}</li>`;
  }

  return listItems;
}

customElements.define('resto-info', RestoInfo);
