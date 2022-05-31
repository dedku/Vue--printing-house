<template>
  <div :class="{ 'scrolled': !view.atTopOfPage }"
    class="fixed top-0 z-50 inset-x-0 transition ease-out duration-200 text-lg">
    <div class="px-2 py-1 sm:mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:pr-8 lg:pl-2">
      <div class="relative flex items-center justify-between sm:justify-between md:justify-between">
        <router-link to="/" aria-label="Home przycisk" title="Home" class="inline-flex items-center ">
          <img src="../assets/poligrafia-logo-small.svg" alt="poligrafia-łowicz-logo" class="h-24">

        </router-link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <router-link to="/#hero" aria-label="Strona główna przycisk nawigujący" title="Strona główna"
              class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
              Strona główna</router-link>
          </li>
          <li>
            <router-link to="/#produkty" aria-label="Produkty przycisk nawigujący" title="Produkty"
              class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
              Oferta</router-link>
          </li>
          <li>
            <router-link to="/#znami" aria-label="Dlaczego z nami przycisk nawigujący" title="Dlaczego z nami"
              class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
              Dlaczego z nami</router-link>
          </li>
          <li>
            <router-link to="/#wydawnictwo" aria-label="Wydawnictwo przycisk nawigujący" title="Wydawnictwo"
              class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
              Wydawnictwo</router-link>
          </li>
          <li>
            <router-link to="/#blog" aria-label="Blog przycisk nawigujący" title="Blog"
              class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
              Blog</router-link>
          </li>
          <li>
            <router-link to="/#kontakt" aria-label="Kontakt przycisk nawigujący" title="Kontakt"
              class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
              Kontakt</router-link>
          </li>
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:ml-40 lg:flex">
          <li>
            <a class="inline-flex items-center justify-center h-12 gap-2 text-gray-800 " href="tel:+48504128606">
              <box-icon animation="tada" color="green" type='solid' name='phone-call'></box-icon>
              +48 504 128 606
            </a>
          </li>
          <li>
            <router-link to="/"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 hover:shadow-xl focus:shadow-outline focus:outline-none"
              aria-label="Zaloguj się przycisk" title="Zaloguj się">
              Zaloguj się
            </router-link>
          </li>
        </ul>
        <div class="lg:hidden">
          <a aria-label="Zadzwoń do nas przycisk" title="Zadzwoń do nas"
            class="inline-flex items-center justify-center h-12 gap-2 text-gray-800 " href="tel:+48504128606">
            <box-icon animation="tada" color="green" type='solid' name='phone-call'></box-icon>
            +48 504 128 606
          </a>
          <button aria-label="Otwórz menu przycisk" title="Otwórz menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            @click="isMenuOpen = true">
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z">
              </path>
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z">
              </path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <router-link to="/" aria-label="Home przycisk" title="Home" class="inline-flex items-center ">
                    <img src="../assets/poligrafia-logo-small.svg" alt="poligrafia-łowicz-logo" class="h-24">

                  </router-link>
                </div>
                <div>
                  <button aria-label="Zamknij menu ikkona" title="Zamknij menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false">
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <router-link to="/#hero" aria-label="Strona główna przycisk nawigujący" title="Strona główna"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-400">
                      Strona główna</router-link>
                  </li>
                  <li>
                    <router-link href="/#produkty" aria-label="Produkty przycisk nawigujący" title="Produkty"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-400">
                      Oferta</router-link>
                  </li>
                  <li>
                    <router-link to="/#znami" aria-label="Dlaczego z nami przycisk nawigujący" title="Dlaczego z nami"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-400">
                      Dlaczego z nami</router-link>
                  </li>
                  <li>
                    <router-link to="/#wydawnictwo" aria-label="Wydawnictwo przycisk nawigujący" title="Wydawnictwo"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-400">
                      Wydawnictwo</router-link>
                  </li>
                  <li>
                    <router-link to="/#blog" aria-label="Blog przycisk nawigujący" title="Blog"
                      class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
                      Blog</router-link>
                  </li>
                  <li>
                    <router-link to="/#kontakt" aria-label="Kontakt przycisk nawigujący" title="Kontakt"
                      class="font-medium tracking-wide text-gray-700 transition duration-200 border-b-2 border-transparent hover:border-deep-purple-accent-400">
                      Kontakt</router-link>
                  </li>
                  <li>
                    <router-link to="/"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Zaloguj się przycisk" title="Zaloguj się">
                      Zaloguj się
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      view: {
        atTopOfPage: true
      }
    }
  },
  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
  }
};
</script>
