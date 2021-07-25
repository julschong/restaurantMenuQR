const express = require('express');
const restaurantRoute = express.Router();

const asyncHandler = require('express-async-handler');
const {
    getAllRestaurants,
    getRestaurantById,
    createNewRestaurant,
    deleteRestaurantById,
    updateRestaurantById
} = require('../controllers/restaurantController');

restaurantRoute.route('/').get(getAllRestaurants).post(createNewRestaurant);
restaurantRoute
    .route('/:id')
    .get(getRestaurantById)
    .delete(deleteRestaurantById)
    .put(updateRestaurantById);

module.exports = restaurantRoute;
