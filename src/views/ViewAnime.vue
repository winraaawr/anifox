<template>
  <Suspense>
    <template #default>
      <Anime />
    </template>
    <template #fallback>
      <div
        class="flex flex-col items-center justify-center h-screen w-screen bg-white dark:bg-zinc-950"
      >
        <!-- <img src="./assets/logo.svg" class="text-gray-800 dark:text-white" alt="AniFox Logo" /> -->
        <span class="text-center text-orange-500 text-3xl animate-pulse font-bold uppercase">AniFox</span>
        <span class="text-center text-gray-800 dark:text-white text-xl animate-pulse font-bold">Loading</span>
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import Anime from "../components/Anime.vue";
</script>
