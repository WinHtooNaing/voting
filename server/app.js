const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const voteRoute = require("./routes/vote");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(voteRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(8080);
    console.log("database server connected!! ");
  })
  .catch(() => {
    console.log("Database connection failed!!");
  });
