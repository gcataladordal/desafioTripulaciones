const express = require("express");
const app = express();
const router = require("./routes/routes");
const connect = require("./database/mongo");
var cors = require('cors')


app.use(cors())
app.use(express.json())
app.use("/", router)



const port = 5500
app.listen(port, () => console.log(`Servidor en puerto: ${port}`))
