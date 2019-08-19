// Custom modules
const {validator} = require("../utilities/validator")
const {responseHandler} = require("../utilities/responseHandler")

exports.validate = (req, res) => {
    const result = validator(req.body.data, req.body.rules);

    if (Array.isArray(result)) {
        const responseData = JSON.stringify({
                        statusMsg: "missing fields",
                        data: result
                    });

        return responseHandler(400, res, responseData)    
    }

    if (result == "valid") {
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