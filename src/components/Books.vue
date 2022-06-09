<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    id="wydawnictwo">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-2 group">
        <span class="inline-block mb-1 text-gray-900 sm:mb-4">
          Wydawnictwo historyczno-kulturowe<br class="hidden md:block" />
        </span>
        <div
          class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
        </div>
      </h2>
      <p class="text-gray-700 lg:text-sm lg:max-w-md">
        Będac przedsiębiorstwem nowoczesnym, nastawionym na wdrażanie
        najnowszych technologii, pamiętamy o naszym dziedzictwie, naszej kulturze.
      </p>
    </div>
    <div class="grid gap-8 mb-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <TransitionGroup name="list">
        <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
          v-for="book in books.slice(0, 3)" :key="book.id">
          <img :src="getImgUrl(book.image)" class="object-cover w-full h-64" :alt="book.title" />
          <div class="p-5 border border-t-0">
            <p class="mb-3 text-xs text-right font-semibold tracking-wide uppercase">
              <span class="text-gray-600">{{ book.author }}</span>
            </p>
            <div class="text-left">
              <router-link :to="bookId(book.id)" :title="book.title"
                class="inline-blck text-left mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                v-html="dotAfterText(book.title, 31)" />
              <p class="mb-2 text-gray-700" v-html="dotAfterText(book.content, 140)" />
              <router-link :to="bookId(book.id)" aria-label=""
                class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Sprawdź</router-link>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <div class="text-center">
      <router-link to="/wydawnictwo" aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
        Zobacz więcej
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path
            d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
          </path>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  props: {
    books: {
      type: Object,
      default: () => { },
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
    dotAfterText(text, size) {
      return text.length > size ? text.slice(0, size - 1) + "..." : text
    },
    bookId(book) {
      return `/wydawnictwo/#` + book
    }
  },
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>