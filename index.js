const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const app = express();
const port = 8001;

app.use(cors());
app.get("/", (req, res) => {
  res.send(`This app run on port ${port}`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
