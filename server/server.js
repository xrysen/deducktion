const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const data = require("./data/data");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/data", (req, res) => {
  res.send(data.data);
});

// Adds data from form to the "database"

app.post("/data", (req, res) => {
  data.data.push(req.body);
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

