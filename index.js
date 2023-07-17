const express = require("express");
const { connection } = require("./db");
const { boardRouter } = require("./routes/board.routes");
const { taskRouter } = require("./routes/task.routes");
const { subTaskRouter } = require("./routes/subTask.routes");

require("dotenv").config();
// const cors = require("cors");
const app = express();

// app.use(cors());
app.use(express.json());
app.use("/api", boardRouter);
app.use("/api", taskRouter);
app.use("/api", subTaskRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log(`Server running on port ${process.env.port}`);
  } catch (err) {
    console.error(err);
    console.log("Something went wrong");
  }
});
