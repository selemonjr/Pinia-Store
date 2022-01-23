<template>
  <div id="nav">
    <Navigation/>
      <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";
export default defineComponent({
  name:"App",
  components: {
    Navigation
  },
})
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  height:100vh;
  width:100%;
  font-family:sans-serif;
  position:relative;
}
</style>
