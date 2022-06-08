<template>
  <Navbar />
  <LargeBooks />
  <Products />
  <Footer />
</template>
<script>
import LargeBooks from '../components/LargeBooks.vue'
import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Usługi',
  components: {
    LargeBooks,
    Products,
    Footer,
    Navbar
  },
}

</script>
<style lang="">

</style>