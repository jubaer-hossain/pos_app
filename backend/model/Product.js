const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Product = new Schema({
  product_name: {
    type: String
  },
  purchase_price: {
    type: Number
  },
  selling_price: {
    type: Number
  },
  stocks: {
    type: Number
  }
}, {
  collection: 'products'
})

module.exports = mongoose.model('Product', Product)