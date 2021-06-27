const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

// const date = new Date();
// const thisYear = date.getFullYear();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/products", function (req, res) {
  res.render("products");
});

app.get("/signUp", function (req, res) {
  res.render("signUp");
});

app.post("/signUp", function (req, res) {
  res.render("signUp");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
