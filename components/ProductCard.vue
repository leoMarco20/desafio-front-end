<template lang="pug">
.product_card
  .content
    img.img_product(src="https://i.zst.com.br/images/notebook-samsung-essentials-intel-core-i3-7020u-7-geracao-4gb-de-ram-hd-1-tb-15-6-full-hd-windows-10-e30-photo518274337-12-2d-f.jpg")
    .info.col-xs.start-xs
      .category
       | Eletrônicos
      .name
        | Notebook Xpto 
      .description
        | Descrição do produto
      .prize  R$ 1.5000,00
  .add_in_car  Adicionar no carrinho  
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.product_card{
  width:250px;
  box-shadow: 0px 0px 4px #ccc;
  margin-bottom: 30px;
}

.content{
  flex-grow:1;

  .img_product{
    width:100%;
    height:50%;
  }

  .info{
    width:100%;
    height:50%;
    background:#fff;
    padding:20px;
    .name,.prize{
      margin-top: 4px;
      font-weight: bold;
    }

    .description{
      font-size: 12px;
      color:#ccc;
      margin-top: 4px;
    }
    .category{
      color:#9F4EC8;
      font-size: 12px;
      font-weight: bold;
    }

    .prize{
      font-size: 18px;
    }
  }
}

.add_in_car{
  color:#9F4EC8;
  background:#fff;
  cursor: pointer;
  padding:10px;
  margin-top: 4px;
  //box-shadow: 0px -2px 4px #ccc;
  border-top: solid 2px #eee;

  &:hover{
    background:#9F4EC8;
    color:#fff;

  }
}


</style>