const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const tasksRouter = require("./tasks/tasks.router.js");
const cors=require("cors");

const app = express();
const port = 3001;

app.use(express.json());

const corsOptions={
  origin:["example.com","example2.com"],
}

app.use(cors());

let accessLogStream = fs.createWriteStream(
  path.join(__dirname,"..", "access.log"),{flag:"a",}
);

app.use(morgan("combined", { stream: accessLogStream }));

app.use("/", tasksRouter);

app.listen(port, () => {
  console.log(`App listening on port no: ${port}`);
});