const asyncHandler = require('express-async-handler');
const { sequelize } = require('../../models');
const ErrorResponse = require('../utils/errorResponse');

const { Menu } = sequelize.models;

// Private
exports.getMenusByOwnerId = asyncHandler(async (req, res) => {
    const { ownerId } = req.body;
    if (!ownerId) {
        throw new ErrorResponse(
            'must provide ownerId, global data retrieval is not allow.',
            400
        );
    }

    return res.status(200).json({
        success: true,
        data: await Menu.findAll({ where: { ownerId } })
    });
});

// Public
exports.getMenuById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const menu = await Menu.findOne({
        where: { id }
    });
    if (!menu) {
        throw new ErrorResponse(`menu with id: ${id} is not found`, 400);
    }
    res.status(200).json({ success: true, data: menu });
});

exports.createNewMenu = asyncHandler(async (req, res) => {
    const { title, bannerURL } = req.body;

    if (!title || !bannerURL || !req.owner.id) {
        return res.status(400).json({
            success: false,
            message: `title, bannerURL, OwnerId field are required.`
        });
    }

    console.log({ ...req.body, OwnerId: req.owner.id });

    const menu = await Menu.create({ ...req.body, OwnerId: req.owner.id });
    if (!menu) {
        throw new ErrorResponse(`menu not created.`, 400);
    }

    res.status(201).json({ success: true, data: menu });
});

exports.deleteMenuById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: `id param is required` });
    }

    const menu = await Menu.destroy({ where: { id } });

    if (!menu) {
        return res.status(404).json({
            success: false,
            message: `menu with id: ${id} is not found`
        });
    }

    res.status(200).json({ success: true, data: [] });
});

exports.updateMenuById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ErrorResponse(`id param is required`, 400);
    }

    let updated = await Menu.update({ ...req.body }, { where: { id } });

    if (!updated[0]) {
        return res.status(404).json({
            success: false,
            message: `restaurant with id: ${id} is not found`
        });
    } else {
        updated = await Menu.findOne({ where: { id } });
    }

    res.status(200).json({ success: true, data: updated });
});
