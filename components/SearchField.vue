<template lang="pug">
.search_field.middle-xs
  span Encontre seu produto
  .input
    input(placeholder="Pesquisar...")
    .icon
      img(src="/icons/magnifying-glass.svg") 
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.search_field{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 2px 2px 12px 0px #ccc;
  span{
    font-weight: bold;
    color:#8c8c8c;
    margin-right: 60px;
  }
}

.input{
  flex-grow: 1;
  margin: 0 8px;
  position:relative;
  border-radius:10px;
  height:30px;

  input{
    width: 100%;
    height:30px;
    padding: 2px;
    padding-right: 30px;
    padding-left: 4px;
    border-radius: 4px;
    border: solid 1px #ddd;

    &::placeholder { 
      font-size:12px;
      opacity: 1;
    }
  }


  .icon{
    background:#9F4EC8;
    position:absolute;
    top:0;
    right:0;
    width:40px;
    height:100%;
    background-size: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;

    img{
      width:20px;
      height:20px;
    }
  }
}

@media only screen and (max-width: 768px){
  span{
    display:none;
  }
}
</style>