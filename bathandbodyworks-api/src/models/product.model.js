const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  fragrance: {
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  product_type: { type: String, required: true },
  rating: {
    rate: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
  img: { type: String, required: true },
  section: { type: String, required: true },
  qty: { type: Number, default: 0 },
  size: { type: String, required: true },
  old_price:{type:Number},
  price:{type:Number,required:true}
});


module.exports = mongoose.model('product',productSchema);