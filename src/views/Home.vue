<template>
  <Navbar />
  <Header :header="header[0]" />
  <Stats :stats="stats" />
  <Customers :customers="customers[0]" />
  <Products />
  <About :whywe="whywe[0]" />
  <Books :books="books" />
  <Assets :authPart="authPartner[0]" />
  <Blog :blogs="blogs" />
  <Contact />
  <Footer />
</template>

<script>
import { mapState } from 'vuex';
import { defineAsyncComponent } from 'vue'

import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue'
const Stats = defineAsyncComponent(() =>
  import('../components/Stats.vue')
)
const About = defineAsyncComponent(() =>
  import('../components/About.vue'))
const Books = defineAsyncComponent(() =>
  import('../components/Books.vue'))
const Assets = defineAsyncComponent(() =>
  import('../components/Assets.vue'))
const Footer = defineAsyncComponent(() =>
  import('../components/Footer.vue'))
const Customers = defineAsyncComponent(() =>
  import('../components/Customers.vue'))
const Blog = defineAsyncComponent(() =>
  import('../components/Blog.vue'))
const Contact = defineAsyncComponent(() =>
  import('../components/Contact.vue'))
import Products from '../components/Products.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Stats,
    About,
    Books,
    Assets,
    Footer,
    Products,
    Blog,
    Customers,
    Contact,
  },
  computed: {
    ...mapState({
      header: state => state.dataItems.header,
      blogs: state => state.dataItems.blogs,
      stats: state => state.dataItems.stats,
      customers: state => state.dataItems.customers,
      whywe: state => state.dataItems.whywe,
      authPartner: state => state.dataItems.authPartner,
      books: state => state.dataItems.books,
    })
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>