const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const app = express();
const port = 8001;

app.use(cors());
app.get("/", (req, res) => {
  res.send(`BEAM LOVE JARN <3`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
