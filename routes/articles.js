const express = require('express');
const router = express('router');
const articlesModel = require('../models/articlesModel.js');
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
  articlesModel.getAllArticles()
  .then(articles => {
      res.render('index', {articles: articles})
  });
});

router.get('/new', (req, res) => {
  res.render('new_article');
})

router.get('/:title', (req, res) => {
  /*res.render('articles', articleDB.getProduct(req.params.titleUrl));*/
  articlesModel.getArticleByUrl(req.params.title)
  .then(articles => {
    res.render('articles', articles)
  })
})

router.get('/:title/edit', (req, res) => {
  articlesModel.getArticleByUrl(req.params.title)
  .then(articles => {
    res.render('edit_articles', article);
  });
})

router.post('/', (req, res) => {
  /*let newArticle = {};
  if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('author')){
    newArticle.title = req.body.title;
    newArticle.body = req.body.body;
    newArticle.author = req.body.author;
    newArticle.titleUrl = encodeURIComponent(req.body.title);
    articleDB.add(newArticle);
  }

  res.redirect('/articles');*/
  let newArticle = req.body;
  if(newArticle.hasOwnProperty('title') && newArticle.hasOwnProperty('body') && newArticle.hasOwnProperty('author') && newArticle.title !== '' && newArticle.body !== '' && newArticle.author !== ''){
    db.none(`INSERT INTO articles (title, body, author, urlTitle) VALUES ('${newArticle.title}', '${newArticle.body}', '${newArticle.author}', '${encodeURIComponent(newArticle.title)}')`)
    .then(function() {
      res.redirect(`/articles/${encodeURIComponent(newArticle.title)}`);
    })

  }
});

router.put('/:title', (req, res, next) => {
  let newValues = req.body;
  /*let article = articleDB.getArticle(req.params.title);
  if(newValues.hasOwnProperty('title')){
    article.title = newValues.title;
  }
  if(newValues.hasOwnProperty('body')){
    article.body = newValues.body;
  }
  if(newValues.hasOwnProperty('author')){
    article.author = newValues.author;
  }
  res.redirect(303, '/articles/'+ req.params.titleUrl);
})*/
  db.none(`UPDATE articles
    SET title = '${newValues.title}',
    body = ${newValues.body},
    author = ${newValues.author}
    WHERE title = ${req.params.title}`);
    res.redirect(303, '/edit_articles/' + req.params.title)
});


router.delete('/:title', (req, res) => {
  articleDB.deleteArticle(req.params.title);
  res.redirect(303, '/articles');
})

module.exports = router;