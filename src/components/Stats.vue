<template>
  <div class="overflow-hidden rounded-b-lg bg-violet-900">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <vue3-autocounter class="text-4xl font-bold text-white lg:text-5xl xl:text-6xl" ref="counter" :startAmount='0' :endAmount='144' :duration='1.5' suffix='K' :autoinit='false' @mouseover="autoinitStart"/>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            test
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">24.5K</h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Druk
          </p>
        </div>
        <div class="text-center md:border-r" >
          <h6 class="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">24.5K</h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Druk
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">24.5K</h6>
          <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Druk
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
  name: 'Demo',
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  props: {
    stats: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    autoinitStart(){
      this.$refs.counter.start();
    }
  },
});
</script>