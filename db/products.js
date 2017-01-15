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

function deleteItem(idInput){
  for(let i = 0; i < productList.products.length; i++){
    if(productList.products[i].id === idInput){
      productList.products.splice(productList.products.indexOf(productList.products[i], 1));
    };
  };
  return null;
}

module.exports = {

  getAllProducts: getAllProducts,
  add: add,
  getProduct: getProduct,
  deleteItem: deleteItem

}


