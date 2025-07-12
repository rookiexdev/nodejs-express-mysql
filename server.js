const express = require("express");
const cors = require("cors");
const { config } = require("./app/config");
const tutorialRoutes = require("./app/routes/tutorial.routes.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});
app.use("/api/tutorials", tutorialRoutes);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
