/* eslint-disable no-undef */
import favRestoIdb from '../src/scripts/data/resto-fav-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavButtonContainer();
    await favRestoIdb.addResto({
      id: 1,
    });
  });

  afterEach(async () => {
    await favRestoIdb.deleteResto(1);
  });

  it('should display unfav widget when the restaurant has been favorited', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unfav this restaurant"]')).toBeTruthy();
  });

  it('should not display fav widget when the restaurant has been favorited', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="fav this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove favd restaurant from the list', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    document.querySelector('[aria-label="unfav this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favRestoIdb.getRestoList()).toEqual([]);
  });

  it('should not throw error if the unfavd restaurant is not in the list', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    await favRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unfav this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favRestoIdb.getRestoList()).toEqual([]);
  });
});
