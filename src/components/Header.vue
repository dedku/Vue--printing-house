<template>
  <div class="relative flex flex-col-reverse px-4 pt-16 mx-auto bg-gradient-to-br from-white to-purple-300 pt-24 lg:block lg:flex-col lg:py-32 xl:py-48 md:max-w-full lg:max-w-full">
    <div class="z-0 flex justify-center h-full mx-4 py-6 lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-2/3 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center lg:h-screen xl:h-full " >
      <img src="../assets/hero_image.png" class="object-cover object-right w-full h-auto lg:w-auto lg:h-full" alt="" />
    </div>
    <div class="relative flex justify-end max-w-screen h-full mx-auto lg:max-w-screen-xl">
      <div class="mb-0 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-8">
          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-500">
              Poligrafia
            </p>
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