const express = require('express')
const router = express('router')
const productDB = require('../db/products')

let id = 0;


router.get('/', (req, res) => {
  console.log(productDB.getAllProducts());
  res.render('index', productDB.getAllProducts());
})

router.get('/:id', (req, res) => {
  res.render('products', productDB.getProduct(parseInt(req.params.id)));
})

router.post('/', (req, res, next) => {
  console.log('okay im working')
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    let productObj = {};
    productObj.id = id;
    productObj.name = req.body.name;
    productObj.price = req.body.price;
    productObj.inventory = req.body.inventory;
    /*console.log(productObj);*/
    productDB.add(productObj);
    id++;
    }
    res.redirect('/products');
  });

router.put('/:id', (req, res, next) => {
  console.log('okay its time to WORK');
  let newValues = req.body;
  let product = productDB.getProduct(parseInt(req.params.id));
  /*console.log(product);*/
  if(newValues.hasOwnProperty('name')){
    product.name = newValues.name;
  }
  if(newValues.hasOwnProperty('price')){
    product.price = newValues.price;
  }
  if(newValues.hasOwnProperty('inventory')){
    product.inventory = newValues.inventory;
  }
  res.redirect(303, '/products/' + req.params.id);
})


router.delete('/:id', (req, res, next) => {
  productDB.deleteItem(parseInt(req.params.id));
  res.redirect(303, '/products');
})


module.exports = router;