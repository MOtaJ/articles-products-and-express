const express = require('express');
const router = express('router');
const articleDB = require('../db/articles');

router.get('/', (req, res) => {
  res.render('index', articleDB.getAllArticles());
});


router.post('/', (req, res) => {
  let newArticle = {};
  if(req.body.hasOwnProperty('title') && req.body.hasOwnProperty('body') && req.body.hasOwnProperty('author')){
    newArticle.title = req.body.title;
    newArticle.body = req.body.body;
    newArticle.author = req.body.author;
    newArticle.titleUrl = encodeURIComponent(req.body.title);
    articleDB.add(newArticle);
  }

  res.redirect('/articles');
});

module.exports = router;