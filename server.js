const express = require('express');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;


// Start the server on the port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
