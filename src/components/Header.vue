<template>
  <div class="relative flex flex-col-reverse px-4 pt-16 mx-auto bg-gradient-to-br from-white to-purple-300 pt-24 lg:block lg:flex-col lg:py-32 xl:py-48 md:max-w-full lg:max-w-full">
    <div class="z-0 justify-start mx-4 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-2/4 lg:absolute lg:justify-start lg:bottom-0 lg:left-0 lg:items-center" >
    <div id="default-carousel" data-carousel="slide" class="relative">

    <!-- Carousel wrapper -->
      <div class="overflow-hidden justify-center items-center mb-20 relative h-96 rounded-lg sm:h-80 xl:h-96 2xl:h-128"
      v-on:mouseover="mouseover"
    v-on:mouseleave="mouseleave">

            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="../assets/katalog-bg.jpg" class="block absolute top-1/1 left-1/1 w-full h-full -translate-x-1/2 -translate-y-1/2" alt="" />
            </div>

            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item="">
                <img src="../assets/wizytowka-bg.png" class="block absolute top-1/1 left-1/1 w-full h-full -translate-x-1/2 -translate-y-1/2" alt="...">
            </div>

            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item="">
                <img src="../assets/opakowanie-bg.png" class="block absolute top-1/1 left-1/1 w-full h-full -translate-x-1/2 -translate-y-1/2" alt="...">
            </div>

            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item="">
                <img src="../assets/ulotka-bg.png" class="block absolute top-1/1 left-1/1 w-full h-full -translate-x-1/2 -translate-y-1/2" alt="...">
            </div>
          </div>

        <!-- Slider indicators -->
        <div class="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
            <button  ton type="button" class="w-3 h-3 bg-white rounded-full dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        </div>
            <!-- Slider controls -->
    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
      </div>
    </div>
    <div class="relative flex justify-end max-w-screen h-full mx-auto lg:max-w-screen-xl">
      <div class="mb-0 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-8">
          <div>
            <img src="../assets/poligrafia-logo-small.svg" alt="poligrafia-łódź-small" class="h-12 inline-block px-3 py-px mb-4">
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Drukujemy już od <br class="hidden md:block" />
            <span class="inline-block text-deep-purple-accent-400"> 23 lat</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Obecnie dla Państwa usługi świadczy blisko 30 osobowy zespół pracowników z wieloletnim doświadczeniem. Nasze atuty to doświadczona kadra, dobrze wyposażone stanowiska pracy.
          </p>
        </div>
        <div class="flex items-center mb-8 justify-center">
          <button
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 hover:shadow-md focus:shadow-outline focus:outline-none"
          >
            Sprawdź ofertę
          </button>
          <button href="/" aria-label="" class="inline-flex items-center font-semibold  h-12 px-6 mr-6  text-gray-800 rounded transition-colors duration-200 shadow-inner ring-green-500 ring-2 flex-colring-2 hover:text-gray-200 hover:shadow-md hover:bg-green-500"> Zadzwoń </button>
        </div>
        <hr class="mb-8 border-purple-300" />
         <div class="flex">
          <div class="flex flex-col">
            <div class="text-md font-semibold flex items-center px-16">
              Zaufali nam :
              <img class="h-10" src="../assets/lagardere-img.png">
              <img class="h-10" src="../assets/morele-img.png">
            </div>
          </div>
        </div>
        <hr class="mt-8 border-purple-300" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods: {
    mouseover: function(){
      this.carousel.pause()
    },
    mouseleave: function(){
      this.carousel.cycle()
    }
}
}
</script>