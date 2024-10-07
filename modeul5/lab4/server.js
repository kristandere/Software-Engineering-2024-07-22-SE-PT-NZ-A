const express = require('express');
const friendRoutes = require('./routes/friendRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/friends', friendRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});