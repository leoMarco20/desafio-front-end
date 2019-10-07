<template lang="pug">
  .home.col-xs
    header-section
    .slide.row
      .banner.center-xs 
        img.animated.slideInRight(:src='banners[active]',ref="banner")
      .menu_slide.col-xs.center-xs
        .radio(@click="()=>{clearIntervalBanner(); active=0;}")
          input(type='radio', name='slide', value="0",active)
          .toggle(:class="{'active': active == 0}")
      
        .radio(@click="()=>{clearIntervalBanner(); active=1}") 
          input( type='radio', name='slide', value="1") 
          .toggle(:class="{'active': active == 1}")
      
        .radio(@click="()=>{clearIntervalBanner(); active=2}")
          input(type='radio', name='slide', value="2")      
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
      banners:['/img/banner1.svg','/img/banner2.svg','/img/banner3.svg'],
      active: 0,
      clickChange:false,
      interval:''
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

    this.autoChangeBanner();

  },

  methods:{
    changeBanner:function(){
      this.$refs.banner.style = "display: none;"
      if(this.active == this.banners.length-1){
        setTimeout(() => {
          this.$refs.banner.style = "display: flex;"
        }, 500);
        return this.active = 0;
        
      }
      setTimeout(() => {
        this.$refs.banner.style = "display: flex;"
      }, 500);
      this.active = this.active + 1;
    },

    autoChangeBanner:function(clickChange){
      this.interval = setInterval(() => { 
        this.changeBanner();

        
      }, 8000);
    },

    clearIntervalBanner:function(){
      clearInterval(this.interval);
      setTimeout(() => {
        this.autoChangeBanner();
      }, 3000);
    }
    
  }
}
</script>

<style lang='less'>
.home{
  height:100%;
}

.slide{
  display: flex;
  flex-direction: column !important;

  .banner{
    height: 300px;
    overflow: hidden;

    img{
      max-height: 100%;
      width:100%;
      
      &.bounceOutLeft {
        -webkit-animation-name: bounceOutLeft;
        animation-name: bounceOutLeft;
      }
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

.info{
  color:#5D5758;
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
