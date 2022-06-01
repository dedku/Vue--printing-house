<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="blog">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="font-sans text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-2 group">
        <span class="inline-block mb-1 sm:mb-4">
          Blog
        </span>
        <div
          class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
        </div>
      </h2>
    </div>
    <div class="grid gap-10 mb-8 row-gap-8 text-left lg:grid-cols-5">
      <div class="lg:col-span-2" v-for="blog in blogs.slice(0, 1)" :key="blog.id">
        <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
          {{ blog.date }}
        </p>
        <div class="mb-3">
          <router-link :to="'/blog/' + blog.slug" aria-label="Article"
            class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
              {{ blog.title }}
            </p>
          </router-link>
        </div>
        <p class="mb-4 text-base text-gray-700 md:text-lg" v-html="dotAfterText(blog.content, 390)" />
        <div class="flex items-center">
          <a href="#" aria-label="Author" class="mr-3">
            <img alt="avatar" :src="getImgUrl(blog.image)" class="object-cover w-10 h-10 rounded-full shadow-sm" />
          </a>
          <div>
            <a href="#" aria-label="Author"
              class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">{{
                  blog.author
              }}</a>
            <p class="text-sm font-medium leading-4 text-gray-600">Autor</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-8 lg:col-span-3">
        <div v-for="blog in visibleBlogs" :key="blog.id">
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            {{ blog.date }}
          </p>
          <div class="mb-3">
            <router-link :to="'/blog/' + blog.slug" aria-label="Article"
              class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
              <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                {{ blog.title }}
              </p>
            </router-link>
          </div>
          <p class="mb-4 text-base text-gray-700 md:text-lg" v-html="dotAfterText(blog.content, 190)" />
          <div class="flex items-center">
            <a href="#" aria-label="Author" class="mr-3">
              <img alt="avatar" :src="getImgUrl(blog.image)" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="#" aria-label="Author"
                class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">{{
                    blog.author
                }}</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Autor</p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link to="#" aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        @click="activeBlogs += showMoreBlogs" v-if="activeBlogs < blogs.length">
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
  name: "Blogs",
  props: {
    blogs: {
      type: Object,
      default: () => { },
    }
  },
  data() {
    return {
      activeBlogs: 2,
      showMoreBlogs: 2,
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + url + ".png")
    },
    dotAfterText(text, size) {
      return text.length > size ? text.slice(0, size - 1) + "..." : text
    }
  },
  computed: {
    visibleBlogs() {
      return this.blogs.slice(1, this.activeBlogs + 1)
    }
  },
}
</script>