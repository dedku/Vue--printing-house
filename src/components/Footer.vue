<template>
  <div class="bg-white">
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid row-gap-10 mb-8 lg:grid-cols-6">
        <div class="justify-center grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-2 sm:mb-8 md:mb-8">
          <div>
            <p class="font-medium tracking-wide text-deep-purple-accent-400">O nas</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">Dlaczego
                  my</a>
              </li>
              <li>
                <a href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">Wydawnictwo</a>
              </li>
              <li>
                <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">Nasze
                  prace</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-deep-purple-accent-400">Co robimy</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">Sklep</a>
              </li>
              <li>
                <a href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">Urządzenia
                  biurowe</a>
              </li>
              <li>
                <a href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">Urządzenia
                  produkcyjne</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:max-w-md lg:col-span-2">
          <span class="text-base font-medium tracking-wide text-deep-purple-accent-400">Zapisz się do newsletera</span>
          <form class="flex flex-col mt-4 md:flex-row">
            <input placeholder="Email" type="text"
              class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:text-deep-purple-accent-400 focus:outline-none focus:shadow-outline" />
            <button type="submit"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 focus:shadow-outline focus:outline-none">
              Wyślij
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
        <p class="text-sm text-gray-500">
          © Copyright 2022 All rights reserved.
        </p>
        <div class="flex items-center mt-4 space-x-4 sm:mt-0">
          <a href="https://www.facebook.com/DrukarniaPoligrafiaLowicz"
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-200">
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
              </path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>