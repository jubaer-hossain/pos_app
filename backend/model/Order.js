const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Order = new Schema({
  date: {
    type: Date
  },
  customer_name: {
    type: String
  },
  phone: {
    type: String
  },
  product_name: {
    type: String
  },
  selling_price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  total_price: {
    type: Number
  }

}, {
  collection: 'orders'
})

module.exports = mongoose.model('Order', Order)