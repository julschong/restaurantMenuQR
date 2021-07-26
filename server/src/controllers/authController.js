const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { sequelize } = require('../../models');
const ErrorResponse = require('../utils/errorResponse');
const { removePassword } = require('../utils/removePassword');
const { Owner } = sequelize.models;

exports.refreshToken = asyncHandler(async (req, res) => {
    let { refreshToken, accessToken } = req.body;

    if (!jwt.verify(refreshToken, process.env.SECRET)) {
        throw new ErrorResponse('Token Expired, please sign in again', 401);
    }

    const payload = jwt.decode(refreshToken);
    delete payload.iat;
    delete payload.exp;

    refreshToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE
    });

    accessToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE
    });

    await Owner.update(
        { refreshToken, accessToken },
        { where: { id: payload.id } }
    );

    res.status(200).json({
        success: true,
        refreshToken,
        accessToken
    });
});

exports.signinOwner = asyncHandler(async (req, res) => {
    const { userId, password } = req.body;

    if (!(userId && password)) {
        throw new ErrorResponse(
            `fullName, userId, password fields are required.`,
            400
        );
    }

    const owner = await Owner.findOne({ where: { userId: userId } });

    if (!owner || !bcrypt.compareSync(password, owner.password)) {
        throw new ErrorResponse(`userId or password is incorrect`, 403);
    }

    const payload = {
        id: owner.id,
        userId: owner.userId
    };

    const refreshToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE
    });

    const accessToken = jwt.sign(payload, process.env.SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE
    });

    await Owner.update(
        { refreshToken, accessToken },
        { where: { id: owner.id } }
    );

    res.status(200).json({ success: true, refreshToken, accessToken });
});

exports.registerNewOwner = asyncHandler(async (req, res) => {
    const { fullName, userId, password } = req.body;

    if (!(fullName && userId && password)) {
        throw new ErrorResponse(
            `fullName, userId, password fields are required.`,
            400
        );
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    const owner = await Owner.create({ ...req.body, password: passwordHash });

    if (!owner) {
        throw new ErrorResponse(`owner not created.`, 400);
    }

    removePassword(owner);

    res.status(201).json({ success: true, data: owner });
});
