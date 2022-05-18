<template>
  <img
    v-if="loading"
    src="https://i.imgur.com/JfPpwOA.gif"
  >
  <div v-else>
    <Header :section="sections[0]" :products="products"/>
    <Stats :stats="stats"/>
    <Customers :customers="customers[0]"/>
    <Products :products="products"/>
    <About />
    <Books />
    <Assets />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { defineAsyncComponent }from 'vue'

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
const Products = defineAsyncComponent(() =>
import('../components/Products.vue'))
const Blog = defineAsyncComponent(() =>
import('../components/Blog.vue'))

export default {
  name: 'Home',
  components: {
    Header,
    Stats,
    About,
    Books,
    Assets,
    Footer,
    Products,
    Blog,
    Customers
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapState({
      sections: state => state.dataItems.sections,
      products: state => state.dataItems.products,
      blogs: state => state.dataItems.blogs,
      stats: state => state.dataItems.stats,
      customers: state => state.dataItems.customers,
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'dataItems/fetchData',
    })
  },
  created () {
    this.loading = true
    this.fetchData().then(() => this.loading = false)
  },
}
</script>

<style>

</style>