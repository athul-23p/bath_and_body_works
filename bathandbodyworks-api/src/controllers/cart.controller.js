
const express = require("express");
const router = express.Router();
const Cart = require('../models/cart.model');

router.post("",async (req,res) => {
    try {
      const {body} = req;
  
        const cartItem = await Cart.create({productId:body.productId,quantity:body.quantity,userId:req.user._id});
        return res.status(201).send(cartItem);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});


router.get("",async(req,res) => {
    try{
        const cartItems = await Cart.find({userId:req.user._id}).populate({path:"productId"}).lean().exec();
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

router.delete('/:id', async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


module.exports = router;