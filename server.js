const express = require('express');
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

// Start the server on the port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
