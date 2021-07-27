const ErrorResponse = require('./errorResponse');
const jwt = require('jsonwebtoken');

const { sequelize } = require('../../models');
const AsyncHandler = require('express-async-handler');
const { Owner } = sequelize.models;

exports.privateAuthorization = AsyncHandler(async (req, res, next) => {
    console.log('auth ran');
    if (!req.cookies) {
        throw new ErrorResponse('Not Authorized!', 403);
    }

    const { id } = jwt.decode(req.cookies.at, process.env.SECRET);

    let owner = await Owner.findOne({ where: { id } });

    if (!owner || req.cookies.at !== owner.accessToken) {
        throw new ErrorResponse('Not Authorize!', 403);
    }

    owner = { id: owner.id, fullName: owner.fullName, userId: owner.userId };

    req.owner = owner;

    next();
});
