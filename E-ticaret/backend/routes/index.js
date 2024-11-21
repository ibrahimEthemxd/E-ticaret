const express = require('express');
const router = express.Router();

//? Diğer rota dosyalarını içe aktarıyomşz
const productRoute = require('./products.js');
const categoryRoute = require('./categories.js');

//? Her rotayı ilgili yol altında kullanıyoz
router.use("/products", productRoute);
router.use("/categories", categoryRoute);

module.exports = router;