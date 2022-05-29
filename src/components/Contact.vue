<template>
  <div
    class="text-gray-600 body-font relative px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:h-max "
    id="kontakt">
    <div class="absolute inset-0 bg-gray-300 rounded-lg">
      <iframe class="rounded-lg "
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9802.142337870036!2d19.9123649!3d52.1063832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb18fe923736c50b4!2sPoligrafia%20sp.j.!5e0!3m2!1spl!2spl!4v1653399025850!5m2!1spl!2spl"
        width="100%" height="100%" style="border:0;" allowfullscreen="false" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2
          class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group">
          <span class="inline-block mb-1 text-gray-900 sm:mb-4">
            Kontakt<br class="hidden md:block" />
          </span>
          <div
            class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100">
          </div>
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">Pozostańmy w kontakcie!</p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-gray-700 lg:text-sm lg:max-w-md">Email</label>
          <input type="email" id="email" name="email" placeholder="Twój email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-gray-700 lg:text-sm lg:max-w-md">Wiadomość</label>
          <textarea id="message" name="message" placeholder="Wiadomość tekstowa..."
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button
          class="text-white bg-deep-purple-accent-400 border-0 py-2 px-6 focus:outline-none hover:bg-deep-purple-accent-200 rounded text-lg">Wyślij</button>
        <p class="text-xs text-gray-500 mt-3">Odpowiadamy do 48h od otrzymania wiadomośći.
        </p>
      </div>
    </div>
  </div>
</template>