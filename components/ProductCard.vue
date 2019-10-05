<template lang="pug">
.product_card
  .content.between-xs
    img.img_product(:src="picture")
    .info.col-xs.start-xs
      .category
       | Eletrônicos
      .name
        | {{name}} 
      .price  R$ {{price}}
  .add_in_car(@click="addCart()")  Adicionar no carrinho  
</template>

<script>
export default {
    props:['name','price','picture'],

    data(){
      return{

      }
    },

    methods:{
      addCart:function(){
        console.log(this.$state.products);
      }
    }
}
</script>

<style lang="less" scoped>
.product_card{
  width:250px;
  box-shadow: 0px 0px 4px #ccc;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.content{
  flex-grow:1;

  .img_product{
    width:100%;
    padding:20px;
    box-shadow: 0px 1px 2px #ccc;
  }

  .info{
    width:100%;
    background:#fff;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    height: 150px;
    .name,.price{
      margin-top: 20px;
      font-weight: bold;
    }

    .name{
      font-size:12px;
    }

    /*.description{
      font-size: 12px;
      color:#ccc;
      margin-top: 4px;
    }*/
    .category{
      color:#9F4EC8;
      font-size: 12px;
      font-weight: bold;
    }

    .price{
      font-size: 18px;
    }
  }
}

.add_in_car{
  height:40px;
  width: 100%;
  color:#9F4EC8;
  background:#fff;
  cursor: pointer;
  padding:10px;
  border-top: solid 2px #eee;
  text-decoration:none;

  &:hover{
    background:#9F4EC8;
    color:#fff;

  }
}

@media only screen and (max-width: 830px){
  .product_card{
    transform: scale(.8);
  }
}
</style>