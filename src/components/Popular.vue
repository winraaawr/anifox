<script async setup>
import { ref, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import Card from "./Card.vue";
import { useTimeout } from "../utilities";

const isFetching = ref(true);
const data = ref({});

async function getPopular() {
  isFetching.value = true;
  try {
    await useTimeout(5000)
    console.log('Fetching Popular')
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=6"
    );
    isFetching.value = false;
    return await response.data.data;
  } catch (error) {
    isFetching.value = false;
    await getPopular()
    return error;
  }
}
data.value = await getPopular();
</script>

<template>
  <div class="flex flex-col px-2 md:px-0">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-xl md:text-2xl font-bold text-orange-600 uppercase mb-6">
        Most Popular
      </h1>
      <RouterLink
        to="/"
        class="text-gray-800 dark:text-white text-xs hover:text-orange-500 dark:hover:text-orange-500 transition-all"
        >View more</RouterLink
      >
    </div>

    <div
      class="grid grid-flow-row grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6 w-full"
    >
      <Card
        v-if="!isFetching"
        v-for="anime in data"
        :title="anime.title"
        :episodes="anime.episodes"
        :format="anime.type"
        :rating="anime.score"
        :poster="anime.images.jpg.large_image_url"
        :link="'/anime/' + anime.mal_id"
      />
    </div>
  </div>
</template>
