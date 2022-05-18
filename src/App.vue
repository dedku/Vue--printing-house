<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
 components: {
    Navbar,
 }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

</style>
