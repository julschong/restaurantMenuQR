const asyncHandler = require('express-async-handler');
const { sequelize } = require('../../models');
const ErrorResponse = require('../utils/errorResponse');

const { Restaurant } = sequelize.models;

// Protect Route
exports.getOwnerRestaurants = asyncHandler(async (req, res) => {
    return res.status(200).json({
        success: true,
        data: await Restaurant.findAll()
    });
});

// Protect Route
exports.getRestaurantById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findOne({
        where: { id }
    });
    if (!restaurant) {
        throw new ErrorResponse(`restaurant with id: ${id} is not found`, 400);
    }
    res.status(200).json({ success: true, data: restaurant });
});

// Protect Route
exports.createNewRestaurant = asyncHandler(async (req, res) => {
    const { name, OwnerId } = req.body;

    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: `name field is required.` });
    }

    const restaurant = await Restaurant.create({ ...req.body });
    if (!restaurant) {
        throw new ErrorResponse(`restaurant not created.`, 400);
    }

    res.status(201).json({ success: true, data: restaurant });
});

// Protect Route
exports.deleteRestaurantById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: `id param is required` });
    }

    const restaurant = await Restaurant.destroy({ where: { id } });

    if (!restaurant) {
        return res.status(404).json({
            success: false,
            message: `restaurant with id: ${id} is not found`
        });
    }

    res.status(200).json({ success: true, data: [] });
});

// Protect Route
exports.updateRestaurantById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!id) {
        throw new ErrorResponse(`id param is required`, 400);
    }

    if (!name) {
        throw new ErrorResponse(`'name' field is required`, 400);
    }

    let updated = await Restaurant.update({ name }, { where: { id } });
    console.log(updated);

    if (!updated[0]) {
        return res.status(404).json({
            success: false,
            message: `restaurant with id: ${id} is not found`
        });
    } else {
        updated = await Restaurant.findOne({ where: { id } });
    }

    res.status(200).json({ success: true, data: updated });
});
