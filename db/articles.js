let articleList = {
  "articles": []
}

function getAllArticles(){
  return articleList;
}

function add(obj){
  articleList.articles.push(obj);
}

module.exports = {
  getAllArticles: getAllArticles,
  add: add
};