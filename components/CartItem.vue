<template lang="pug">
  .item_cart.row.center-xs
    .column.col-xs-8.row.middle-xs.between-xs  
      .product
        .trash_icon(@click="removeItem(itemKey)")
          img(src="/icons/garbage.svg", title="Remover item")
        .info.col-xs.start-xs
          .category Eletrônicos
          .name(:title="name") {{name}} 
      .amount
        .border
          .amount_icon.left(@click="decrease(item,itemKey)", title="Remover uma unidade")
            img(src="/icons/minus.svg")
          .counter
            span {{item.qty}}
          .amount_icon.right(@click="increase(item,itemKey)", title="Acrescentar uma unidade")
            img(src="/icons/plus.svg")
      .unity
        p 
          b R$ {{formatReal(price.toFixed(2))}} 
          span à vista
        span ou 10x R$ {{formatReal((price/10).toFixed(2))}}
      .total
        p 
          b R$ {{formatReal(item.total.toFixed(2))}} 
          span à vista
        span ou 10x R$ {{formatReal((item.total/10).toFixed(2))}}  
</template>

<script>
export default {
  props:['item-key','item','name','price'],
  data(){
    return{

    }
  },

  mounted(){
   this.$store.dispatch('loadCart');
  },

  methods:{
    increase:function(item,key){
      this.$store.commit('updateItemCart',{key,value:item.qty+1});  
    },
    decrease:function(item,key){
      item.qty > 1 ? this.$store.commit('updateItemCart',{key,value:item.qty-1}) : null;
    },

    removeItem:function(key){
      this.$store.commit('removeItemCart',key);      
    },

    formatReal:function(value){
      return value.replace('.',',');
    }
  }
}
</script>

<style lang="less" scoped>


.column{
  border-bottom: solid 1px #8c8c8c;
  height: 100px;
  min-width: 512px; 
  .product{
    height:100%;
    max-width: 20%;
    display: flex;
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
      font-size:12px;
      .category{
        color:#9F4EC8;
        font-size: 12px;
        height:14px;
      }

      .name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 10px;
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


@media screen and (max-width:920px) {
    .product,.amount,.unity,.total{
      transform: scale(.8);
    }
}

@media screen and (max-width:768px) {
    .column{
      min-width: 312px; 
    }
}

@media screen and (max-width:630px) {
  .product,.amount,.unity,.total{
    transform:scale(.6);
  }
}
</style>