<template >
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="produkty">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span class="inline-block mb-1 sm:mb-4">
          Nasze usługi
        </span>
        <div
          class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
        </div>
      </h2>
      <p class="text-gray-700 lg:text-sm lg:max-w-md">
        Wykonujemy wiele typów prac drukarskich, od tych najprostszych - ulotek oraz wizytówek, po te najbardziej
        wymagające - albumy książkowe, katalogi oraz opakowania, kalendarze etc.
      </p>
    </div>
    <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <div v-for="product in visibleProducts" :key="product.id">
        <button to="#" aria-label="Zobacz produkt" :data-modal-toggle="product.title">
          <div
            class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" :src="getImgUrl(product.url2)" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p class="text-sm font-medium tracking-wide text-white">
                {{ product.title }}
              </p>
            </div>
          </div>
        </button>
        <!-- Main modal -->
        <div :id="product.title" tabindex="-1" aria-hidden="true"
          class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
          <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  Opis produktu
                </h3>
                <button type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  :data-modal-toggle="product.title">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {{ product.opisGora }}
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {{ product.opisDol }}
                </p>
              </div>
              <!-- Modal footer -->
              <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <a :data-modal-toggle="product.title" href="tel:+48504128606" type="button"
                  class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-900">
                  Zadzwoń</a>
                <button :data-modal-toggle="product.title" type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Wróć</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        @click="productsVisible += showMoreProd" v-if="productsVisible < webProducts.length">
        Zobacz więcej
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path
            d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
          </path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Customers',
  data() {
    return {
      productsVisible: 4,
      showMoreProd: 4,
    }
  },
  computed: {
    ...mapGetters('dataItems', {
      webProducts: 'webProducts'
    }),
    visibleProducts() {
      return this.webProducts.slice(0, this.productsVisible)
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
  },
}
</script>