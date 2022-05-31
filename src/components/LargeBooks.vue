  <template>
    <div class="px-4 py-8 mt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
            <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb">
                <a href="/" aria-label="Item" class="mr-3">
                    <div class="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                        <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                    </div>
                </a>
                <h2
                    class="font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-2 group">
                    <span class="inline-block mb-1 text-gray-900 sm:mb-4">
                        Wydawnictwo historyczno-kulturowe<br class="hidden md:block" />
                    </span>
                    <div
                        class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
                    </div>
                </h2>
            </div>
            <p class="w-full text-gray-700 lg:text-sm lg:max-w-md">
                Wykonujemy wiele typów prac drukarskich, od tych najprostszych - ulotek oraz wizytówek, po te
                najbardziej wymagające - albumy książkowe, katalogi oraz opakowania, kalendarze etc.
            </p>
        </div>
        <div class="flex flex-row max-w-screen-lg gap-8 mb-24 booked sm:mx-auto" v-for="book in books" :key="book.id">
            <img class="object-cover w-h-full rounded shadow-lg" :src="getImgUrl(book.image)" :alt="book.title" />
            <div class="flex flex-col justify-center">
                <div class="pb-4 mb-4 border-b">
                    <h6 class="mb-2 font-semibold tracking-wide leading-5">
                        {{ book.title }}
                    </h6>
                    <p class="text-sm text-gray-900">
                        {{ book.author }}
                    </p>
                </div>
                <div class="pb-4 mb-4 border-b">
                    <p class="text-sm text-justify text-gray-900 whitespace-pre-line" v-html="book.content" />
                </div>
                <div class="flex justify-center gap-4">
                    <h6 class="mb-2 font-semibold tracking-wide leading-5" v-for="asset in book.assets" :key="asset.id">
                        {{ asset.text }}
                    </h6>
                </div>
                <router-link
                    class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-200 hover:shadow-md focus:shadow-outline focus:outline-none"
                    to="#produkty">
                    Zamów
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'LargeBooks',
    data() {
        return {
            loading: false
        }
    },
    computed: {
        ...mapState({
            books: state => state.dataItems.books,
        }),
    },
    methods: {
        getImgUrl(url) {
            const images = require.context('../assets/', false, /\.png$/)
            return images('./' + url + ".png")
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
.booked:nth-child(even) {
    flex-direction: row-reverse;
}
</style>