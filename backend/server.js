require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });

// ✅ Import & Use Routes (Add This Below MongoDB Connection)
const productRoutes = require('./routes/productRoutes');
app.use(express.json());  // Make sure this is included to handle JSON requests
app.use('/api/products', productRoutes);


// ✅ Test Route
app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

