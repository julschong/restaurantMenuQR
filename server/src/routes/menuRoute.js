const express = require('express');
const {
    getMenusByOwnerId,
    createNewMenu,
    getMenuById,
    deleteMenuById,
    updateMenuById
} = require('../controllers/menuController');
const { privateAuthorization } = require('../utils/authorization');
const menuRoute = express.Router();

// Protected Route
menuRoute.use(privateAuthorization);

menuRoute.route('/').get(getMenusByOwnerId).post(createNewMenu);
menuRoute
    .route('/:id')
    .get(getMenuById)
    .delete(deleteMenuById)
    .put(updateMenuById);

module.exports = menuRoute;
