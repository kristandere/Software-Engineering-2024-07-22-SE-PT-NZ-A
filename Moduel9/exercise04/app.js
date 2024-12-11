// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const cartoonsRoutes = require('./routes/cartoonsRoutes');
app.use('/api/cartoons', cartoonsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Blog API with Cartoons Integration');
});


const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
