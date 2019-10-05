<template lang="pug">
  .checkout.col-xs-12.between-xs.center-xs
    header-section
    .col-xs.center-xs.row
      .column.col-xs-8.between-xs
        .info
          .field.row.start-xs
            span Nome*
            input()
          .field.row.start-xs
            span Email*
            input()
          .field.row.start-xs
            span CPF*
            input()
          .flex
            .field.row.start-xs
              span Data nascimento
              input()
            .field.row.start-xs
              span Telefone*
              input()  
        .cep
          .field.row.start-xs
            span CEP*
            input()
          .flex
            .field.row.start-xs
              span Endereço
              input()
            .small_field.row.start-xs
              span Número
              input()
          .flex
            .field.row.start-xs
              span Complemento
              input()
            .field.row.start-xs
              span Bairro
              input()
          .flex
            .field.row.start-xs
              span Cidade
              input()
            .small_field.row.start-xs
              span Estado
              input() 
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
      flex-wrap:wrap;
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
}  

</style>