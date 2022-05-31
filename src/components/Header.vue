<template>
  <div
    class="flex flex-col-reverse lg:flex-row xl:flex-row px-4 pt-16 mx-auto bg-gradient-to-br from-white to-purple-300 pt-24 lg:pt-32 xl:pt-32 xl:pb-16 h-full lg:h-screen xl:h-screen"
    id="hero">

    <!-- Carousel wrapper -->
    <Carousel class="h-full lg:w-1/2 xl:ml-20 lg:flex-auto xl:pt-2 mb-20 lg:mb-0" />

    <div class="mt-12 h-full lg:pl-24 xl:pl-28 lg:w-1/2 lg:flex-auto lg:mt-0 ">
      <div class="mb-0 pt-8 lg:max-w-lg">
        <div class="lg:max-w-xl lg:mb-8 items-center justify-center">
          <div>
            <img src="../assets/poligrafia-logo-main.svg" alt="poligrafia-łódź-small"
              class="h-32 inline-block px-3 py-px mb-1">
          </div>
          <h2
            class="font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {{ section.title }}<br class="hidden md:block" />
            <span class="inline-block text-deep-purple-accent-400">{{ section.titlePurple }}</span>
          </h2>
          <p class="mt-10 text-base text-gray-700 md:text-lg lg:mt-0">
            {{ section.content }}
          </p>
        </div>
        <div class="flex items-center mb-8 justify-center mt-10 lg:mt-0">
          <router-link
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 hover:shadow-md focus:shadow-outline focus:outline-none"
            to="#produkty">
            Sprawdź ofertę
          </router-link>
          <a v-show="isMobile" href="tel:+48504128606" aria-label=""
            class="inline-flex items-center font-semibold  h-12 px-6 mr-6  text-gray-800 rounded transition-colors duration-200 shadow-inner ring-green-500 ring-2 flex-colring-2 hover:text-gray-200 hover:shadow-md hover:bg-green-500">
            Zadzwoń </a>
          <router-link v-show="!isMobile" aria-label="" to="/#kontakt"
            class="inline-flex items-center font-semibold  h-12 px-6 mr-6  text-gray-800 rounded transition-colors duration-200 shadow-inner ring-green-500 ring-2 flex-colring-2 hover:text-gray-200 hover:shadow-md hover:bg-green-500">
            Napisz do nas </router-link>
        </div>
        <hr class="mb-8 border-purple-300 mt-12 lg:mt-0" />
        <div class="flex">
          <div class="flex flex-col">
            <div class="text-md font-semibold flex items-center px-16">
              Zaufali nam m. in. :
              <CarouselPartner class="h-auto" :section="section" />
            </div>
          </div>
        </div>
        <hr class="mt-8 border-purple-300" />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import CarouselPartner from './CarouselPartner.vue'

export default {
  name: 'Header',
  components: {
    Carousel,
    CarouselPartner,
  },
  props: {
    section: {
      type: Object,
      default: () => { },
    },
    products: {
      type: Object,
      default: () => { },
    }
  },
  data() {
    return {
      loading: false,
      isMobile: false,
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
  },
  created() {
    this.loading = true
    this.section == !null ? this.loading = false : this.loading = true
    if (window.innerWidth <= 760) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  },
}
</script>