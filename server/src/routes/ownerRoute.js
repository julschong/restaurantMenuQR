const express = require('express');
const ownerRoute = express.Router();

const asyncHandler = require('express-async-handler');
const {
    getAllOwners,
    registerNewOwner,
    getOwnerById,
    updateOwnerById,
    deleteOwnerById
} = require('../controllers/ownerController');

ownerRoute.route('/').get(getAllOwners).post(registerNewOwner);
ownerRoute
    .route('/:id')
    .get(getOwnerById)
    .delete(deleteOwnerById)
    .put(updateOwnerById);

module.exports = ownerRoute;
