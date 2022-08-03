const express = require("express");

const PORT = 4000;

const app = express();

app.get("/data", (req, res) => {
  res.send({ message: "Data from server" });
});

app.listen(PORT, () => {
  console.log(`App listening on por ${PORT}`);
});
