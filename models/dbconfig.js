const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://SerylLns:8Cypk%25ZP3D.GfT%25@cluster0.fxkw3.mongodb.net/nodeAPI",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if(!err) console.log("mongoDB connected");
    else console.log("mongoDB ERRORS " + err);
  }
);