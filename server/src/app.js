const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
process.env.NODE_ENV == 'development' && app.use(morgan('tiny'));

const asyncHandler = require('express-async-handler');
const errorHander = require('./utils/error');

//--------Test Only TODO: remove later-------------//
const { sequelize } = require('../models/index');
const restaurantRoute = require('./routes/restaurantRoute');
const ownerRoute = require('./routes/ownerRoute');
const locationRoute = require('./routes/locationRoute');
//-------------------------------

app.use(express.json());

// add routes to app
app.use('/api/v1/restaurants', restaurantRoute);
app.use('/api/v1/owners', ownerRoute);
app.use('/api/v1/locations', locationRoute);

app.get(
    '/',
    asyncHandler(async (req, res) => {
        res.send('home page');
    })
);

app.use(errorHander);

module.exports = app;
