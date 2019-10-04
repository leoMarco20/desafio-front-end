<template lang="pug">
    .header.row.center-xs
      .col-xs-8.row.between-xs
        nuxt-link.logo(to="/") Mkt
          span Place
        .pages.middle-xs.end-xs
          .product_link Produtos
          nuxt-link(to="/shopCart")
            img.car(src="/icons/shopping-cart.svg")
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.header{
  padding:20px;
  color: #8C8C8C;
  font-size:18px;
  font-weight: bold;
  box-shadow: 0px 0px 20px #ccc;
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
  .car,.product_link{
    margin:0 4px;
    font-size:12px;
  }
}

</style>