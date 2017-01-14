let productList = {
  "products": []
}

function getAllProducts(){
  return productList;
}

function add(obj){
  productList.products.push(obj);
}

module.exports = {

  getAllProducts: getAllProducts,
  add: add
}


