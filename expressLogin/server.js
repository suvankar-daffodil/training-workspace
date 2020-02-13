const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./router");

const app = express();
mongoose.connect("mongodb://localhost/mongooseTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static("./public"));
app.use("/", router);

app.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000");
});

