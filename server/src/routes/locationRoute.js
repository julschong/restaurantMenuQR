const express = require('express');
const locationRoute = express.Router();

const {
    getAllLocations,
    createNewLocation,
    getLocationById,
    deleteLocationById,
    updateLocationById
} = require('../controllers/locationController');

locationRoute.route('/').get(getAllLocations).post(createNewLocation);
locationRoute
    .route('/:id')
    .get(getLocationById)
    .delete(deleteLocationById)
    .put(updateLocationById);

module.exports = locationRoute;
