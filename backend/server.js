require("dotenv").config()
const express = require("express")
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res)=> {
    res.send("hello world")
})

const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});


process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});


