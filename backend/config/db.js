const mongoose = require("mongoose")



mongoose.set("strictQuery", false)
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
   console.log("database connected")
}

module.exports = connectDB;