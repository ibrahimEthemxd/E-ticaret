const express = require('express');
const router = express.Router();

//!Tüm ürünleri getirme
router.get("/", async (req, res) => {
    res.send("Ürünler getirildi");
})

module.exports = router;