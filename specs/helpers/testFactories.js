/* eslint-disable import/prefer-default-export */
import FAV_BUTTON_PRESENTER from '../../src/scripts/utils/fav-button-presenter';
import favRestoIdb from '../../src/scripts/data/resto-fav-idb';

const CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES = async (restaurant) => {
  await FAV_BUTTON_PRESENTER.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    favoriteResto: favRestoIdb,
    data: {
      restaurant, // nama JSON data Restaurant API Dicoding
    },
  });
};

export { CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES };
