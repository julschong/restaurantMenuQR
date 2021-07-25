const ErrorResponse = require('./errorResponse.js');

const errorHander = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHander;
