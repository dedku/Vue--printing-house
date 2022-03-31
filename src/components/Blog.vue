<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          Blog
        </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>
    </div>
    <div class="grid gap-10 mb-8 row-gap-8 text-left lg:grid-cols-5">
      <div class="lg:col-span-2">
        <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
          20 Gru 2020
        </p>
        <div class="mb-3">
          <a href="#" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
              Kontrola jakości i powtarzalność druku
            </p>
          </a>
        </div>
        <p class="mb-4 text-base text-gray-700 md:text-lg">
          Jako wydawca czy marketingowiec dbasz oto, aby czasopisma i katalogi zawsze trzymały standard, miały te same parametry ...
        </p>
        <div class="flex items-center">
          <a href="#" aria-label="Author" class="mr-3">
            <img alt="avatar" src="../assets/Avatar.png" class="object-cover w-10 h-10 rounded-full shadow-sm" />
          </a>
          <div>
            <a href="#" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Poligrafia Łowicz</a>
            <p class="text-sm font-medium leading-4 text-gray-600">Autor</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-8 lg:col-span-3">
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            14 Sie   2020
          </p>
          <div class="mb-3">
            <a href="#" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
              <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                Ile kosztuje wydrukowanie książki?
              </p>
            </a>
          </div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            Rzecz najważniejsza – istotna jest wielkość nakładu. Jeśli startujesz z wysokiego pułapu i chcesz wydrukować np. 8 tysięcy egzemplarzy książki – w przypadku wyboru naszej drukarni efektywne ekonomicznie ...
          </p>
          <div class="flex items-center">
            <a href="#" aria-label="Author" class="mr-3">
              <img alt="avatar" src="../assets/Avatar.png" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="#" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Poligrafia Łowicz</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Autor</p>
            </div>
          </div>
        </div>
        <div>
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            18 Mar 2020
          </p>
          <div class="mb-3">
            <a href="#" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
              <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                Jak prawidłowo stworzyć folder reklamowy?
              </p>
            </a>
          </div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            Doskonale sprawdza się do promowania świadczonych usług czy nowych produktów wprowadzanych do oferty. Foldery reklamowe wykorzystują firmy działające w wielu różnych ...
          </p>
          <div class="flex items-center">
            <a href="#" aria-label="Author" class="mr-3">
              <img alt="avatar" src="../assets/Avatar.png" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="#" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Poligrafia Łowicz</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Autor</p>
            </div>
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