<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="mx-auto sm:text-center lg:max-w-2xl">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          class="font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-2">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)" width="52" height="24"></rect>
            </svg>
            <span class="relative">{{ authPart.title }}</span>
          </span>
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          {{ authPart.subTitle }}
        </p>
      </div>
      <div class="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
        <img class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96" :src="getImgUrl(authPart.image)"
          :alt="authPart.image" />
      </div>
      <p class="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
        {{ authPart.paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Assets',
  props: {
    authPart: {
      type: Object,
      default: () => { },
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
  }
}
</script>