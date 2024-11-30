const express = require('express');
const router = express.Router();

//? Diğer rota dosyalarını içe aktarıyomşz
const productRoute = require('./products.js');
const categoryRoute = require('./categories.js');
const authRoute = require('./auth.js');
const couponRoute = require('./coupons.js');

//? Her rotayı ilgili yol altında kullanıyoz
router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);

module.exports = router;