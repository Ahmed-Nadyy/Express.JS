const express = require('express');
const staticRouter = express.Router();
const path = require('path');

staticRouter.get('/par-image', (req, res) => {
    res.sendFile(path.join(__dirname, 'images.jpg'));
});

module.exports = staticRouter