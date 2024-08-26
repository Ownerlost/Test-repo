const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
const users = require('./routes/users');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/users', users);

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to HeyOwl! API' });
});

// Serve React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
