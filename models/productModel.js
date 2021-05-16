// MVC => MODEL VIEW CONTROLLERS
// AS THIS IS AN API WE DEAL WITH MODELS AND CONTROLLERS (BUT NOT WITH VIEWS)
// MODELS => DEALS WITH DATABASES / DATA(IN THIS CASE WE ARE DEALING WITH JSON FILE)
//              CREATE, UPDATE, DELETE
// CONTROLLERS => CONTROLS THE PARTICULAR ROUTES
//              STATUS SENDING , WHAT IT IS SENDING BACK, ANY HEADERS TO BE SENT OR NOT ?
//              IT ALSO INTERACTS WITH MODELS TO GET THE DATA

const products = require('../data/products.json')
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

module.exports = {
    findAll
}