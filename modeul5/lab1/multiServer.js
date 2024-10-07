const express = require('express');

function createServer(port, message) {
    const app = express();
    app.get('/', (req, res) => {
        res.send(message);
    });
    
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

createServer(3000, 'Hola mi amigo 1!');
createServer(4000, 'Hola mi amigo 2!');