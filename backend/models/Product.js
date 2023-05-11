const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Provide Product Name"]
    },
    description: {
        type: String,
    },

    price: {
        type: Number,
        required: [true, "Provide Product Price"]
    }
})


const Product = new mongoose.model("Products", productSchema)

module.exports = Product



