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
    this.dispatch('countItemCart');
    localStorage.setItem('meu-carrinho', JSON.stringify(this.state.shopCart.selected_products));
  },

  updateItemCart({state,commit},{key,value}){
    this.state.shopCart.selected_products[key].qty = value;
    this.state.shopCart.selected_products[key].total = this.state.shopCart.selected_products[key].unityPrice * this.state.shopCart.selected_products[key].qty; 
    this.state.shopCart.selected_products[key].total.toFixed(2);
    this.commit('recalcTotalCart');
    this.dispatch('countItemCart');
    localStorage.setItem('meu-carrinho', JSON.stringify(this.state.shopCart.selected_products));
  },

  removeItemCart({state,commit},i){
    this.state.shopCart.selected_products.splice(i,1);
    this.commit('recalcTotalCart');
    this.dispatch('countItemCart');
    localStorage.setItem('meu-carrinho', JSON.stringify(this.state.shopCart.selected_products));
  },

  cleanCart(state){
    state.shopCart.selected_products = [];
    this.dispatch('countItemCart');
    localStorage.setItem('meu-carrinho', JSON.stringify(this.state.shopCart.selected_products));
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

  addFromStorage(state,value){
    state.shopCart.selected_products = value;
    this.commit('recalcTotalCart');
  },

  countQty(state,value){
    value ? state.count = state.count + value : state.count = 0;
    
  }
}