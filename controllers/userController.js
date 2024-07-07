// Route functions
const sneakerData = require('../data/sneakers');

const hello = (req, res) => {
    res.json('Hello World!');
}

const getProducts = (req, res) => {
    res.json(sneakerData);
}

module.exports = {
    hello,
    getProducts,
}