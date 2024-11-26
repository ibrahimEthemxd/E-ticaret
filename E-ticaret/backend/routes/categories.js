const express = require('express');
const router = express.Router();
const Category = require('../models/Category.js');

//? Yeni bir kategori oluşturma (Read - All)
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
})

router.post("/", async (req, res) => {
    try {
        const { name, img } = req.body;
        const newCategory = new Category({ name, img });
        await newCategory.save();
        res.status(201).send(newCategory);
        console.log(name, img);
    } catch (error) {
        console.log(error);
    }
})

//!Tüm kategorileri getirme
router.get("/", async (req, res) => {
    res.send("Kategoriler getirildi");
})

module.exports = router;  