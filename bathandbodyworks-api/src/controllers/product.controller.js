
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('',async (req,res) => {
    try {

        const options = {
            page:req.query.page || 1,
            limit:48
        }

        let products = await Product.paginate({},options);
        return res.status(200).send(products);
    } catch (error) {
        return res.status(400).send(error);
    }
})

module.exports = router;