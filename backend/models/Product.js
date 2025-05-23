const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // URL for saree image
    stock: { type: Number, required: true, default: 10 },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
