const mongoose = require('mongoose');


mongoose.connect(
  `mongodb+srv://${process.env.DB_USER_PATH}@cluster0.fxkw3.mongodb.net/mern-project`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) console.log("mongoDB connected");
    else console.log("mongoDB ERRORS" + err);
  }
);