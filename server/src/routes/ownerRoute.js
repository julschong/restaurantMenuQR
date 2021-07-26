const express = require('express');
const ownerRoute = express.Router();

const {
    getAllOwners,
    getOwnerById,
    updateOwnerById,
    deleteOwnerById
} = require('../controllers/ownerController');

ownerRoute.route('/').get(getAllOwners);
ownerRoute
    .route('/:id')
    .get(getOwnerById)
    .delete(deleteOwnerById)
    .put(updateOwnerById);

module.exports = ownerRoute;
