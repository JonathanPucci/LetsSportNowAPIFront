const express = require("express");
const app = express();
const path = require("path");
console.log("hey");
app.use(express.static(__dirname + "/dist"));
const port = process.env.PORT || 8080;
app.listen(port);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
console.log("hey" + port);
