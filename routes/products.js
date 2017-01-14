const express = require('express')
const router = express('router')
const productDB = require('../db/products')

let id = 0;


router.get('/', (req, res) => {
  console.log(productDB.getAllProducts());
  res.render('index', productDB.getAllProducts());
})


router.post('/', (req, res, next) => {
  console.log('okay im working')
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    let productObj = {};
    productObj.id = id;
    productObj.name = req.body.name;
    productObj.price = req.body.price;
    productObj.inventory = req.body.inventory;
    console.log(productObj);
    productDB.add(productObj);
    id++;
    }
    res.redirect('/products');
  });

router.put('/:id', (req, res, next) => {

})

router.delete('/:id', (req, res, next) => {

})

module.exports = router;