const express = require('express');
const router = express.Router();

function parseNumber(num) {
    const parsed = Number(num);
    if (isNaN(parsed)) {
        throw new Error('Invalid input');
    }
    return parsed;
}

router.get('/add', (req, res) => {
    try {
        const num1 = parseNumber(req.query.num1);
        const num2 = parseNumber(req.query.num2);
        res.json({ res: num1 + num2 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/subtract', (req, res) => {
    try {
        const num1 = parseNumber(req.query.num1);
        const num2 = parseNumber(req.query.num2);
        res.json({ res: num1 - num2 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/multiply', (req, res) => {
    try {
        const num1 = parseNumber(req.query.num1);
        const num2 = parseNumber(req.query.num2);
        res.json({ res: num1 * num2 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/divide', (req, res) => {
    try {
        const num1 = parseNumber(req.query.num1);
        const num2 = parseNumber(req.query.num2);
        if (num2 === 0) {
            return res.status(400).json({ error: 'Division by zero' });
        }
        res.json({ res: num1 / num2 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;