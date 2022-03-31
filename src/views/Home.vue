<template>
    <Navbar />
    <Header />
    <Stats />
    <Steps />
    <Products />
    <About />
    <Books />
    <Assets />
    <Blog />
    <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Header from '@/components/Header.vue'
import Stats from '../components/Stats.vue'
import About from '../components/About.vue'
import Books from '../components/Books.vue'
import Assets from '../components/Assets.vue'
import Footer from '../components/Footer.vue'
import Steps from '../components/Steps.vue'
import Products from '../components/Products.vue'
import Blog from '../components/Blog.vue'

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
    Steps
}
}
</script>
