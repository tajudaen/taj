// Packages
const express = require('express');

const router = express.Router();

// Custom modules
const objectValidatorController = require('./../controller/objectValidator');

router.post('/', objectValidatorController.validate);

module.exports = router;