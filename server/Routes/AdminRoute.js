const express = require('express');
const router = express.Router();

// Default credentials
const credentials = {
  username: 'admin', // Default username
  password: 'password123', // Default password
};

// Route to get credentials
router.get('/credentials', (req, res) => {
  res.status(200).json(credentials);
});

module.exports = router;
