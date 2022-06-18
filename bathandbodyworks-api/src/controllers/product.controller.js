
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('',async (req,res) => {
    try {
        console.log(req.query);
        const options = {
            page:req.query.page || 1,
            limit:48
        }
        
        const query = req.query;

        let products = await Product.paginate(query,options);
        
        return res.status(200).send(products);
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.get('/:id',async(req,res) => {
    try {
        console.log(req.params);
        const product = await Product.findById(req.params.id);
        return res.status(200).send(product);
    } catch (error) {
        console.log(error);
        return res.status(404).send(error);
    }
})

module.exports = router;