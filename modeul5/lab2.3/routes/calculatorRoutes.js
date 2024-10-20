const express = require("express");
const calculatorRouter = express.Router();

calculatorRouter.get("/", (req, res)=> res.send("Welcome to my backend app"))
calculatorRouter.get("/Calculate", (req, res)=> res.send("Please"));

calculatorRouter.get("/add", (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = number1 + number2;
    res.status(200).json({ res: result });
});

calculatorRouter.get("/subtract", (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = number1 - number2;
    res.status(200).json({ res: result });
});

calculatorRouter.get("/multiply", (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const result = number1 * number2;
    res.status(200).json({ res: result });
});

calculatorRouter.get("/divide", (req, res) => {
    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    if (number2 === 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    const result = number1 / number2;
    res.status(200).json({ res: result });
});

module.exports = calculatorRouter;