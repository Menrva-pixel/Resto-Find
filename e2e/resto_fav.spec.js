/* eslint-disable no-undef */
Feature('Favorite Page');

Scenario('Displaying favorite restaurants', async ({ I }) => {
  I.amOnPage('http://localhost:9000/#/favorite');
  I.see('Favorites Restaurant', 'h1');
  I.seeElement('#resto-list');
  const numberOfRestaurants = await I.grabNumberOfVisibleElements('#resto-list .resto-item');
  assert(numberOfRestaurants > 0, 'No favorite restaurants are displayed.');
});

Scenario('Removing favorite restaurant', async ({ I }) => {
  I.amOnPage('http://localhost:9000/#/favorite');
  I.see('Favorites Restaurant', 'h1');
  const firstRestaurantName = await I.grabTextFrom('#resto-list .resto-item:first-child .resto-name');
  I.click(locate('a').withText(firstRestaurantName));
  I.seeElement('.detail-page');
  I.click(locate('button').withText('Batal Suka'));
  I.seeElement('.notification');
  I.click(locate('a').withText('Kembali Ke Halaman Favorit'));
  I.see('Favorites Restaurant', 'h1');
  const isRestaurantRemoved = await I.dontSeeElement('#resto-list', locate('.resto-name').withText(firstRestaurantName));
  assert(isRestaurantRemoved, 'Favorite restaurant is not removed from the list.');
});
