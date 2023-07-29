<template>
  <div class="bg-gray-800 dark:bg-zinc-900 text-white mt-32 border-rose-500 flex flex-col items-center justify-center">
    <div class="md:container py-12 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
      <div class="w-full md:col-span-1 flex flex-col items-center md:items-start">
        <div class="mb-4">
          <img src="../assets/logo-text.png" class="h-12" />
        </div>
        <p class="text-sm w-full text-center md:text-left">
            AniFox is an anime discovery web application powered by Jikan API.
            It is made by the developer for fun and practicing web development practices
        </p>
      </div>
      <div class="w-full md:ml-8 md:col-span-1 flex flex-col items-center md:items-start space-y-2">
        <h1 class="font-bold mb-4">Links</h1>
        <RouterLink class="hover:text-orange-500 transition-all" to="/about" >About</RouterLink>
        <RouterLink class="hover:text-orange-500 transition-all" to="/anime/top-airing" >Top Airing Anime</RouterLink>
        <RouterLink class="hover:text-orange-500 transition-all" to="/anime/popular" >Popular Anime</RouterLink>
        <RouterLink class="hover:text-orange-500 transition-all" to="/anime/upcoming" >Upcoming Anime</RouterLink>
      </div>
      <div class="w-full md:ml-8 md:col-span-1 flex flex-col items-center md:items-start space-y-2">
        <h1 class="font-bold mb-4">Developer's Socials</h1>
        <a href="https://matthewlubi.pages.dev" target="_blank" >Portfolio</a>
        <a href="https://github.com/winraaawr" >Github</a>
        <a href="" >Email</a>
        <a href="" >Instagram</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>
