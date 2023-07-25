<template>
  <div
    class="relative flex flex-row w-full h-[260px] md:h-[400px] md:rounded-md bg-gradient-to-b from-white dark:from-zinc-900 to-transparent"
  >
    <!-- slides -->
    <Slide
      class="slide transition-all duration-300"
      :class="i === index ? 'opacity-100 z-20' : 'opacity-0 -z-10'"
      v-for="(anime, i) in featured"
      :title="anime.title"
      :synopsis="anime.synopsis"
      :poster="anime.trailer.images.maximum_image_url"
      :index="i"
      :id="anime.mal_id"
    />
  </div>
  <div class="flex flex-row justify-between px-2 md:px-0">
    <!-- Circle Nav -->
    <div class="flex flex-row space-x-1circles">
      <button
        type="button"
        :class="
          index === 0 ? 'text-orange-500' : 'text-gray-600 dark:text-white'
        "
        class="text-[10px] transition-all"
      >
        <CircleIcon />
      </button>
      <button
        type="button"
        :class="
          index === 1 ? 'text-orange-500' : 'text-gray-600 dark:text-white'
        "
        class="text-[10px] transition-all"
      >
        <CircleIcon />
      </button>
      <button
        type="button"
        :class="
          index === 2 ? 'text-orange-500' : 'text-gray-600 dark:text-white'
        "
        class="text-[10px] transition-all"
      >
        <CircleIcon />
      </button>
      <button
        type="button"
        :class="
          index === 3 ? 'text-orange-500' : 'text-gray-600 dark:text-white'
        "
        class="text-[10px] transition-all"
      >
        <CircleIcon />
      </button>
      <button
        type="button"
        :class="
          index === 4 ? 'text-orange-500' : 'text-gray-600 dark:text-white'
        "
        class="text-[10px] transition-all"
      >
        <CircleIcon />
      </button>
      <button
        type="button"
        :class="
          index === 5 ? 'text-orange-500' : 'text-gray-600 dark:text-white'
        "
        class="text-[10px] transition-all"
      >
        <CircleIcon />
      </button>
    </div>
    <!-- Chevron Nav -->
    <div class="flex flex-row space-x-2 text-gray-800 dark:text-white arrows">
      <button
        type="button"
        @click="backSlide"
        class="border-2 border-gray-800 dark:border-white rounded-md text-base"
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        @click="nextSlide"
        class="border-2 border-gray-800 dark:border-white rounded-md text-base"
      >
        <ChevronRightIcon />
      </button>
    </div>
  </div>
</template>

<script async setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useTimeout } from "../utilities";
import Slide from "./Slide.vue";
import CircleIcon from "~icons/mdi/circle";
import ChevronLeftIcon from "~icons/mdi/chevron-left";
import ChevronRightIcon from "~icons/mdi/chevron-right";

const featured = ref({});
const index = ref(0);

async function getFeatured() {
  try {
    console.log("Fetching Featured");
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/anime?filter=airing&limit=6&page=2"
    );
    return await response.data.data;
  } catch (error) {
    return error;
  }
}

const nextSlide = () => {
  index.value === 5 ? (index.value = 0) : (index.value = index.value + 1);
  console.log("next clicked");
};

const backSlide = () => {
  index.value === 0 ? (index.value = 5) : (index.value = index.value - 1);
  console.log("back clicked");
};

featured.value = await getFeatured();

onMounted(async () => {
  for (let i = 0; i < 60; i++) {
    await useTimeout(6000);
    nextSlide();
  }
});
</script>
