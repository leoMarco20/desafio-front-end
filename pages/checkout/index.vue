<template lang="pug">
  .checkout.col-xs-12.between-xs.center-xs
    header-section
    .col-xs.center-xs.row
      .column.col-xs-8.between-xs
        .info
          .field.row.start-xs(:class="{'err_field': errUser.name}")
            span Nome* 
            input(v-model="name")
          .field.row.start-xs(:class="{'err_field': errUser.email}")
            span Email*
            input(v-model="email")
          .field.row.start-xs(:class="{'err_field': errUser.cpf}")
            span CPF*
            input(v-model="cpf")
          .flex
            .field.row.start-xs(:class="{'err_field': errUser.birthDate}")
              span Data nascimento
              input(v-model="birthDate")
            .field.row.start-xs(:class="{'err_field': errUser.phone}")
              span Telefone*
              input(v-model="phone")  
        .cep
          .field.row.start-xs(:class="{'err_field': errUser.zipCode}")
            span CEP*
            input(v-model="zipCode")
          .flex
            .field.row.start-xs(:class="{'err_field': errUser.address}")
              span Endereço
              input(v-model="address")
            .small_field.row.start-xs(:class="{'err_field': errUser.number}")
              span Número
              input(v-model="number")
          .flex
            .field.row.start-xs(:class="{'err_field': errUser.complement}")
              span Complemento
              input(v-model="complement")
            .field.row.start-xs(:class="{'err_field': errUser.neightborhood}")
              span Bairro
              input(v-model="neightborhood")
          .flex
            .field.row.start-xs(:class="{'err_field': errUser.city}")
              span Cidade
              input(v-model="city")
            .small_field.row.start-xs(:class="{'err_field': errUser.state}")
              span Estado
              input(v-model="state")
          .confirm.row.end-xs.middle-xs   
            .btn.btn-primary Cadastrar
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

  computed:{
    name:{
      get(){
        return this.$store.state.user.name
      },

      set(value){
        this.$store.commit("setName",value);
      }
    },

    email:{
      get(){
        return this.$store.state.user.email
      },

      set(value){
        this.$store.commit("setEmail",value);
      }
    },

    cpf:{
      get(){
        return this.$store.state.user.cpf
      },

      set(value){
        this.$store.commit("setCpf",value);
      }
    },

    phone:{
      get(){
        return this.$store.state.user.phone
      },

      set(value){
        this.$store.commit("setPhone",value);
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

@media only screen and (max-width:960px){
 .column{
  flex-wrap:wrap;
 } 

 .flex{
   flex-wrap: wrap;
 }
 
}  

</style>