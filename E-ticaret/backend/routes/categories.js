const express = require('express');
const router = express.Router();

//!Tüm kategorileri getirme
router.get("/", async (req, res) => {
    res.send("Kategoriler getirildi");
})

module.exports = router;