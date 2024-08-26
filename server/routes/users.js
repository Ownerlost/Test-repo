const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/usersController');

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

module.exports = router;
