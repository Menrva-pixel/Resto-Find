import Swal from 'sweetalert2';
import viewModel from './viewModel';
import UrlParser from '../routes/url-parser';
import { getElement } from '../utils';

class RestoDetailModel extends viewModel {
  constructor({ view, model }) {
    super({ view, model });
    this.favButtonHandler = this.onFavButtonClick.bind(this);
  }

  async showContent() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { detail, favorite } = this._model;

    try {
      this.restoDetails = await detail.getRestoDetail(url.id);
    } catch (error) {
      this.view.showMessage('Tidak dapat menemukan detail Restaurant.');
      return;
    }

    const isFavorite = await favorite.getResto(this.restoDetails.id);
    this.isFavoriteResto = Boolean(isFavorite);
    this.displayContent(this.restoDetails);
  }

  displayContent(content) {
    super.displayContent(content);
    this.view.favButtonHandler = this.favButtonHandler;
    this.view.favButtonState(this.isFavoriteResto);
  }

  /**
   * @param {Event} event
   */
  async onFavButtonClick(event) {
    event.stopPropagation();
    const {
      id, name, description, pictureId, city, rating,
    } = this.restoDetails;

    this.isFavoriteResto
      ? await this.removeFromFavorite(id)
      : await this.addToFavorite({
        id, name, description, pictureId, city, rating,
      });

    this.isFavoriteResto = !this.isFavoriteResto;
    this.view.favButtonState(this.isFavoriteResto);

    if (process.env.NODE_ENV === 'development') {
      getElement('resto-details').dispatchEvent(new Event('fav-btn:updated'));
    }
  }

  async addToFavorite(restaurant) {
    await this._model.favorite.addResto(restaurant);
    Swal.fire({
      title: 'Success',
      text: 'Restaurant berhasil ditambahkan ke favorite',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'popup-style',
        title: 'title-style',
        confirmButton: 'confirm-button',
      },
    });
  }

  async removeFromFavorite(id) {
    await this._model.favorite.deleteResto(id);
    Swal.fire({
      title: 'Success',
      text: 'Restaurant berhasil dihapus dari favorite',
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'popup-style',
        title: 'title-style',
        confirmButton: 'confirm-button',
      },
    });
  }
}

export default RestoDetailModel;
