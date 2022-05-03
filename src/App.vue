<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "@/styles/app.scss";
export default {};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
  background-color: #F9F9F9;
}
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;

}

</style>
