exports.responseHandler = (statusCode, res, payLoad) => {
    res.set({
        'Content-Type': 'application/json',
    });
    res.status(statusCode).send(payLoad);
}