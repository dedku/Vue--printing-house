<template >
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-full"
    id="produkty">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-2 group">
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
        <div>
          <vue-final-modal v-if="modalVisible" v-model="modalVisible" classes="modal-container"
            content-class="modal-content" :ssr="true" :key="product.id" :hide-overlay="false" :click-to-close="true"
            :esc-to-close="true" :lock-scroll="false">
            <span class="modal__title"> {{ modalTitle }} </span>
            <div class="modal__content" v-html="modalData">
            </div>
            <div class="modal__action">
              <button @click="modalVisible = false"
                class="inline-flex items-center font-semibold  h-12 px-6 mr-6  text-gray-800 rounded transition-colors duration-200 shadow-inner ring-green-500 ring-2 flex-colring-2 hover:text-gray-200 hover:shadow-md hover:bg-green-500">Zadzwoń</button>
              <button @click="modalVisible = false"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 hover:shadow-md focus:shadow-outline focus:outline-none">Powrót</button>
            </div>
          </vue-final-modal>
          <button @click="openModal(product)" aria-label="Zobacz produkt">
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
        </div>
      </div>
    </div>
    <div class="text-center">
      <button aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        @click="activeProducts += showMoreProd" v-if="activeProducts < webProducts.length">
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
import { mapGetters, mapActions } from 'vuex';
import { VueFinalModal } from 'vue-final-modal'
export default {
  name: 'Customers',
  components: {
    VueFinalModal,
  },
  data() {
    return {
      activeProducts: 4,
      showMoreProd: 4,
      modals: [],
      modalVisible: false,
      modalData: null,
      modalTitle: null,
      loading: false
    }
  },
  computed: {
    ...mapGetters('dataItems', {
      webProducts: 'webProducts'
    }),
    visibleProducts() {
      return this.webProducts.slice(0, this.activeProducts)
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
    openModal(data) {
      this.modalData = data.opis
      this.modalTitle = data.title
      this.modalVisible = true
    },
    ...mapActions({
      fetchData: 'dataItems/fetchData',
    })
  },
  created() {
    this.loading = true
    this.fetchData().then(() => this.loading = false)
  },
}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}

.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>