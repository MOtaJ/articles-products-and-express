let pgp = require('pg-promise')();
const PG_PASS = process.env.PG_PASS;
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'markota',
  password: PG_PASS
});

function getAllArticles(){
  return db.any('SELECT * FROM articles');
}


function getArticleByUrl(titleUrl){
  return db.one(`SELECT * FROM articles WHERE titleUrl = ${titleUrl}`)
};

function deleteItem(titleUrl){
  return db.none(`DELETE FROM articles WHERE titleUrl = ${titleUrl}`)
};

module.exports = {

  getAllArticles: getAllArticles,
  getArticleByUrl: getArticleByUrl,
  deleteItem: deleteItem

}