/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';
import favRestoIdb from '../src/scripts/data/resto-fav-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favRestoIdb.getRestoList()).forEach(async (resto) => {
      await favRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(favRestoIdb);
});
