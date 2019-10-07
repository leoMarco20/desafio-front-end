<template lang="pug">
    .header.row.center-xs
      .col-xs-8.row.between-xs
        nuxt-link.logo(to="/") Mkt
          span Place
        .pages.middle-xs.end-xs
          .product_link Produtos
          nuxt-link.car(to="/shopCart")
            img.icon(src="/icons/shopping-cart.svg")  
            .number(v-if="count")
              span {{count}}
</template>

<script>
export default {
  props:['count'],

  mounted(){
    this.$store.dispatch('countItemCart');
  }
}
</script>

<style lang="less" scoped>
.header{
  min-width: 380px;
  padding:20px;
  color: #8C8C8C;
  font-size:18px;
  font-weight: bold;
  box-shadow: 0px 0px 20px #ccc;
  flex-shrink: 0;
}

.logo{
  font-weight:bold;
  text-decoration: none;
  color: #8C8C8C;
  span{
    color: #9F4EC8;
  }
  &:active{
    color:#8C8C8C;
  }
}

.pages{
  display:flex;
  .icon,.product_link{
    margin:0 4px;
    font-size:12px;
  }

  .car{
    display: flex;
    position: relative;

    .number{
      border-radius: 50%;
      color: #fff;
      position: absolute;
      bottom: -2px;
      right: -6px;
      font-size: 10px;
      background: red;
      width: 10px;
      display: flex;
      height: 12px;
      justify-content: center;
      font-weight: bold;
      align-items: center;
      padding: 4px;
    }
  }
}

</style>