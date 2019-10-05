<template lang="pug">
  .home.col-xs
    header-section
    .slide.row
      .banner.center-xs  
        img(:src='banners[active]')
      .menu_slide.col-xs.center-xs
        .radio
          input(type='radio', name='slide', value="0", active v-model="active", ref="b1")
          .toggle(:class="{'active': active == 0}")
      
        .radio  
          input(type='radio', name='slide', value="1", v-model="active", ref="b2") 
          .toggle(:class="{'active': active == 1}")
      
        .radio
          input(type='radio', name='slide', value="2", v-model="active", ref="b3")      
          .toggle(:class="{'active': active == 2}")
    .product_list.row.center-xs
      .search.col-xs-8.row
        search-field
      .col-xs-8.row.between-xs
        product-card(v-for="p in products", :name="p.name", :picture="p.picture", :price="p.price")
        
    footer-section    
    

</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
import SearchField from '~/components/SearchField.vue'
import HeaderSection from '~/components/HeaderSection.vue'
import FooterSection from '~/components/FooterSection.vue'

export default {
  components: {
    'product-card' : ProductCard,
    'search-field' : SearchField,
    'header-section' : HeaderSection,
    'footer-section' : FooterSection
  },

  data(){
    return{
      banners:['/img/banner1.png','https://images.samsung.com/is/image/samsung/br-notebook-expert-x20-np350xaa-kfwbr-np350xaa-kfwbr-frontovergray-108088753?$PD_GALLERY_L_JPG$','https://www.havan.com.br/media/catalog/product/cache/55f334c6f9412d6b39cfe195ce4e3943/n/o/notebook-positivo-motion-14-quadcore-4gb-1tb-windows10_260494.jpg'],
      active: 0,
      products: [{"name":"Notebook Essentials E30 Intel Core I3 4GB 1TB LED Full HD 15.6'' W10 Cinza Titânio - Samsung","price":"1.799,90","picture":"https://i.ibb.co/B4xmk45/1.jpg"},{"name":"Notebook Lenovo Ideapad S145 8ª Intel Core I5 8GB 1TB HD 15,6 W10 Prata","price":"2.222,57","picture":"https://i.ibb.co/gr7cdV1/2.jpg"},{"name":"Notebook Dell Inspiron I15-3567-A50P Intel Core i7 8GB 2TB Tela LED 15,6 Windows 10 - Preto","price":"3.067,44","picture":"https://i.ibb.co/b6tHt4y/3.jpg"},{"name":"Notebook Samsung Essentials E20 Intel Celeron 4GB 500GB Tela LED HD 15,6'' Windows 10 - Branco","price":"1.408,26","picture":"https://i.ibb.co/3zcstSd/4.jpg"},{"name":"Notebook Positivo Motion Q232AP Intel Atom 2GB 32GB SSD Tela LCD 14” Windows 10 - Cinza","price":"899,90","picture":"https://i.ibb.co/3z5LXDR/5.jpg"},{"name":"Notebook Legacy PC107 Intel Atom 2GB 64GB (32GB +32GB SD) W10 14 Preto - Multilaser + Office Home \u0026 Student - Versão Perpétua","price":"809,99","picture":"https://i.ibb.co/0tzQTCH/6.jpg"},{"name":"Notebook Samsung Expert X40 8ª Intel Core I5 8GB (Geforce MX110 com 2GB) 1TB HD LED 15,6 Branco","price":"2.410,84","picture":"https://i.ibb.co/cFSJ52Z/7.jpg"},{"name":"Notebook Lenovo Ideapad 330 Dual Core Intel Celeron 4GB 500GB Tela 15,6 Windows - 10 Preto","price":"1.497,69","picture":"https://i.ibb.co/5Gbc0zP/8.jpg"},{"name":"Notebook Positivo Motion Q464A Intel Atom 4GB 64GB SSD + 64GB Nuvem Tela 14” Windows 10 - Vermelho","price":"944,99","picture":"https://i.ibb.co/4Wz9L5X/9.jpg"}]
    }
  },
  methods:{
    change:function(pos){
      this.active = pos;
    },
    
  }
}
</script>

<style lang='less'>
.home{
  height:100%;
}

.slide{
  display: flex;
  flex-direction: column;

  .banner{
    height: 300px;

    img{
      max-height: 100%;
      width:100%;
    }
  }
  .menu_slide{
    display: flex;
    margin-top:40px;
      
      .radio{
        width: 13px;
        height: 13px;
        position:relative;
        margin: 0 4px;

        input{
          cursor: pointer;
          opacity:0;
          z-index: 2;
        }
      }

      .toggle{
        border:solid 1px #9F4EC8;
        border-radius:50%;
        position:absolute;
        top:0;
        width: 13px;
        height: 13px;
        z-index: -1;

        &.active{
          background: #9F4EC8;
        }
      }
    
  }
  
}

.product_list{
  padding:40px 0px;

  .search{
    margin-bottom: 60px;
    min-width: 280px;
  }
}

@media only screen and (max-width: 768px){
  .slide{
    display:none;
  }
}



</style>
