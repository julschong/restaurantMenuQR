const express = require('express');
const {
    registerNewOwner,
    signinOwner
} = require('../controllers/authController');
const authRoute = express.Router();

authRoute.route('/signin').post(signinOwner);
authRoute.route('/register').post(registerNewOwner);

module.exports = authRoute;
