const express = require('express');
const router = express.Router();
const {protect} = require("../middleware/auth")

const { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct} = require("../controllers/product")

router.route("/create").post(protect, addProduct)
router.route("/all").get(getAllProducts)
router.route("/:id").get(getProduct)
router.route("/update").put(protect, updateProduct)
router.route("/delete").post(protect, deleteProduct)


module.exports = router