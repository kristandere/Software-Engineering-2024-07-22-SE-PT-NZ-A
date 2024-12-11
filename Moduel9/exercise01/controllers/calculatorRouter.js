const express = require("express");
const calculatorRouter = express.Router();
const calculatorController = require("./calculatorController");

calculatorRouter.get("/", (req, res) => res.send("Welcome to my backend app"));
calculatorRouter.get("/Calculate", (req, res) => res.send("Please"));

calculatorRouter.get("/add", calculatorController.addNumbers);
calculatorRouter.get("/subtract", calculatorController.subtractNumbers);
calculatorRouter.get("/multiply", calculatorController.multiplyNumbers);
calculatorRouter.get("/divide", calculatorController.divideNumbers);

module.exports = calculatorRouter;