<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {Navbar}

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app a {
  text-decoration: none;
}


</style>
