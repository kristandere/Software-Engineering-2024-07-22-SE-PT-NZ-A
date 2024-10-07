const express = require('express');
const app = express();
const PORT2 = 4000;

app.get('/', (req, res) => {
    res.send('Hola mi amigo 2!');
});

app.listen(PORT2, () => {
    console.log(`two server is running on http://localhost:${PORT2}`);
});