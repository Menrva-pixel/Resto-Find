/* eslint-disable no-undef */
import favRestoIdb from '../src/scripts/data/resto-fav-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const RESTO = await favRestoIdb.getResto(1);
    expect(RESTO).toEqual({
      id: 1,
    });
    favRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    // Tambahkan restoran dengan ID 1 ke daftar restoran yang disukai
    await favRestoIdb.addResto({
      id: 1,
    });

    // Simulasikan pengguna menekan tombol suka restoran
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada restoran yang ganda
    expect(await favRestoIdb.getRestoList()).toEqual([{
      id: 1,
    }]);

    favRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.CREATE_LIKE_BUTTON_PRESENTER_RESTO_FACTORIES({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favRestoIdb.getRestoList()).toEqual([]);
  });
});
