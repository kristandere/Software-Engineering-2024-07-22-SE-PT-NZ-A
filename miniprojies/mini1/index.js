const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const restaurants = [
    { id: 1, name: "Pizza Place", location: "new-york", description: "Delicious pizzas with fresh ingredients.", image: "https://via.placeholder.com/300x200?text=Pizza", timestamp: new Date().toISOString() },
    { id: 2, name: "Burger Joint", location: "los-angeles", description: "Juicy burgers made to order.", image: "https://via.placeholder.com/300x200?text=Burger", timestamp: new Date().toISOString() },
    { id: 3, name: "Sushi Spot", location: "chicago", description: "Authentic sushi with the finest fish.", image: "https://via.placeholder.com/300x200?text=Sushi", timestamp: new Date().toISOString() },
    { id: 4, name: "Taco Stand", location: "miami", description: "Tasty tacos with a variety of fillings.", image: "https://via.placeholder.com/300x200?text=Tacos", timestamp: new Date().toISOString() },
    { id: 5, name: "Pasta House", location: "new-york", description: "Freshly made pasta and sauces.", image: "https://via.placeholder.com/300x200?text=Pasta", timestamp: new Date().toISOString() },
];

app.get('/restaurants', (req, res) => {
    res.json(restaurants);
});
console.log(restaurants);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});