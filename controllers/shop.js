const Product = require('../models/products');

////////////////////////////////////////////////////////////

const getIndex = (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200)
                .render('index', {
                    pageTitle: 'Products info',
                    products: products
                });
        })
        .catch((err) => {
            console.log('Product.findAll() error: ', err);
        })
};

module.exports = {
    getIndex,
}