exports.validator = (data, rules) => {
    const error = [];

    if (typeof data !== 'object') return "data must be an object";
    if (!Array.isArray(rules) || rules.length < 1) return "rules must be an array and cannot be empty";
    
    rules.forEach(rule => {
        (rule in data) ? true : error.push(rule)
    });

    return (error.length > 0) ? error : "valid";

}