<template lang="pug">
  .item_cart.row.center-xs
    .column.col-xs-8.row.middle-xs.between-xs  
      .product.row
        .trash_icon
          img(src="/icons/garbage.svg", title="Remover item")
        .info.col-xs.start-xs
          .category Eletrônicos
          .name Notebook Acer Xpto 5 3.0 


      .amount
        .border
          .amount_icon.left(@click="increase()", title="Acrescentar uma unidade")
            img(src="/icons/plus.svg")
          .counter
            span {{ amount }}
          .amount_icon.right(@click="decrease()", title="Remover uma unidade")
            img(src="/icons/minus.svg")
      .unity
        p 
          b R$ 1.5000,00 
          span à vista
        span ou 10x R$150,00
      .total
        p 
          b R$ 1.5000,00 
          span à vista
        span ou 10x R$150,00  
</template>

<script>
export default {
  data(){
    return{
      amount:0
    }
  },

  methods:{
    increase:function(){
      return this.amount++;
    },
    decrease:function(){
      this.amount ? this.amount-- : null;
    }
  }
}
</script>

<style lang="less" scoped>


.column{
  border-bottom: solid 1px #8c8c8c;
  height: 100px;
  .product{
    height:100%;
    max-width: 20%;
    .trash_icon{
      height:100%;
      width:16px;
      display:flex;
      align-items: center;
      justify-content: center;
      cursor:pointer;
      img{
        height:16px;
      }
    }

    .info{
      font-weight: bold;
      height:100%;
      max-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size:14px;
      .category{
        color:#9F4EC8;
        font-size: 12px;
      }
    }
  }

  .amount{
    height:100%;
    width: 20%;
    display: flex;
    align-items: center;

    .border{
      display: flex;
      align-items: center;
      border:solid 1px #8c8c8c; 
      border-radius:2px;
      .amount_icon{
        display: flex;
        align-items: center;
        height:30px;
        cursor:pointer;
        padding:2px 4px;

        &.left{
          border-right:solid 1px #8c8c8c;
        }
        
        &.right{
          border-left:solid 1px #8c8c8c;
        }
        
        img{
          width:8px;
          height:8px;
        }
      }
    }
    .counter{
      height:30px;
      width:50px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 10px;
    }
  }

  .unity,.total{
    display:flex;
    max-width: 20%;
    flex-direction: column;
    font-size:12px;
  }
}
</style>