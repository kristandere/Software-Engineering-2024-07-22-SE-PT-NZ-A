const cors = require('cors');
const express = require('express');
const calculatorRouter = require('./calculatorRouter');

const app = express();
app.use(cors());
app.use('/Calculate', calculatorRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});