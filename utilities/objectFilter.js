exports.objectFilter = (obj, str) => {

    if (typeof obj !== 'object') return "data must be an object";
    if (typeof str != 'string') return "value must be a string";

    if (str in obj) {
        delete obj[str]
        return obj;
    }
    return "attribute not found";
}