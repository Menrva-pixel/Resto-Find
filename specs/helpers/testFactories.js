/* eslint-disable import/prefer-default-export */
import LIKE_BUTTON_PRESENTER from '../../src/scripts/utils/fav-button-presenter';
import favRestoIdb from '../../src/scripts/data/resto-fav-idb';

const CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES = async (restaurant) => {
  await LIKE_BUTTON_PRESENTER.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: favRestoIdb,
    data: {
      restaurant, // nama JSON data Restaurant API Dicoding
    },
  });
};

export { CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES };
