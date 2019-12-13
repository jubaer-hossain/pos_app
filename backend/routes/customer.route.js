const express = require('express');
const app = express();
const customerRoute = express.Router();

// Customer model
let Customer = require('../model/Customer');

// Add Customer
customerRoute.route('/add-Customer').post((req, res, next) => {
  console.log(req.body)
  Customer.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Customer
customerRoute.route('/').get((req, res) => {
  Customer.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Customer
customerRoute.route('/read-Customer/:id').get((req, res) => {
  Customer.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Customer
customerRoute.route('/update-Customer/:id').put((req, res, next) => {
  console.log(req.body);
  Customer.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Customer successfully updated!')
    }
  })
})

// Delete Customer
customerRoute.route('/delete-Customer/:id').delete((req, res, next) => {
  Customer.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = customerRoute;