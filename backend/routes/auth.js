const express = require('express');
const router = express.Router();
const {protect} = require("../middleware/auth")



const {register, login, forgotpassword, resetpassword, updateAccount, deleteAccount} = require('../controllers/auth')

router.route("/register").post(register) 
router.route("/login").post(login) 
router.route("/forgotpassword").post(forgotpassword) 
router.route("/resetpassword/:resetToken").put(resetpassword) 
router.route("/update").post(protect, updateAccount)
router.route("/delete").post(protect, deleteAccount)
module.exports = router;