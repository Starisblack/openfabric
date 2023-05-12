const express = require('express');
const router = express.Router();


const { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct, getUserProducts } = require("../controllers/product")

router.route("/create").post(addProduct)
router.route("/all").get(getAllProducts)
router.route("/:id").get(getProduct)
router.route("/update").post(updateProduct)
router.route("/delete").post(deleteProduct)
router.route("/getuserproducts").get(getUserProducts)


module.exports = router