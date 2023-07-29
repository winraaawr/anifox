<template>
    <div class="min-h-screen bg-white dark:bg-zinc-950 pb-6">
      <div
        class="px-2 md:container grid grid-cols-1 md:grid-cols-4 gap-4 pt-[80px] md:pt-[100px]"
      >
        <div class="flex flex-col col-span-3">
          <h1 class="text-2xl font-bold text-orange-500 uppercase">
            Popular Anime
          </h1>
  
          <!-- component -->
          <!-- <div class="py-6"> -->
            <!-- list per anime component-->
            <!-- <ListAnime
              v-for="anime in data"
              :poster="anime.images.jpg.large_image_url"
              :title="anime.title"
              :episodes="anime.episodes"
              :type="anime.type"
              :genres="anime.genres"
            /> -->
            <!-- list per anime component end -->
          <!-- </div> -->
          <!-- end of top 100 component -->
  
          <!-- Card Type List -->
          <div class="py-6">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <SmallCard
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
  
        </div>
        <div class="col-span-1">
          <h1 class="text-gray-800 dark:text-white text-xl font-bold mb-4">
            Discover
          </h1>
          <!-- Popular Component -->
          <div class="flex flex-col">
            <RouterLink to="/anime/upcoming">
            <h3 class="group flex flex-row items-center text-gray-800 dark:text-white mb-4 hover:text-orange-500 dark:hover:text-orange-500 transition-all">
              Upcoming Anime <ArrowRightIcon class="ml-2 group-hover:ml-4 transition-all" />
            </h3>
          </RouterLink>
            <div>
              <MiniListAnime
                v-for="anime in data2"
                :id="anime.mal_id"
                :poster="anime.images.jpg.large_image_url"
                :title="anime.title"
                :episodes="anime.episodes"
                :type="anime.type"
                :genres="anime.genres"
                :year="anime.year"
                :season="anime.season"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script async setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import SmallCard from "./SmallCard.vue";
  import ListAnime from "../components/ListAnime.vue";
  import MiniListAnime from "./MiniListAnime.vue";
  import { useTimeout } from "../utilities";
  import ArrowRightIcon from '~icons/mdi/arrow-right'
  
  const isFetching = ref(true);
  const data = ref({});
  const data2 = ref({});
  
  async function getTopAiring() {
    isFetching.value = true;
    try {
      useTimeout(500);
      console.log("Fetching Top");
      const response = await axios.get(
        "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
      );
      isFetching.value = false;
      return await response.data.data;
    } catch (error) {
      await getTopAiring();
      isFetching.value = false;
      return error;
    }
  }
  data.value = await getTopAiring();
  console.log(data.value)
  
  async function getPopular() {
    isFetching.value = true;
    try {
      useTimeout(500);
      console.log("Fetching Popular");
      const response = await axios.get(
        "https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5"
      );
      isFetching.value = false;
      return await response.data.data;
    } catch (error) {
      await getPopular();
      isFetching.value = false;
      return error;
    }
  }
  data2.value = await getPopular();
  </script>
  