
export default{
  
  listProducts({state,commit}){
    return new Promise((resolve,reject)=>{
      commit("cleanProductList");
      this.$axios.$get("https://api.myjson.com/bins/9e9fl").then((products)=>{
        state.filter.length ? products.filter((value)=>{return value.name.toLowerCase().indexOf(state.filter.toLowerCase()) != -1}).forEach(p => {
          commit("addProduct",p);
          resolve()
        }) : products.forEach(p => {
          commit("addProduct",p);
          resolve()
        });
      })
    })  
  },

  loadCart({state,commit}){
    return new Promise((resolve,reject)=>{
      commit("addFromStorage",JSON.parse(window.localStorage.getItem('meu-carrinho')));
      resolve()
    })  
  },

  countItemCart({state,commit}){
    commit("countQty",0);
    return new Promise((resolve,reject)=>{
      state.shopCart.selected_products.forEach(p => {
        commit("countQty",p.qty);
      });
      resolve()
    })  
  },
}