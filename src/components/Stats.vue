<template>
  <Waypoint @change="autoinitStart">
    <div class="overflow-hidden rounded-b-lg bg-violet-900">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center" v-for="stat in stats" :key="stat.id">
            <vue3-autocounter class="text-4xl font-bold text-white lg:text-5xl xl:text-6xl" ref="stats" :startAmount='0'
              :endAmount='stat.endAmount' :duration='stat.duration' :suffix='stat.suffix' :autoinit='false' />
            <p class="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
              {{ stat.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Waypoint>
</template>

<script>
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';
import { Waypoint } from 'vue-waypoint'

export default defineComponent({
  name: 'Demo',
  components: {
    'vue3-autocounter': Vue3autocounter,
    Waypoint
  },
  props: {
    stats: {
      type: Object,
      default: () => { },
    },
  },
  methods: {
    autoinitStart() {
      this.$refs.stats[0].start();
      this.$refs.stats[1].start();
      this.$refs.stats[2].start();
      this.$refs.stats[3].start();
    }
  },
});
</script>