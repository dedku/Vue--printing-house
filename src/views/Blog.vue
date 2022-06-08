<template>
  <Navbar />

  <div class="px-4 py-16 mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 lg:w-20 lg:h-20">
      <svg class="w-10 h-10 text-deep-purple-accent-400 lg:w-16 lg:h-16" stroke="currentColor" viewBox="0 0 52 52">
        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
      </svg>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h1 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {{ blog.title }}
        </h1>
        <a href="/" aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">{{
              blog.author
          }}</a>
      </div>
      <div class="lg:w-1/2">
        <p class="text-base text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque
          ipsa quae. Sed ut perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium
          doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Blogs',
  components: {
    Navbar,
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
