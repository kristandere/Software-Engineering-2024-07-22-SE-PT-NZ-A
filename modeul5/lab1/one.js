const express = require('express');
const app = express();
const PORT1 = 3000;

app.get('/', (req, res) => {
    res.send('Hola mi amigo 1!');
});

app.listen(PORT1, () => {
    console.log(`one server is running on http://localhost:${PORT1}`);
});