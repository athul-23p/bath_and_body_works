
const express = require("express");
const router = express.Router();
const Cart = require('../models/cart.model');

router.post("",async (req,res) => {
    try {
        const cartItem = await Cart.create({...req.body,userId:req.userId});
        return res.status(201).send(cartItem);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});


router.get("/:id",async(req,res) => {
    try{
        const cartItems = await Cart.find({userId:req.userId}).populate({path:"productId"}).lean().exec();
        return res.status(200).send(cartItems);
    }catch(error){
        return res.status(400).send(error.message);
        
    }
    
});


router.patch("/:id/:newQty",async (req,res) => {
  try {
    const cartItem = await Cart.findByIdAndUpdate(req.params.id,{quantity:req.params.newQty});
    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }  
})

router.delete('/id', async (req, res) => {
  try {
    const cartItem = await Cart.findAndDelete({ _id: req.params.id });
    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


module.exports = router;