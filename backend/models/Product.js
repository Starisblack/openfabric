const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    createdBy: {
      type: String
    },

    title: {
      type: String,
      required: [true, "Please Provide Product Title"],
    },
    description: {
      type: String,
    },

    price: {
      type: Number,
      required: [true, "Provide Product Price"],
    },
  },

  {
    timestamps: true,
  }
);

const Product = new mongoose.model("Products", productSchema);

module.exports = Product;
