require('dotenv').config();
const express = require("express");
const handle = require('./handlers');
const cors = require("cors");
const bodyparser =require("body-parser");


const app = express();
const port = 3280;

app.use(cors());
app.use(bodyparser.json());


app.get("/",(req,res)=>res.json({hello:"world"}));

app.use(handle.notFound);
app.use(handle.erroHandlers);


app.listen(port,console.log(`server starting on port ${port}`));