const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/userController');

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.get('/products', getProducts);

module.exports = router;