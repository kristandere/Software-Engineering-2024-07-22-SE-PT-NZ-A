const express = require("express")
const calculatorRouter = require("./routes/calculatorRoutes")
const cors = require("cors")
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const port = 3000

app.use("/", express.static("public"));
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", calculatorRouter)
app.use("/Calculate", calculatorRouter)
app.listen(port, ()=> console.log("Server is started and listening on port" + port))
