const express = require('express');
const {
    registerNewOwner,
    signinOwner,
    refreshToken
} = require('../controllers/authController');
const authRoute = express.Router();

authRoute.route('/signin').post(signinOwner);
authRoute.route('/refresh').post(refreshToken);
authRoute.route('/register').post(registerNewOwner);

module.exports = authRoute;
