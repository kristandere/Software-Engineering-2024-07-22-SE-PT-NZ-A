const express = require("express")
const appRouter = express.Router()

appRouter.get("/", (req, res)=> res.send("Welcome to my backend app"))

appRouter.get("/Contact", (req, res)=> res.send("Please contact 111"))

appRouter.get("/About", (req, res)=> res.send("This is a backend app developed"))

appRouter.get("/test3", (req, res)=> res.send("Testing is under construction"))

module.exports = appRouter