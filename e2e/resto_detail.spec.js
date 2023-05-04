/* eslint-disable no-undef */
Feature('Resto Detail Page');

Scenario('User can see restaurant details', ({ I }) => {
  // Open the Resto Detail page
  I.amOnPage('/detail');

  // Verify that the skeleton elements are rendered
  I.seeElement('.description.skeleton');
  I.seeElement('.skeleton_head');
  I.seeElement('.skeleton_body');

  I.seeElement('.info');
  I.seeElement('.main-info .skeleton_head');
  I.seeElement('.main-info .skeleton_body');
  I.seeElement('.resto-menus .skeleton_head');
  I.seeElement('.resto-menus .menus .skeleton_body');

  const infoResto = JSON.stringify(details);
  const encodedInfoResto = encodeURIComponent(infoResto);
  const url = `/detail?info=${encodedInfoResto}`;
  I.amOnPage(url);

  I.see(details.name);
  I.see(details.city);
  I.see(details.address);
  I.see(details.description);
  I.see(details.categories[0]);
  I.see(details.categories[1]);
  I.see(details.menus.foods[0].name);
  I.see(details.menus.foods[0].price);
  I.see(details.menus.foods[1].name);
  I.see(details.menus.foods[1].price);
  I.see(details.menus.drinks[0].name);
  I.see(details.menus.drinks[0].price);
  I.see(details.menus.drinks[1].name);
  I.see(details.menus.drinks[1].price);
  I.see(details.rating);

  I.click('#fav-button');

  I.see('💔');
  I.seeAttribute('#fav-button', 'aria-label', 'Hapus dari daftar Restaurant Favorite');
  I.seeAttribute('#fav-button', 'title', 'Hapus dari daftar Restaurant Favorite');
  I.seeElement('#fav-button.favorited');

  I.click('#fav-button');

  I.see('💖');
  I.seeAttribute('#fav-button', 'aria-label', 'Tambah ke daftar Restaurant Favorite');
  I.seeAttribute('#fav-button', 'title', 'Tambah ke daftar Restaurant Favorite');
  I.dontSeeElement('#fav-button.favorited');
});
