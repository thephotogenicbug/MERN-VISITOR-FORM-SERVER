const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("api is running...");
});

const visitor = require("./routes/visitorRoutes");
app.use("/api/v1", visitor);

app.use(errorMiddleware);

module.exports = app;
