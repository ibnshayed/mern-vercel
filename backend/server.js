const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend", "build")));
// console.log("🚀 ~ file: server.js ~ line 9", path.join(__dirname, "../frontend", "build"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

app.get("/api/success", (req, res) => {
  res.status(200).json({ message: "Server running successfully!" });
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log("Server running on port http://localhost:" + port)
);
