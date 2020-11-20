<template>
  <div id="app">	
      <div class="right_container" @click="mouseClick()" >
      <img id="img" style="cursor: pointer" src="../logo.png">
      </div>
	  <router-view/>
  </div>
</template>
<script>
	export default {
    methods:{
      mouseClick(){
        this.$router.push({ path: '/' });
      }
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#img{
  position:relative;
  width:25%;
  height:150px;
  margin-bottom:10px;
}
</style>
