<template lang="pug">
  .shop_cart.col-xs.between-xs
    header-section
    
    .column.row.center-xs
      .titles.col-xs-8.row.between-xs(v-if="cartItems.length" )
        span Produto
        span Quantidade
        span Valor unitário
        span Total


      span.empty.row.center-xs(v-if="!cartItems.length") O seu carrinho está vazio
    cart-item(v-if="cartItems.length" v-for="i in cartItems", :item="i", :item-key="cartItems.indexOf(i)" :name="i.name",:price="i.unityPrice")
    
    .total.row.center-xs(v-if="cartItems.length" )
      .info.col-xs-8.end-xs
        .prize
          b Total à vista 
          b R$ {{formatReal(shopCartTotal.toFixed(2))}}
        .total_installment.row.end-xs
          b Total parcelado 
          .installment.start-xs
            p
              span em até 
              b 10X R$ {{formatReal((shopCartTotal/10).toFixed(2))}}
            span (Total R$ {{formatReal(shopCartTotal.toFixed(2))}})
    .row.center-xs
      .purchase.col-xs-8.row.between-xs
        .clear_cart.row.middle-xs(v-if="cartItems.length", @click="cleanCart()")
          img.trash_icon(src="/icons/garbage.svg")
          span Limpar carrinho
        .buttons.row.end-xs
          nuxt-link.btn.btn-secondary(to="/",v-if="!cartItems.length") Página inicial
          nuxt-link.btn.btn-secondary(to="/",v-if="cartItems.length") Continuar comprando
          nuxt-link.btn.btn-primary(to="/checkout",v-if="cartItems.length") Confirmar compra
    footer-section
</template>

<script>

import HeaderSection from '~/components/HeaderSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import CartItem from '~/components/CartItem.vue'

export default {
  components: {
    'header-section' : HeaderSection,
    'footer-section' : FooterSection,
    'cart-item' : CartItem
  },

  mounted(){
    this.$store.dispatch('loadCart');
  },

  computed:{
    cartItems:{
      get(){
        return this.$store.state.shopCart.selected_products
      }
    },

    shopCartTotal:{
      get(){
        return this.$store.state.shopCart.total
      }
    },
    count:{
      get(){
        return this.$store.state.count
      }
    }
  },

  methods:{
    formatReal:function(value){
      return value.replace('.',',');
    },

    cleanCart:function(){
      this.$store.commit("cleanCart");
    }
  }
}
</script>

<style lang="less" scoped>
.shop_cart{
  height:100%;
  display: flex;
  flex-direction: column;
  color:#5D5758;
}

.column{
  padding-top: 40px;
  flex-grow: 1;

}

.titles{
  padding: 10px 40px;
  height: 50px;
  font-weight: bold;
  border-bottom: solid 1px #8c8c8c;
  min-width: 532px; 
}

.empty{
  color: #ccc;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.total{

  .info{
    padding: 40px;
    border-bottom: solid 1px #8c8c8c;
    .prize{
      padding: 10px 0px;
      
      :last-child{
        color:#9F4EC8;
        font-size: 18px;
        margin-left: 20px;
      }
    }

    .total_installment{
      .installment{
        display: flex;
        font-size: 12px;
        flex-direction: column;
        margin-left:20px;
      }
      
    }
  }
}


.purchase{
  padding: 40px;
  display: flex;
  flex-wrap: nowrap;
  
  .clear_cart{
    font-size: 12px;
    cursor:pointer;
    padding: 2px;
    flex-grow:1;

    .trash_icon{
      width:14px;
      height:14px;
      margin-right: 6px;
    }
  }
  
}

.buttons{
  min-width: 360px;
  flex-grow:1;
}


@media screen and (max-width:768px) {
  .titles{
    min-width: 312px; 
    font-size:14px;
  }

  .info{
    min-width: 312px; 
  }

  .total_installment,.prize{
    transform:scale(.9);
  }

  .buttons,.clear_cart{
    transform:scale(.8);
    flex-wrap: nowrap;
    font-size:12px;
  }
}

@media screen and (max-width:630px) {
  .titles{
    font-size:12px;
  }

  .clear_cart{
    display: none;
  }

  .purchase{
    justify-content: center;
  }

}

@media screen and (max-width:480px) {
  .titles{
    font-size:10px;
  }

  .total_installment,.prize{
    transform:scale(.8);
  }

}
</style>