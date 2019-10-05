export default{

  setFilter(state,value){
    state.filter = value;
  },

  cleanProductList(state){
    state.products = [];
  },

  addInCart(state,value){
    state.shopCart.selected_products.push(value);
  },

  addProduct(state,value){
    state.products.push(value);
  }  
}