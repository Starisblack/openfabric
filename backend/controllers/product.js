const Product = require("../models/Product");

exports.getUserProducts = async (req, res, next) => {
  const { userId } = req.body;
  console.log(userId)
  try {
    await Product.$where(createdBy === userId);
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  const { title, createdBy, description, price } = req.body;

  try {
    const product = await Product.create({
      title,
      createdBy,
      description,
      price,
    });

    res.status(201).json({
      success: true,
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(201).json({
      success: true,
      products: products,
    });
  } catch (error) {
    next(error);
  }

  // .then((item) => res.json(item))
  // .catch((err) => res.status(400).json("Error: " + err));
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(201).json({
      success: true,
      product: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  const { id, name, description, price } = req.body;

  try {
    await Product.findByIdAndUpdate(id, { name, description, price });
    res.status(201).json({
      success: true,
      message: "Products Details Updated",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.body;

  try {
    await Product.findByIdAndRemove(id);
    res.status(201).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    next(error);
  }
};
