<template>
  <div class="h-screen overflow-hidden bg-violet-900">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div class="flex flex-col items-center justify-between xl:flex-row">
                  <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div class="relative">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
              <defs>
                <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24"></rect>
            </svg>
            <div class="relative bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Zostaw swój numer, odzwonimy!
              </h3>
              <form>
                <div class="mb-1 sm:mb-2">
                  <label for="name" class="inline-block mb-1 font-medium">Imię</label>
                  <input
                    placeholder="Imię"
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-accent-400 focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label for="email" class="inline-block mb-1 font-medium">Telefon</label>
                  <input
                    placeholder="123456789"
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Wyślij
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Pozostańmy w  <br class="hidden md:block" /><span class="text-green-500">kontakcie</span>
          </h2>

        </div>
      </div>
    </div>
  </div>
</template>