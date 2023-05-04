/* eslint-disable no-undef */
Feature('Favorite Restaurant');

const assert = require('assert');

Scenario('Add and Remove Restaurant from Favorite List', async ({ I }) => {
  // Go to home page
  I.amOnPage('/');
  I.seeElement('.restaurant');

  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // tambah resto ke dalam list favorit
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  // Go to favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  // cek apakah resto yang dijadikan favorit ada di dalam daftar favorit
  const savedRestaurant = locate('.restaurant-name').first();
  const savedRestaurantName = await I.grabTextFrom(savedRestaurant);
  assert.strictEqual(firstRestaurantName, savedRestaurantName);

  // hapus resto dari dari daftar favorit
  I.click('#favorite-button');

  // cek apakah resto tidak dalam daftar favorit
  I.dontSeeElement('.restaurant');
});
