const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// ✅ Route to Add a New Saree Product
router.post('/add', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: "Product added successfully!", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Route to Get All Saree Products
router.get('/all', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
