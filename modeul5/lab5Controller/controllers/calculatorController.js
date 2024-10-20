const addNumbers = (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = number1 + number2;
    res.status(200).json({ result });
};

const subtractNumbers = (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = number1 - number2;
    res.status(200).json({ result });
};

const multiplyNumbers = (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = number1 * number2;
    res.status(200).json({ result });
};

const divideNumbers = (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    if (number2 === 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    const result = number1 / number2;
    res.status(200).json({ result });
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
};