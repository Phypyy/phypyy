<template>
  <navBar />
  <div class="container">
    <RouterView />
  </div>

</template>

<script>
import {RouterView} from "vue-router"
import navBar from "../src/components/Navbar.vue"

export default {
  components: {
    navBar,
  },
};
</script>

<style>
.container {
    margin-top: 56px;
    
  }
</style>

