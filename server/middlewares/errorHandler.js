const errorHandler = (err, req, res, next) => {
    statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    res.json({
        stack : process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        message : err.message,
    });
};

module.exports = errorHandler;