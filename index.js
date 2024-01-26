const express = require("express");
const { erroHandlers } = require("./handlers");
const handle = require('./handlers')

const app = express();
const port = 3280;

app.get("/",(req,res)=>res.json({hello:"world"}));

app.use(handle.notFound);
app.use(handle.erroHandlers);


app.listen(port,console.log(`server starting on port ${port}`));