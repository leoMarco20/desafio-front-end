
let products = [
  {"name":"Notebook Essentials E30 Intel Core I3 4GB 1TB LED Full HD 15.6'' W10 Cinza Titânio - Samsung","price":"1.799,90","picture":"https://i.ibb.co/B4xmk45/1.jpg"},
  {"name":"Notebook Lenovo Ideapad S145 8ª Intel Core I5 8GB 1TB HD 15,6 W10 Prata","price":"2.222,57","picture":"https://i.ibb.co/gr7cdV1/2.jpg"},
  {"name":"Notebook Dell Inspiron I15-3567-A50P Intel Core i7 8GB 2TB Tela LED 15,6 Windows 10 - Preto","price":"3.067,44","picture":"https://i.ibb.co/b6tHt4y/3.jpg"},
  {"name":"Notebook Samsung Essentials E20 Intel Celeron 4GB 500GB Tela LED HD 15,6'' Windows 10 - Branco","price":"1.408,26","picture":"https://i.ibb.co/3zcstSd/4.jpg"},
  {"name":"Notebook Positivo Motion Q232AP Intel Atom 2GB 32GB SSD Tela LCD 14” Windows 10 - Cinza","price":"899,90","picture":"https://i.ibb.co/3z5LXDR/5.jpg"},
  {"name":"Notebook Legacy PC107 Intel Atom 2GB 64GB (32GB +32GB SD) W10 14 Preto - Multilaser + Office Home \u0026 Student - Versão Perpétua","price":"809,99","picture":"https://i.ibb.co/0tzQTCH/6.jpg"},
  {"name":"Notebook Samsung Expert X40 8ª Intel Core I5 8GB (Geforce MX110 com 2GB) 1TB HD LED 15,6 Branco","price":"2.410,84","picture":"https://i.ibb.co/cFSJ52Z/7.jpg"},
  {"name":"Notebook Lenovo Ideapad 330 Dual Core Intel Celeron 4GB 500GB Tela 15,6 Windows - 10 Preto","price":"1.497,69","picture":"https://i.ibb.co/5Gbc0zP/8.jpg"},
  {"name":"Notebook Positivo Motion Q464A Intel Atom 4GB 64GB SSD + 64GB Nuvem Tela 14” Windows 10 - Vermelho","price":"944,99","picture":"https://i.ibb.co/4Wz9L5X/9.jpg"}
];

export default{
  
  listProducts({state,commit}){
    return new Promise((resolve,reject)=>{
      commit("cleanProductList");
      state.filter.length ? products.filter((value)=>{return value.name.toLowerCase().indexOf(state.filter.toLowerCase()) != -1}).forEach(p => {
        commit("addProduct",p);
        resolve()
      }) : products.forEach(p => {
        commit("addProduct",p);
        resolve()
      });
    })  
  },
}