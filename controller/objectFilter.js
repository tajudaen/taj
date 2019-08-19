// Custom modules
const {objectFilter} = require("../utilities/objectFilter")
const {responseHandler} = require("../utilities/responseHandler")

exports.filter = (req, res) => {
    const result = objectFilter(req.body.data, req.body.item);

    if (typeof result === 'object') {
        const responseData = JSON.stringify({
                        data: result
                    });

        return responseHandler(200, res, responseData)    
    }

    if (result == "attribute not found") {
        const responseData = JSON.stringify({
                        statusMsg: result
                    });
        return responseHandler(200, res, responseData)
    }

    const responseData = JSON.stringify({
                        statusMsg: result
                    });
    return responseHandler(422, res, responseData)
}