/* eslint-disable no-undef */
import favRestoIdb from '../src/scripts/data/resto-fav-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });

  it('should show the fav button when the restaurant has not been favd before', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="fav this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unfav button when the restaurant has not been favd before', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unfav this restaurant"]')).toBeFalsy();
  });

  it('should not show the unfav button when the restaurant has not been favd before', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unfav this restaurant"]')).toBeFalsy();
  });

  it('should be able to fav the restaurant', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    document.querySelector('#favButton').dispatchEvent(new Event('click'));
    const RESTO = await favRestoIdb.getRestaurant(1);
    expect(RESTO).toEqual({
      id: 1,
    });
    favRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already favd', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({
      id: 1,
    });

    await favRestoIdb.addResto({
      id: 1,
    });

    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    expect(await favRestoIdb.getRestoList()).toEqual([{
      id: 1,
    }]);

    favRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.CREATE_FAV_BUTTON_PRESENTER_RESTO_FACTORIES({});

    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    expect(await favRestoIdb.getRestoList()).toEqual([]);
  });
});
