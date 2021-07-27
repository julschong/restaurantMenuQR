const bcypt = require('bcrypt');

const asyncHandler = require('express-async-handler');
const { sequelize } = require('../../models');
const owner = require('../../models/owner');
const ErrorResponse = require('../utils/errorResponse');
const { removePassword } = require('../utils/removePassword');

const { Owner, Restaurant, Menu } = sequelize.models;

exports.getAllOwners = asyncHandler(async (req, res) => {
    const owners = await Owner.findAll({ include: [Restaurant, Menu] });

    return res.status(200).json({
        success: true,
        data: owners.map((owner) => {
            return { ...owner.dataValues, password: undefined };
        })
    });
});

exports.getOwnerById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const owner = await Owner.findOne({ where: { id }, include: Restaurant });

    if (!owner) {
        throw new ErrorResponse(`owner with id: ${id} is not found`, 400);
    }

    removePassword(owner);

    res.status(200).json({ success: true, data: owner });
});

exports.deleteOwnerById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: `id param is required` });
    }

    const owner = await Owner.destroy({ where: { id } });

    if (!owner) {
        return res.status(404).json({
            success: false,
            message: `owner with id: ${id} is not found`
        });
    }

    res.status(200).json({ success: true, data: [] });
});

// TODO: add authorization to this route
exports.updateOwnerById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { userId, password, fullName } = req.body;

    if (!id) {
        throw new ErrorResponse(`id param is required`, 400);
    }

    let owner = await Owner.update(
        { userId, password, fullName },
        { where: { id } }
    );

    if (!owner[0]) {
        return res.status(404).json({
            success: false,
            message: `owner with id: ${id} is not found`
        });
    } else {
        owner = await Owner.findOne({ where: { id } });
        removePassword(owner);
    }

    res.status(200).json({ success: true, data: owner });
});
