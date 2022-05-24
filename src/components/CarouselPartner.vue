<template>
  <Carousel class="overflow-auto justify-center items-center" :autoplay="4500" :wrap-around="true" :items-to-show="2"
    snapAlign="start">
    <Slide v-for="image in section.zaufaliNamImg" :key="image.id">
      <img class="carousel__item" :src="getImgUrl(image.url)" :alt="image.alt">
    </Slide>

    <template #addons>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, } from 'vue3-carousel';
import { mapGetters } from 'vuex'
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,

  },
  props: {
    section: {
      type: Object,
      default: () => { },
    }
  },
  data() {
    return {
      loading: false,
      hover: false,
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
  },
  computed: {
    ...mapGetters('dataItems', {
      headerProducts: 'headerProducts'
    })
  }
})
</script>
