const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const responseFormatter = require("./middleware/responseFormatter.js");
const { StatusCodes } = require("http-status-codes");

const tasksRouter = require("./src/tasks/tasks.router.js");
const authRouter = require("./src/auth/auth.router.js");
const usersRouter = require("./src/users/users.router.js");

const app = express();
const port = 3001;

// 🔹 Middleware
app.use(express.json());

// CORS
const corsOptions = {
  origin: ["example.com", "example2.com"],
};
app.use(cors()); // or use cors(corsOptions)

// 🔹 Morgan (logging)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

// 🔹 Custom Response Formatter
app.use(responseFormatter);

// 🔹 Routes
app.use("/", tasksRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

// 🔹 404 Handler
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json(null);
});

// 🔹 Start Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});