const axios = require('axios');

const fetchProducts = async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
};

module.exports = { fetchProducts };