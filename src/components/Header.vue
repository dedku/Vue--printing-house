<template>
  <div class="relative flex flex-col-reverse px-4 pt-16 mx-auto bg-gradient-to-br from-white to-purple-300 pt-24 lg:block lg:flex-col lg:pt-32 xl:py-32 md:max-w-full lg:max-w-full">

    <!-- Carousel wrapper -->
    <Carousel class="z-0 mx-4 lg:w-2/4 lg:absolute lg:justify-start max-w-screen h-full mx-auto lg:max-w-screen-xl" />

    <div class="relative flex justify-end max-w-screen h-full mx-auto lg:max-w-screen-xl">
      <div class="mb-0 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-8">
          <div>
            <img src="../assets/poligrafia-logo-small.svg" alt="poligrafia-łódź-small" class="h-24 inline-block px-3 py-px mb-4">
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {{ section.title }}<br class="hidden md:block" />
            <span class="inline-block text-deep-purple-accent-400">{{ section.titlePurple }}</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            {{ section.content }}
          </p>
        </div>
        <div class="flex items-center mb-8 justify-center">
          <router-link
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 hover:shadow-md focus:shadow-outline focus:outline-none"
            to="#produkty"
          >
            Sprawdź ofertę
          </router-link>
          <a href="tel:+48504128606" aria-label="" class="inline-flex items-center font-semibold  h-12 px-6 mr-6  text-gray-800 rounded transition-colors duration-200 shadow-inner ring-green-500 ring-2 flex-colring-2 hover:text-gray-200 hover:shadow-md hover:bg-green-500"> Zadzwoń </a>
        </div>
        <hr class="mb-8 border-purple-300" />
         <div class="flex">
          <div class="flex flex-col">
            <div class="text-md font-semibold flex items-center px-16">
              Zaufali nam :
               <img v-for="image in section.zaufaliNamImg" class="h-10" :key="image.id" :src="getImgUrl(image.url)" :alt="image.alt">
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

export default {
  name: 'Header',
  components: {
    Carousel,
  },
  props: {
    section: {
      type: Object,
      default: () => {},
    },
    products: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
  },
  created () {
    this.loading = true
    this.section == !null? this.loading = false : this.loading = true
  },
}
</script>