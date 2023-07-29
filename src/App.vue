<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Suspense>
    <template #fallback>
      <div class="bg-white dark:bg-zinc-950">
        
      </div>
    </template>
    <template #default>
      <Navbar />
    </template>
  </Suspense>
  <Suspense>
    <template #fallback>
      <div class="bg-white dark:bg-zinc-950 z-50 flex flex-col items-center justify-center h-screen w-screen">
        <span class="animate-pulse text-orange-500">AniFox</span>
        <h1 class="animate-pulse text-gray-800 dar:text-white font-bold text-3xl">Loading</h1>
      </div>
    </template>
    <template #default>
      <router-view :key="$route.fullPath" />
    </template>
  </Suspense>

  
</template>

<script setup></script>

<style scoped></style>
