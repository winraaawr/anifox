<script async setup>
import { ref, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import Card from "./Card.vue";
import { useTimeout } from "../utilities";

const isSuccess = ref(false);
const isFetching = ref(false);
const attempts = ref(0);
const data = ref({});

async function getPopular() {
  isFetching.value = true;
  await useTimeout(1000);
  try {
    console.log(`Fetching Popular (${attempts.value})`);
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=6"
    );
    setTimeout(() => {
      if (response.status === 200) {
        isSuccess.value = true;
        isFetching.value = false;
      } else {
        isSuccess.value = false;
        isFetching.value = false;
      }
    }, 500);
    return await response.data.data;
  } catch (error) {
    isSuccess.value = false;
    isFetching.value = false;
    return error;
  }
}
data.value = await getPopular();

while (isSuccess.value === false && attempts.value <= 3) {
  attempts.value++;
  await useTimeout(1500);
  data.value = await getPopular();
}
</script>

<template>
  <div class="flex flex-col px-2 md:px-0">
    <div class="flex flex-row justify-between items-center mb-4">
      <h1 class="text-xl md:text-2xl font-bold text-orange-600 uppercase">
        Most Popular
      </h1>
      <RouterLink
        to="/anime/popular"
        class="text-gray-800 dark:text-white text-xs hover:text-orange-500 dark:hover:text-orange-500 transition-all"
        >View more</RouterLink
      >
    </div>

    <div
      class="grid grid-flow-row grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6 w-full"
    >
      <Card
        v-if="isSuccess && data != null"
        v-for="anime in data"
        :title="anime.title"
        :episodes="anime.episodes"
        :format="anime.type"
        :rating="anime.score"
        :poster="anime.images.jpg.large_image_url"
        :link="'/anime/' + anime.mal_id"
      />
      <h1
        v-if="attempts === 4 && isSuccess === false"
        class="text-red-500 col-span-6"
      >
        Anime Fetch Error. Please refresh to reload.
      </h1>
    </div>
  </div>
</template>
