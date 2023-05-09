/* eslint-disable no-undef */
Feature('Favorite Restaurant');

const assert = require('assert');

Scenario('Add and Remove Restaurant from Favorite List', async ({ I }) => {
  // Go to home page
  I.amOnPage('/');

  // navigation CTA
  const firstRestaurantCTA = locate('.restaurant-button').first();
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantCTA);

  // tambah resto ke dalam list favorit
  I.say('Uji coba favorite/unfavorite button');
  I.wait(2);
  I.waitForElement('#fav-button');
  I.click('#fav-button');

  // Go to favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  // cek apakah resto yang dijadikan favorit ada di dalam daftar favorit
  const savedRestaurant = locate('.restaurant-name').first();
  const savedRestaurantName = await I.grabTextFrom(savedRestaurant);
  assert.strictEqual(firstRestaurantName, savedRestaurantName);

  // di click dulu confirmation dialog-nya
  I.click('.confirm-button');

  const favoritedRestaurantCTA = locate('.restaurant-button').first();
  I.click(favoritedRestaurantCTA);

  // hapus resto dari dari daftar favorit
  I.click('#fav-button');

  // cek apakah resto tidak dalam daftar favorit
  I.dontSeeElement('.restaurant');

  I.say('Test berhasil!');
});
