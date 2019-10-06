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
        .dummy
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
      active: 0
    }
  },

  computed:{
    products:{
      get(){
        return this.$store.state.products
      }
    }
  },

  mounted(){
    this.$store.dispatch('loadCart');
    this.$store.dispatch('listProducts').then(()=>{ 
    })
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
  flex-shrink: 0;
  min-height: 100%;
  .search{
    margin-bottom: 60px;
    min-width: 280px;
    height: 80px;
  }
}

.dummy{
  width: 250px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

}

@media only screen and (max-width: 768px){
  .slide{
    display:none;
  }
}



</style>
