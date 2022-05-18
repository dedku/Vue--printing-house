<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="wydawnictwo">
        <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 text-gray-900 sm:mb-4">
          Wydawnictwo<br class="hidden md:block" />
        </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-blue-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>
      <p class="text-gray-700 lg:text-sm lg:max-w-md">
        Będac przedsiębiorstwem nowoczesnym, nastawionym na wdrażanie
najnowszych technologii, pamiętamy o naszym dziedzictwie, naszej kulturze.
      </p>
    </div>
    <div class="grid gap-8 mb-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img src="../assets/bazylika.png" class="object-cover w-full h-64" alt="" />
        <div class="p-5 border border-t-0">
          <p class="mb-3 text-xs text-right font-semibold tracking-wide uppercase">
            <span class="text-gray-600">ks. Stanisław Majkut</span>
          </p>
          <div class="text-left">
          <a href="#" aria-label="Category" title="Visit the East" class="inline-block text-right mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">Bazylika katedralna w Łowiczu</a>
          <p class="mb-2 text-gray-700">
            W 2000 roku minęła dziewięćsetna rocznica istnienia dawnej kolegiaty prymasowskiej aoobecnie bazyliki katedralnej w Łowiczu ...
          </p>
          <a href="#" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Sprawdź</a>
        </div>
        </div>
      </div>
      <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img src="../assets/moje_lowickie.jpg" class="object-cover w-full h-64" alt="" />
        <div class="p-5 border border-t-0">
          <p class="mb-3 text-xs text-right font-semibold tracking-wide uppercase">
            <span class="text-gray-600">Joanna Bolimowska</span>
          </p>
          <div class="text-left">
          <a href="#" aria-label="Category" title="Simple is better" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">Moje Łowickie</a>
          <p class="mb-2 text-gray-700">
            Zachowanie swojej tradycji, kultury, tożsamości narodowej, w tym również przywiązanie do regionalnej tradycji ...
          </p>
          <a href="#" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Sprawdź</a>
          </div>
        </div>
      </div>
      <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img src="../assets/ludzie_i_czasy.png" class="object-cover w-full h-64" alt="" />
        <div class="p-5 border border-t-0">
          <p class="mb-3 text-xs text-right font-semibold tracking-wide uppercase">
            <span class="text-gray-600">Stanisław Cisak</span>
          </p>
          <div class="text-left">
          <a href="#" aria-label="Category" title="Film It!" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">Ludzie i czasy Środka Polski</a>
          <p class="mb-2 text-gray-700">
            Stanisław Cisak z pasją opisał życie religijne mieszkańców i zabytki sakralne.
W większym stopniu scharakteryzował rolę ...
          </p>
          <a href="#" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Sprawdź</a>
        </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link to="#" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
        Zobacz więcej
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>