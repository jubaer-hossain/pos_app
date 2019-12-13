const express = require('express');
const app = express();
const orderRoute = express.Router();

// Order model
let Order = require('../model/Order');
let Product = require('../model/Product');
let Customer=require ("../model/Customer")

// Add Order
orderRoute.route('/add-Order').post((req, res, next) => {
  console.log(req.body)
  Order.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      Customer.create({ "name": req.body.customer_name, "phone": req.body.phone }, (error, data) => {
        console.log('customer', data);
      })
      Product.findOne({ product_name: req.body.product_name }, function (err, product) {
        if (err)

          console.log(err)
        else {
          console.log("product", product);
          if (product != null) {
            let doc = Product.findOneAndUpdate({ product_name: req.body.product_name }, { stocks: (product.stocks - req.body.quantity) }, { new: true, upsert: true }, (err, doc) => {
              if (err)
                console.log(err)
              else
                console.log(doc)
            });
            console.log('After update', doc);
          }
        }
        res.json(data)
      })


    }
  })
});

// Get all Order
orderRoute.route('/').get((req, res) => {
  Order.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Order
orderRoute.route('/read-Order/:id').get((req, res) => {
  Order.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Order
orderRoute.route('/update-Order/:id').put((req, res, next) => {
  console.log(req.body);
  Order.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Order successfully updated!')
    }
  })
})

// Delete Order
orderRoute.route('/delete-Order/:id').delete((req, res, next) => {
  Order.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Total Order
orderRoute.route('/total-Order').get((req, res, next) => {
  Order.count({}, (error, count) => {
    if (error) {
      return next(error);
    } else {
      res.json(count)
    }
  })
})

orderRoute.route('/total-selling-price').get((req, res, next) => {
  Order.aggregate([{
    $group: {
      _id: null,
      TotalSellingPrice: { $sum: "$total_price" }
    }
  }], (error, count) => {
    console.log(count)
    if (error) {
      return next(error);
    } else {
      res.json(count)
    }
  })
})


module.exports = orderRoute;