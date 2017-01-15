let productList = {
  "products": []
}

function getAllProducts(){
  return productList;
}

function add(obj){
  productList.products.push(obj);
}

function getProduct(idInput){
  for(let i = 0; i < productList.products.length; i++){
      /*console.log(productList.products[i].id, idInput);*/
      if(productList.products[i].id === idInput){
        return productList.products[i];
      };
  };
  return null;
}

module.exports = {

  getAllProducts: getAllProducts,
  add: add,
  edit: edit,
  getProduct: getProduct
}


