const mongoose = require("mongoose");
require("dotenv").config();

const database = process.env.MONGO_URI;

mongoose
  .connect(database, { useNewUrlParser: true })
  .then((con) => {
    console.log(`Database Connected at : ${con.connection.host}`);
  })
  .catch((error) => {
    console.log(`Database Error: ${error.message}`);
  });
