const express = require('express');
const router = express.Router();



const {logout, register, login, forgotpassword, resetpassword} = require('../controllers/auth')

router.route("/logout").get(logout)
router.route("/register").post(register) 
router.route("/login").post(login) 
router.route("/forgotpassword").post(forgotpassword) 
router.route("/resetpassword/:resetToken").put(resetpassword) 
module.exports = router;