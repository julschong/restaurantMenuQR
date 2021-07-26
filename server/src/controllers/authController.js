const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { sequelize } = require('../../models');
const ErrorResponse = require('../utils/errorResponse');
const { removePassword } = require('../utils/removePassword');
const { Owner } = sequelize.models;

exports.signinOwner = asyncHandler(async (req, res) => {
    const { userId, password } = req.body;

    if (!(userId && password)) {
        throw new ErrorResponse(
            `fullName, userId, password fields are required.`,
            400
        );
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    const owner = await Owner.findOne({ where: { userId: userId } });

    if (!owner || !bcrypt.compareSync(password, owner.password)) {
        throw new ErrorResponse(`userId or password is incorrect`, 403);
    }

    removePassword(owner);

    const refreshToken = jwt.sign(JSON.stringify(owner), process.env.SECRET, {
        expiresIn: '2 days'
    });

    const accessToken = jwt.sign(JSON.stringify(owner), process.env.SECRET, {
        expiresIn: 100
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
