const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let User = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  name:{
    type:String
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', User)