const express = require('express');
const restaurantRoute = express.Router();

const {
    getRestaurantById,
    createNewRestaurant,
    deleteRestaurantById,
    updateRestaurantById,
    getOwnerRestaurants
} = require('../controllers/restaurantController');
const { privateAuthorization } = require('../utils/authorization');

restaurantRoute.use(privateAuthorization); // Protect Route

restaurantRoute.route('/').get(getOwnerRestaurants).post(createNewRestaurant);
restaurantRoute
    .route('/:id')
    .get(getRestaurantById)
    .delete(deleteRestaurantById)
    .put(updateRestaurantById);

module.exports = restaurantRoute;
