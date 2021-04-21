const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });
require('./models/dbconfig');
const postRoute = require('./routes/postRoute');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/', postRoute);
app.listen(5500,() =>  {
  console.log("listen port 5500");
})