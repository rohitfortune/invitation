const express = require('express');
//const ejs = require('ejs');

const app = express();
//app.set("view engine", ejs);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home.ejs");
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}
app.listen(port, function () {
  console.log("server is up");
});
