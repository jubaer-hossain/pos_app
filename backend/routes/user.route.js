const express = require('express');
const app = express();
const userRoute = express.Router();

// User model
let User = require('../model/User');

// Check User exists or not
userRoute.route('/login').post((req, res, next) => {
    User.find(req.body, (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
        console.log(data);
        res.json(data)
      }
    })
  });


  //Add user
  userRoute.route('/add-User').post((req, res, next) => {
    User.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });


  
  module.exports = userRoute;