<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="znami">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
      </div>
      <h2
        class="font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-2">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="84d09fa9-a544-44bd-88b2-08fdf4cddd38" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)" width="52" height="24"></rect>
          </svg>
          <span class="relative">{{ whywe.title }}</span>
        </span>
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        {{ whywe.subTitle }}
      </p>
    </div>
    <div class="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
      <div class="p-8 border-b sm:border-r" v-for="item in whywe.quickInfo" :key="item.id">
        <div class="max-w-md text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
            <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">{{ item.title }}</h6>
          <p class="mb-3 text-sm text-gray-900">
            {{ item.paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    whywe: {
      type: Object,
      default: () => { },
    }
  },
}
</script>