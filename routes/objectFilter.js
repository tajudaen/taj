// Packages
const express = require('express');

const router = express.Router();

// Custom modules
const objectFilterController = require('./../controller/objectFilter');

router.post('/', objectFilterController.filter);

module.exports = router;