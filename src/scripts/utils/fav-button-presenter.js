import {
  FAV_BUTTON_TEMPLATE,
  UNFAV_BUTTON_TEMPLATE,
} from '../views/templates/fav-button-template';
import { INIT_SWAL_SUCCESS, INIT_SWAL_ERROR } from './swal-initiator';

const FAV_BUTTON_PRESENTER = {
  async init({ favButtonContainer, data, favoriteResto }) {
    this._favButtonContainer = favButtonContainer;
    this._resto = data.restaurant;
    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._resto;

      // Get data restaurant in IDB
      const data = await this._favoriteResto.getResto(id);

      if (data) {
        this._renderUnfavButtonTemplate();
      } else {
        this._renderFavButtonTemplate();
      }
    } catch (error) {
      console.error(error);
      INIT_SWAL_ERROR(error.message);

      throw new Error(error);
    }
  },

  _renderFavButtonTemplate() {
    this._favButtonContainer.innerHTML = FAV_BUTTON_TEMPLATE();

    const favButton = document.querySelector('#favButton');

    favButton.addEventListener('click', async () => {
      await this._favoriteResto.addResto(this._resto);

      INIT_SWAL_SUCCESS('Restoran telah disimpan!');
      this._renderButton();
    });
  },

  _renderUnfavButtonTemplate() {
    this._favButtonContainer.innerHTML = UNFAV_BUTTON_TEMPLATE();

    const favButton = document.querySelector('#favButton');

    favButton.addEventListener('click', async () => {
      await this._favoriteResto.delRestaurant(this._resto.id);

      INIT_SWAL_SUCCESS('Restoran belum disimpan!');
      this._renderButton();
    });
  },

};

export default FAV_BUTTON_PRESENTER;
