const express = require('express');
const router = express.Router();
const { hello, getProducts } = require('../controllers/userController');

router.get('/hello', hello);
router.get('/products', getProducts);

module.exports = router;