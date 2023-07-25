<script async setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Card from "./Card.vue";
import { useTimeout } from "../utilities";

const isFetching = ref(true);
const data = ref({});

async function getTrending() {
  isFetching.value = true;
  try {
    useTimeout(500)
    console.log('Fetching Top')
    const response = await axios.get("https://api.jikan.moe/v4/top/anime?limit=6");
    isFetching.value = false;
    return (await response.data.data)
  } catch (error) {
    await getTrending()
    isFetching.value = false;
    return error;
  }
}
  data.value= await getTrending();
</script>

<template>
  <div class="flex flex-col px-2 md:px-0">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-xl md:text-2xl font-bold text-orange-600 uppercase mb-6">
        Top Anime
      </h1>
      <RouterLink
        to="/"
        class="text-gray-800 dark:text-white text-xs hover:text-orange-500 dark:hover:text-orange-500 transition-all"
        >View more</RouterLink
      >
    </div>

    <div class="grid grid-flow-row grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6 w-full">
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
