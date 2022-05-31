<template>
  <Carousel class=" justify-center items-center h-96 rounded-lg xl:h-96 2xl:h-128"
    :autoplay="hover == false ? 4500 : 30000" :wrap-around="true" @click="stopAuto">
    <Slide v-for="product in headerProducts" :key="product.id">
      <img class="carousel__item h-96" :src="getImgUrl(product.url)">
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination class="xl:pt-10" />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import { mapGetters } from 'vuex'
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
    stopAuto: function () {
      this.hover = true;
    }
  },
  computed: {
    ...mapGetters('dataItems', {
      headerProducts: 'headerProducts'
    })
  }
})
</script>

<style>
.carousel__next {
  right: 20px;
}

.carousel__prev {
  left: 20px;
}
</style>