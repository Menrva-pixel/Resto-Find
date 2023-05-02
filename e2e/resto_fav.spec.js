/* eslint-disable no-undef */
Feature('Favorite Page');

Scenario('Menampilkan halaman favorit', ({ I }) => {
  I.amOnPage('#/favorite');

  I.see('Favorites Restaurant', 'h1');

  I.seeElement('resto-list');
});

Scenario('Menampilkan daftar restoran favorit', ({ I }) => {
  I.amOnPage('#/favorite');

  I.waitForElement('resto-list');

  I.seeElement('.resto-item');
});

Scenario('Menampilkan pesan jika tidak ada restoran favorit', ({ I }) => {
  I.amOnPage('#/favorite');

  I.waitForElement('resto-list');

  I.dontSeeElement('.resto-item');

  I.see('Tidak ada restoran favorit', 'p');
});
