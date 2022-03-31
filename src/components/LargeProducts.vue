  <template>
    <div class="px-4 py-16 mt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div class="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
            <a href="/" aria-label="Item" class="mr-3">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
            </div>
            </a>
            <h2 class="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span class="inline-block mb-2">Nasze Usługi</span>
            <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
            </h2>
        </div>
        <p class="w-full text-gray-700 lg:text-sm lg:max-w-md">
            Wykonujemy wiele typów prac drukarskich, od tych najprostszych - ulotek oraz wizytówek, po te najbardziej wymagające - albumy książkowe, katalogi oraz opakowania, kalendarze etc.
        </p>
        </div>
        <div class="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            <button to="#" aria-label="View Item" data-modal-toggle="opakowania">
                <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p class="text-sm font-medium tracking-wide text-white">
                    Opakowania
                    </p>
                </div>
                </div>
                <p class="text-gray-700 pt-10">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                </p>
            </button>
            <!-- Main modal -->
    <div id="opakowania" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                        Terms of Service
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="opakowania">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="opakowania" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-toggle="opakowania" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                </div>
            </div>
        </div>
    </div>
            <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Kalendarze
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Wizytówki
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Foldery oraz katalogi
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Ulotki
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Książki oraz albumy
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Czasopisma
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Metki
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Etykiety
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Księgi znaku
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Torby
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
        </router-link>
                <router-link to="#" aria-label="View Item">
            <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <p class="text-sm font-medium tracking-wide text-white">
                Biuwary
                </p>
            </div>
            </div>
            <p class="text-gray-700 pt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
            </router-link>
        </div>
    </div>
 </template>