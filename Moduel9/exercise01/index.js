const express = require("express")
const calculatorRouter = require("./routes/calculatorRoutes")
const cors = require("cors")
const app = express()

app.use(cors())

const server2 = express()

const port = 3000

server2.use("/", express.static("public"))
app.use("/", calculatorRouter)
app.use("/Calculate", calculatorRouter)
app.listen(port, ()=> console.log("Server is started and listening on port" + port))
