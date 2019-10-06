export default{

  setFilter(state,value){
    state.filter = value;
  },

  cleanProductList(state){
    state.products = [];
  },

  addInCart({state,commit},value){
    value.qty = 1;
    value.unityPrice = value.unityPrice.replace('.','');
    value.unityPrice = value.unityPrice.replace(',','.');
    value.unityPrice = parseFloat(value.unityPrice)
    value.total = value.unityPrice;
    
    this.state.shopCart.selected_products.push(value);
    this.commit('recalcTotalCart');
  },

  updateItemCart({state,commit},{key,value}){
    this.state.shopCart.selected_products[key].qty = value;
    this.state.shopCart.selected_products[key].total = this.state.shopCart.selected_products[key].unityPrice * this.state.shopCart.selected_products[key].qty; 
    this.state.shopCart.selected_products[key].total.toFixed(2);
    this.commit('recalcTotalCart');
  },

  removeItemCart({state,commit},i){
    this.state.shopCart.selected_products.splice(i);
    this.commit('recalcTotalCart');
  },

  cleanCart(state){
    state.shopCart.selected_products = [];
  },
  
  recalcTotalCart(state){
    state.shopCart.total = 0;
    state.shopCart.selected_products.forEach(p => {
      state.shopCart.total = state.shopCart.total + p.total; 
    });
    
  },

  addProduct(state,value){
    state.products.push(value);
  },
}