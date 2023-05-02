const express = require('express');

const app = express();

const restaurants = [
  { id: 1, name: 'Restaurant A', likes: 0 },
  { id: 2, name: 'Restaurant B', likes: 0 },
];

// Get all restaurants
app.get('/restaurants', (req, res) => {
  res.status(200).json(restaurants);
});

// Like a restaurant
app.post('/restaurants/:id/like', (req, res) => {
  const id = Number(req.params.id);
  const index = restaurants.findIndex((restaurant) => restaurant.id === id);
  restaurants[index].likes++;
  res.status(200).json(restaurants[index]);
});

// Unlike a restaurant
app.post('/restaurants/:id/unlike', (req, res) => {
  const id = Number(req.params.id);
  const index = restaurants.findIndex((restaurant) => restaurant.id === id);
  restaurants[index].likes--;
  res.status(200).json(restaurants[index]);
});

module.exports = app;
