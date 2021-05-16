// MVC => MODEL VIEW CONTROLLERS
// AS THIS IS AN API WE DEAL WITH MODELS AND CONTROLLERS (BUT NOT WITH VIEWS)
// MODELS => DEALS WITH DATABASES / DATA(IN THIS CASE WE ARE DEALING WITH JSON FILE)
//              CREATE, UPDATE, DELETE
// CONTROLLERS => CONTROLS THE PARTICULAR ROUTES
//              STATUS SENDING , WHAT IT IS SENDING BACK, ANY HEADERS TO BE SENT OR NOT ?
//              IT ALSO INTERACTS WITH MODELS TO GET THE DATA

const Product = require('../models/productModel')


// @desc    Gets All Products
// @route   GET /api/products
async function getProducts(req, res) {
    try {
        const products = await Product.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single Product
// @route   GET /api/product/:id
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)
        if (!product) {
            // IF PRODUCT DOESNT EXISTS
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: "Product Not Found" }))
        } else {
            // IF PRODUCT EXISTS
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct
}