<template lang="pug">
  .shop_cart.col-xs.between-xs
    header-section
    
    .column.row.center-xs
      .titles.col-xs-8.row.between-xs
        span Produto
        span Quantidade
        span Valor unitário
        span Total

    cart-item
    cart-item
    cart-item 
    cart-item
    cart-item
    cart-item   
    
    .total.row.center-xs
      .info.col-xs-8.end-xs
        .prize
          b Total à vista 
          b R$ 3.000,00
        .total_installment.row.end-xs
          b Total parcelado 
          .installment.start-xs
            p
              span em até 
              b 10X R$ 300,00
            span (Total R$ 3.000,00)
    .row.center-xs
      .purchase.col-xs-8.row.between-xs
        .clear_cart.row.middle-xs
          img.trash_icon(src="/icons/garbage.svg")
          span Limpar carrinho
        .buttons.row
          nuxt-link.btn.btn-secondary(to="/") Continuar comprando
          .btn.btn-primary Confirmar compra
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
  flex-grow:1;  
  padding-top: 40px;
  
}

.titles{
  padding: 10px 40px;
  height: 50px;
  font-weight: bold;
  border-bottom: solid 1px #8c8c8c;
  min-width: 532px; 
}

.total{

  .info{
    //background: #ccc;
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

    .trash_icon{
      width:14px;
      height:14px;
      margin-right: 6px;
    }
  }
  
}

.buttons{
  min-width: 360px;
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

  .purchase{
    //min-width: 530px;
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