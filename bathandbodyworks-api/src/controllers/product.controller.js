
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('',async (req,res) => {
    try {
        let products = await Product.find();
        return res.status(200).send({products,item_count:products.length});
    } catch (error) {
        return res.status(400).send(error);
    }
})

module.exports = router;