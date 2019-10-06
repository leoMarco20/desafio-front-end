<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html,body,#__nuxt,#__layout,#__layout > div{
  height:100%;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.btn{
  cursor:pointer;
  padding: 10px;
  max-width: 200px;
  border-radius: 4px;
  margin: 0 10px;
  outline: none;
  text-decoration: none;
  height:40px;

  
}

.btn-primary{
  color:#fff;
  background: #9F4EC8;
  
}

.btn-secondary{
  color:#5D5758;
  background: #bbb;
  
}

.disabled{
  background: #ccc;
  cursor:default;
  pointer-events:none;
}

</style>
