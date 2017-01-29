let pgp = require('pg-promise')();
const PG_PASS = process.env.PG_PASS;
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'markota',
  password: PG_PASS
});

function getAllProducts(){
  return db.any('SELECT * FROM products');
}


function getProductById(id){
  return db.one(`SELECT * FROM products WHERE id = ${id}`)
};

function deleteItem(id){
  return db.none(`DELETE FROM products WHERE id = ${id}`)
};

module.exports = {

  getAllProducts: getAllProducts,
  getProductById: getProductById,
  deleteItem: deleteItem

}