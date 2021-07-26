const asyncHandler = require('express-async-handler');
const { sequelize } = require('../../models');
const ErrorResponse = require('../utils/errorResponse');

const { Location } = sequelize.models;

exports.getAllLocations = asyncHandler(async (req, res) => {
    const RestaurantId = req.query.restaurantId;
    const extractedQuery = {};
    if (RestaurantId) {
        extractedQuery['RestaurantId'] = RestaurantId;
    }
    // TODO: Restaurant ID is needed for getting location, getAll is only for development
    // else {
    //     throw new ErrorResponse('RestarantId is requred', 400);
    // }

    return res.status(200).json({
        success: true,
        data: await Location.findAll({ where: { ...extractedQuery } })
    });
});

exports.getLocationById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const location = await Location.findOne({ where: { id } });
    if (!location) {
        throw new ErrorResponse(`Location with id: ${id} is not found`, 400);
    }
    res.status(200).json({ success: true, data: location });
});

exports.createNewLocation = asyncHandler(async (req, res) => {
    const { RestaurantId, address, phoneNumber } = req.body;

    if (!RestaurantId || !address || !phoneNumber) {
        let message = [];
        if (!RestaurantId) {
            message.push('RestaurantId');
        }

        if (!address) {
            message.push('address');
        }

        if (!phoneNumber) {
            message.push('phoneNumber');
        }

        return res.status(400).json({
            success: false,
            message: `${message.join(', ')} field are required.`
        });
    }

    const location = await Location.create({ ...req.body });
    if (!location) {
        throw new ErrorResponse(`Location not created.`, 400);
    }

    res.status(201).json({ success: true, data: location });
});

exports.deleteLocationById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: `id param is required` });
    }

    const location = await Location.destroy({ where: { id } });

    if (!location) {
        return res.status(404).json({
            success: false,
            message: `Location with id: ${id} is not found`
        });
    }

    res.status(200).json({ success: true, data: [] });
});

exports.updateLocationById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ErrorResponse(`id param is required`, 400);
    }

    const body = {};
    const validBody = ['MenuId', 'address', 'phoneNumber'];

    Object.keys(req.body).forEach((key) => {
        if (validBody.includes(key)) {
            body[key] = req.body[key];
        }
    });

    let updated = await Location.update(body, { where: { id } });

    if (!updated[0]) {
        return res.status(404).json({
            success: false,
            message: `Location with id: ${id} is not found`
        });
    } else {
        updated = await Location.findOne({ where: { id } });
    }

    res.status(200).json({ success: true, data: updated });
});
