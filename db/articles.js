let articleList = {
  "articles": []
}

function getAllArticles(){
  return articleList;
}

function add(obj){
  articleList.articles.push(obj);
}

function getArticle(titleInput){
  for(let i = 0; i < articleList.articles.length; i++){
    if(articleList.articles[i].titleUrl === titleInput){
      return articleList.articles[i];
    };
  };
  return null;
}

function deleteArticle(titleInput){
  for(let i = 0; i < articleList.articles.length; i++){
    if(articleList.articles[i].title === titleInput){
      articleList.articles.splice(articleList.articles.indexOf(articleList.articles[i], 1));
    };
  };
}

module.exports = {
  getAllArticles: getAllArticles,
  add: add,
  getArticle: getArticle,
  deleteArticle: deleteArticle
};