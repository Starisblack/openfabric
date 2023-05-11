const express = require("express")

const {private} = require("../controllers/private")
const {protect} = require("../middleware/auth")

const router = express.Router();

router.route("/").get(protect, private);


module.exports = router