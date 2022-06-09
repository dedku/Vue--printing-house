<template>
  <Navbar />

  <div class="px-4 py-16 mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <h1 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
      {{ blog.title }}
    </h1>
    <div class="flex flex-row justify-center items-center mt-12">
      <img alt="avatar" :src="getImgUrl(blog.image)" class="object-cover w-10 h-10 rounded-full shadow-sm" />
      <a href="/" aria-label=""
        class="inline-flex items-center font-semibold ml-6 transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">{{
            blog.author
        }}</a>
    </div>
    <div class="mx-24 mt-12 text-justify tracking-wide " v-html="blog.content" />
  </div>
  <Products />
  <Footer />
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Blogs',
  components: {
    Navbar,
    Products,
    Footer
  },
  data() {
    return {
      routeParam: this.$route.params.slug,
      lading: false,
      blog: []
    }
  },
  computed: {
    ...mapGetters('dataItems', {
      getBlogBySlug: 'getBlogBySlug',
    }),
  },
  methods: {
    ...mapActions({
      fetchData: 'dataItems/fetchData',
    }),
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
    dotAfterText(text, size) {
      return text.length > size ? text.slice(0, size - 1) + "..." : text
    }
  },
  created() {
    this.loading = true
    this.fetchData().then(() =>
      this.blog = this.getBlogBySlug(this.routeParam),
      this.loading = false
    )
  },
}
</script>
