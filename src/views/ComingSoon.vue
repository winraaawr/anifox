<template>
  <div class="h-screen">
    <div
      class="container md:px-36 flex flex-col justify-center items-center h-full"
    >
      <h1 class="text-orange-600 font-bold text-3xl">Coming soon on</h1>
      <div class="mb-4">
        <img src="../assets/logo-text.png" class="h-12 object-cover" />
      </div>
      <h3 class="text-gray-800 dark:text-white mb-2">Future Updates</h3>
      <ul class="space-y-1">
        <li>
          <span class="text-gray-800 dark:text-white text-sm"
            >- User Account</span
          >
        </li>
        <li>
          <span class="text-gray-800 dark:text-white text-sm">- Add to's</span>
        </li>
        <ul class="ml-8">
          <li>
            <span class="text-gray-800 dark:text-white text-sm"
              >- Add to interested</span
            >
          </li>
          <li>
            <span class="text-gray-800 dark:text-white text-sm"
              >- Add to watching</span
            >
          </li>
          <li>
            <span class="text-gray-800 dark:text-white text-sm"
              >- Add to favorites</span
            >
          </li>
        </ul>
        <li>
          <span class="text-gray-800 dark:text-white text-sm"
            >- Anime Character List and information</span
          >
        </li>
        <li>
          <span class="text-gray-800 dark:text-white text-sm"
            >- Studio List and information</span
          >
        </li>
      </ul>
      <span class="mt-6 text-gray-800 dark:text-white text-xs mb-2"
        >Contact/Visit developer's socials</span
      >
      <div class="flex flex-col text-xs text-gray-800 dark:text-white space-y-1">
        <div class="grid grid-cols-3">
          <span class="col-span-1">Portfolio:</span>
          <span class="col-span-2 group"><a class="flex flex-row items-center group-hover:text-orange-500 transition-all" href="https://matthewlubi.pages.dev">Go to my portfolio <ArrowRightIcon class="group-hover:ml-4 ml-2 transition-all" /></a></span>
        </div>
        <div class="grid grid-cols-3">
          <span class="col-span-1">Email:</span>
          <span class="col-span-2"><a class="hover:text-orange-500" href="https://matthewlubi.pages.dev">matthewlubi.dev@gmail.com</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowRightIcon from '~icons/mdi/arrow-right'
</script>
