require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const authRoute = require("./routes/auth")
const privateRoute = require("./routes/private")
const productRoute = require("./routes/product")
// connect DB
connectDB();

const app = express();
app.use(express.json());

 
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT, DELETE",
    credentials: true,
  })
);

app.use("/openfabric/auth", authRoute);
app.use("/openfabric/private", privateRoute);
app.use("/openfabric/product", productRoute)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
