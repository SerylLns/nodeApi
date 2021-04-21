const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require('./models/dbconfig');
const postRoute = require('./routes/postRoute');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:5000/"}));

app.use('/', postRoute);

app.listen(5500,() =>  {
  console.log("listen port 5500");
})