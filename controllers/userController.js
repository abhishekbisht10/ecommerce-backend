// Route functions

const getProducts = (req, res) => {
    res.json({
        id: 1021,
        item: 'Facewash'
    });
}

module.exports = {
    getProducts,
}