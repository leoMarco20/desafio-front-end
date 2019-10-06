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
    
  },

  setName(state,value){
    state.user.name = value;
    value.length ? state.user.errUser.name = false : state.user.errUser.name = true; 
  },

  setEmail(state,value){
    state.user.email = value;
    
  },

  setCpf(state,value){
    state.user.cpf = value;
    value.length || value.match(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|)$/) ? state.user.errUser.cpf = false : state.user.errUser.cpf = true;
  },

  setBirthDate(state,value){
    state.user.birthDate = value;
  },

  setPhone(state,value){
    state.user.phone = value;
  },

  setAddress(state,value){
    state.user.address = value;
  },

  setZipCode(state,value){
    state.user.zipCode = value;
  },

  setState(state,value){
    state.user.state = value;
  },

  setNumber(state,value){
    state.user.number = value;
  },

  setComplement(state,value){
    state.user.complement = value;
  },

  setNeightborhood(state,value){
    state.user.neightborhood = value;
  },

  setCity(state,value){
    state.user.city = value;
  }

}