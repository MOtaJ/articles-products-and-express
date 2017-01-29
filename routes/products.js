const express = require('express');
const router = express('router');
const productsModel = require('../models/productsModel.js');
let pgp = require('pg-promise')();
const PG_PASS = process.env.PG_PASS;
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'markota',
  password: PG_PASS
});

router.get('/', (req, res) => {
  productsModel.getAllProducts()
  .then(products => {
    console.log(products);
      res.render('index', {products: products})
  });
})

router.get('/new', (req, res) => {
    res.render('new');
})

router.get('/:id', (req, res) => {
  productsModel.getProductById(req.params.id)
  .then(product => {
    console.log(product)
    res.render('products', product);
  })
})

router.get('/:id/edit', (req, res) => {
  productsModel.getProductById(req.params.id)
  .then(product => {
    console.log(product)
    res.render('edit', product);
  })
})

router.post('/', (req, res) => {
/*  console.log('okay im working')
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    let productObj = {};
    productObj.id = id;
    productObj.name = req.body.name;
    productObj.price = req.body.price;
    productObj.inventory = req.body.inventory;*/
    /*console.log(productObj);
    productDB.add(productObj);
    id++;
    }
    res.redirect('/products');*/
    let newItem = req.body;
    if(newItem.hasOwnProperty('name') && newItem.hasOwnProperty('price') && newItem.hasOwnProperty('inventory') && newItem.name !== '' && newItem.price !== '' && newItem.inventory !== ''){
      db.none(`INSERT INTO products (name, price, inventory) VALUES ('${newItem.name}', ${newItem.price}, ${newItem.inventory})`)
      .then(function() {
        console.log('it worked');
        res.redirect('/products')
      })
      .catch(function(error) {
        console.log('it didnt fucking work');
        req.flash("error-msg", "POST UNSUCCESSFUL Invalid property or value");
        res.redirect('/products');
      });
    }
  });

router.put('/:id', (req, res, next) => {
  console.log('okay its time to WORK');
  let newValues = req.body;
    /*console.log(product);*/
  /*if(newValues.hasOwnProperty('name')){
    product.name = newValues.name;
  }
  if(newValues.hasOwnProperty('price')){
    product.price = newValues.price;
  }
  if(newValues.hasOwnProperty('inventory')){
    product.inventory = newValues.inventory;
  }*/
  db.none(`UPDATE products
    SET name = '${newValues.name}',
    price = ${newValues.price},
    inventory = ${newValues.inventory}
    WHERE id = ${req.params.id}`);
    res.redirect(303, '/products/' + req.params.id);
  })



router.delete('/:id', (req, res, next) => {
  let itemToDelete = req.params.id;
    productsModel.deleteItem(itemToDelete)
    .then(function() {
      console.log('delete was success');
      res.redirect(303, '/products');
  })
})


module.exports = router;