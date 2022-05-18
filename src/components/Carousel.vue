<template>
    <Carousel class="overflow-hidden justify-center items-center relative h-96 rounded-lg sm:h-80 xl:h-96 2xl:h-128" :autoplay="hover==false?3000:0" :wrap-around="hover==false?true:false" @mouseover="mouseOver" @mouseleave="mouseOver">
        <Slide v-for="product in headerProducts" :key="product.id">
            <img class="carousel__item h-96" :src="getImgUrl(product.url)">
        </Slide>

    <template #addons>
        <Pagination />
    </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { mapGetters} from 'vuex'
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
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
    mouseOver: function() {
      this.hover = !this.hover;
      console.log("flag " + this.hover);
    }
  },
  computed:{
    ...mapGetters('dataItems',{
      headerProducts: 'headerProducts'
    })
  }
})
</script>