<template lang="pug">
  .checkout.col-xs-12.between-xs.center-xs
    header-section
    .col-xs.center-xs.row
      .column.col-xs-8.between-xs
        .info
          .field.row.start-xs(:class="{'err_field': errUser.name && dirty.name}")
            span Nome* 
            input(v-model="name")
          .field.row.start-xs(:class="{'err_field': errUser.email && dirty.email}")
            span Email*
            input(v-model="email")
          .field.row.start-xs(:class="{'err_field': errUser.cpf && dirty.cpf}")
            span CPF*
            input(v-model="cpf")
          .flex
            .field.row.start-xs
              span Data nascimento
              input(v-model="birthDate")
            .field.row.start-xs(:class="{'err_field': errUser.phone && dirty.phone}")
              span Telefone*
              input(v-model="phone")  
        .cep
          .field.row.start-xs(:class="{'err_field': errUser.zipCode && dirty.zipCode}")
            span CEP*
            input(v-model="zipCode")
          .flex
            .field.row.start-xs
              span Endereço
              input(v-model="address")
            .small_field.row.start-xs
              span Número
              input(v-model="number")
          .flex
            .field.row.start-xs
              span Complemento
              input(v-model="complement")
            .field.row.start-xs
              span Bairro
              input(v-model="neightborhood")
          .flex
            .field.row.start-xs
              span Cidade
              input(v-model="city")
            .small_field.row.start-xs 
              span Estado
              input(v-model="state")
          .confirm.row.end-xs.middle-xs   
            .btn.btn-primary(:class="{'disabled': validate(errUser)}", @click="showMessagePopup()") Cadastrar
    .messagePopup(v-if="messagePopup")
      .content()
        img.iconCheck(src="/icons/check.svg")
        span Seu cadastro foi solicitado com sucesso
        img.iconTimes(src="/icons/times.svg",@click="hideMessagePopup()")
        .link
          img(src="/icons/left-arrow.svg")
          nuxt-link(to="/") Voltar para home
      .shadow(@click.stop="hideMessagePopup()")  
    footer-section

    
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue'
import FooterSection from '~/components/FooterSection.vue'

export default {
  components: {
    'header-section' : HeaderSection,
    'footer-section' : FooterSection
  },

  data(){
    return{
      dirty:{
        name:false,
        email:false,
        phone:false,
        zipCode:false,
        cpf:false
      },
      messagePopup: false
    }
  },

  computed:{
    name:{
      get(){
        return this.$store.state.user.name
      },

      set(value){
        this.$store.commit("setName",value);
        this.dirty.name = true;
      }
    },

    email:{
      get(){
        return this.$store.state.user.email
      },

      set(value){
        this.$store.commit("setEmail",value);
        this.dirty.email = true;
      }
    },

    cpf:{
      get(){
        return this.$store.state.user.cpf
      },

      set(value){
        this.$store.commit("setCpf",value);
        this.dirty.cpf = true;
      }
    },

    phone:{
      get(){
        return this.$store.state.user.phone
      },

      set(value){
        this.$store.commit("setPhone",value);
        this.dirty.phone = true;
      }
    },
    
    birthDate:{
      get(){
        return this.$store.state.user.birthDate
      },

      set(value){
        this.$store.commit("setbirthDate",value);
      }
    },

    zipCode:{
      get(){
        return this.$store.state.user.zipCode
      },

      set(value){
        this.$store.commit("setZipCode",value);
        this.dirty.zipCode = true;
      }
    },

    city:{
      get(){
        return this.$store.state.user.city
      },

      set(value){
        this.$store.commit("setCity",value);
      }
    },

    number:{
      get(){
        return this.$store.state.user.number
      },

      set(value){
        this.$store.commit("setNumber",value);
      }
    },

    neightborhood:{
      get(){
        return this.$store.state.user.neightborhood
      },

      set(value){
        this.$store.commit("setNeightborhood",value);
      }
    },

    state:{
      get(){
        return this.$store.state.user.state
      },

      set(value){
        this.$store.commit("setState",value);
      }
    },

    complement:{
      get(){
        return this.$store.state.user.complement
      },

      set(value){
        this.$store.commit("setComplement",value);
      }
    },

    address:{
      get(){
        return this.$store.state.user.address
      },

      set(value){
        this.$store.commit("setAddress",value);
      }
    },

    errUser:{
      get(){
        return this.$store.state.user.errUser
      }
    },
  },

  mounted(){
    this.$store.dispatch('loadCart');
  },

  methods:{
    validate:function(errUser){
      return Object.keys(errUser).some((k)=>{
        return errUser[k]
       
      })
    },

    showMessagePopup:function(){
      this.messagePopup = true;
      this.$store.commit("cleanUser");
      this.dirty = {
        name:false,
        email:false,
        phone:false,
        zipCode:false,
        cpf:false
      }
    },

    hideMessagePopup:function(){
      this.messagePopup = false;
    }
  }
}
</script>

<style lang="less" scoped>
.checkout{
  height:100%;
  display: flex;
  flex-direction: column;
  color:#5D5758;
}

.column{
  display:flex;
  flex-grow:1;  
  padding-top: 40px;

  .info,.cep{
    flex-grow:1;
    margin:0 10px;

    .flex{
      display:flex;
      margin:20px 0;
      justify-content: space-between;
      div{
        margin:0 4px 0 0;
      }
    }
  }

  .field,.small_field{
    flex-direction: column;
    margin:20px 0;
    flex-grow: 1;

    span{
      font-size:14px;
    }

    input{
      width:100%;
      outline: none;
      border: solid 1px #ccc;
      border-radius: 2px;
      padding: 8px 10px;
    }

    &.err_field{
      span{
        color:red;
      }
      input{
        border-color: red;
      }
    }
  }
  .small_field{
    width: 20%;
    flex-grow:0;
  }
}

.confirm{
  height:80px;
  width:100%;
  margin:0;

  .btn{
    width:100%;
    text-align: center;
    margin:0;
  }
}

.shadow{
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.5);
}

.messagePopup,.shadow{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .content{
    background: #fff;
    padding: 80px;
    position:relative;
    height:200px;
    width:450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index:5;

    .iconCheck{
      width:80px;
      margin:10px;
    }

    .iconTimes{
      width:20px;
      height:20px;
      position:absolute;
      top:6px;
      right:6px;
      cursor:pointer;
      
    }

    .link{
      margin-top: 20px;
      display: flex;

      a{
        text-decoration: none;
        color:#9F4EC8;
        display: flex;
        align-items: center;
      }

      img{
        width:20px;
        height:20px;
        margin-right:10px;
      }
    }
  }
}

@media only screen and (max-width:960px){
 .column{
  flex-wrap:wrap;
 } 

 .flex{
   flex-wrap: wrap;
 }
 
}  

</style>