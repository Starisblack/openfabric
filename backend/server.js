require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
// const session = require('express-session');
const cors = require("cors");
// connect DB
connectDB();

const app = express();
app.use(express.json());

 
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT, DELETE",
    credentials: true,
  })
);

app.use("/openfrabic/auth", require("./routes/auth"));
app.use("/openfrabic/private", require("./routes/private"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
