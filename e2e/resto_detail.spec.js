/* eslint-disable no-undef */
Feature('Favorite Restaurant');

Scenario('Liking and Unliking a Restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-item a');
  const firstResto = locate('.resto-item a').first();
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('#likedButton');
  I.click('#likedButton');
  I.seeElement('#likeButton');
});
