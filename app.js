require('./config/config');

// Packages
const express = require('express');

const app = express();

// Custom modules


// Packages middlewares
app.use(express.json());

// Custom middlewares
const objectValidatorRoute = require('./routes/objectValidator');
const objectFilterRoute = require('./routes/objectFilter');

// Routes
app.use('/api/validate', objectValidatorRoute);
app.use('/api/filter', objectFilterRoute);

app.listen(process.env.PORT, () => {
    console.log(`Started on port ${process.env.PORT}`);
});

module.exports = {
    app
};