
const axios = require('axios');


exports.getAllCartoons = async (req, res) => {
  try {
    const response = await axios.get('https://api.sampleapis.com/cartoons/cartoons2D');
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error fetching cartoons data' });
  }
};


exports.getCartoonById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://api.sampleapis.com/cartoons/cartoons2D/${id}`);
    if (response.data && Object.keys(response.data).length > 0) {
      res.json(response.data);
    } else {
      res.status(404).json({ message: `Cartoon with ID ${id} not found` });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error fetching cartoon data' });
  }
};


exports.searchCartoons = async (req, res) => {
  const { title, year, genre } = req.query;

  try {
    const response = await axios.get('https://api.sampleapis.com/cartoons/cartoons2D');
    let cartoons = response.data;

    if (title) {
      cartoons = cartoons.filter(cartoon =>
        cartoon.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (year) {
      cartoons = cartoons.filter(cartoon => cartoon.year === parseInt(year));
    }

    if (genre) {
      cartoons = cartoons.filter(cartoon =>
        cartoon.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase())
      );
    }

    res.json(cartoons);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error searching cartoons' });
  }
};
