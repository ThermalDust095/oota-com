const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/second", (req, res) => {
  res.sendFile(__dirname + "/second.html");
});

app.get("/third", (req, res) => {
  res.sendFile(__dirname + "/third.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
