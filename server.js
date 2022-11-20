let express = require("express");
let app = express();

let PORT = 8080;

app.get("/home", (req, res) => {
  res.send("home");
  res.end();
});

app.listen(PORT, () => {
  console.log("This API is working on " + PORT);
});
