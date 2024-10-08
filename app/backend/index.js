const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 8080;

const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");
const todoRoutes = require("./routes/todo.routes");

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);
app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});