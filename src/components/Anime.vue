<template>
  <div class="min-h-screen bg-white dark:bg-zinc-950 pb-6">
    <div
      class="md:container grid grid-cols-1 md:grid-flow-row md:grid-cols-4 min-h-screen h-auto w-full pt-[80px] md:pt-[100px]"
    >
      <div class="px-2 flex flex-col space-y-4 mb-6">
        <img
          class="max-h-[480px] object-cover object-center"
          :src="data.images.jpg.large_image_url"
        />
        <h1 class="text-gray-800 dark:text-white text-xl font-bold">{{ data.title }}</h1>

        <!-- Anime Titles -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>Alternative Titles:</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span v-for="anime in data.titles"> {{ anime.title }} </span>
          </div>
        </div>

        <!-- Anime Studio -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>Studio:</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span v-for="studio in data.studios">
              {{ studio.name != null ? studio.name : "N/A" }}
            </span>
          </div>
        </div>

        <!-- Anime Type -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>Type:</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span> {{ data.type != null ? data.type : "N/A" }} </span>
          </div>
        </div>

        <!-- Anime Episode -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>Episodes:</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span> {{ data.episodes != null ? data.episodes : "N/A" }} </span>
          </div>
        </div>

        <!-- Anime Status -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>Status:</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span> {{ data.status != null ? data.status : "N/A" }} </span>
          </div>
        </div>

        <!-- Anime Status -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>{{ air }}</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span>
              {{ data.aired.from != null ? airedFrom : "???" }} -
              {{ data.aired.to != null ? airedTo : "??? ?? ????" }}
            </span>
          </div>
        </div>

        <!-- Rating -->
        <div class="text-xs text-gray-800 dark:text-white grid grid-flow-row grid-cols-3">
          <div class="col-span-1">
            <span>Rating:</span>
          </div>
          <div class="flex flex-col col-span-2">
            <span> {{ data.rating }} </span>
          </div>
        </div>
      </div>
      <div class="px-2 col-span-3 flex flex-col">
        <div
          class="flex flex-row md:grid md:grid-cols-3 justify-between border-orange-500 border-b-2 border-t-2 py-2"
        >
          <div class="p-2 text-gray-800 dark:text-white">
            <!-- Rank -->
            <h3 class="text-orange-500 font-bold">Rank</h3>
            <span>{{ data.rank != null ? data.rank : "N/A" }}</span>
          </div>
          <div class="p-2 text-gray-800 dark:text-white">
            <!-- Popularity -->
            <h3 class="text-orange-500 font-bold">Popularity</h3>
            <span>{{ data.popularity != null ? data.popularity : "N/A" }}</span>
          </div>
          <div class="p-2 text-gray-800 dark:text-white">
            <!-- Score -->
            <h3 class="text-orange-500 font-bold">Score</h3>
            <span>{{ data.score != null ? data.score : "N/A" }}</span>
          </div>
        </div>

        <!-- Synopsis -->
        <div class="flex flex-col border-orange-500 border-b-2 py-6">
          <h1 class="text-gray-800 dark:text-white font-bold mb-4">Synopsis</h1>
          <p class="text-gray-800 dark:text-white text-sm">
            {{ data.synopsis != null ? data.synopsis : "N/A" }}
          </p>
        </div>

        <!-- trailer -->
        <div v-if="data.trailer.embed_url != null" class="py-6 border-orange-500 border-b-2">
          <h1 class="text-gray-800 dark:text-white font-bold mb-4">Watch Trailer</h1>
          <iframe
            class="w-full h-[300px] md:h-[600px]"
            :src="data.trailer.embed_url.replace('&autoplay=1', '')"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Related -->
        <div v-if="relatedAnime.length != 0" class="py-6 grid grid-cols-2 grid-flow-row gap-y-2 gap-x-4">
          <h1 class="text-gray-800 dark:text-white font-bold mb-2 col-span-2">Related Anime</h1>
          <div v-for="related in relatedAnime">
            <a :href="'/anime/' + related.anime.mal_id" class="group">
            <div>
                <span class="uppercase font-bold text-sm text-orange-500">
                    {{ related.relation }}
                </span>
                <h1 class="w-full whitespace-nowrap overflow-hidden overflow-ellipsis font-bold text-xl text-gray-800 dark:text-white mb-4 group-hover:text-orange-500 transition-all">{{related.anime.title}}</h1>
            </div>
              <img :src="related.anime.images.jpg.large_image_url" 
              class="w-full h-[200px] object-cover object-center rounded-md border-2 border-transparent group-hover:border-orange-500 transition-all">
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import axios from "axios";
import { ref } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute();

const animeID = route.params.id;
const requestByID = "https://api.jikan.moe/v4/anime/";

async function getAnime() {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime/" + animeID + "/full");
    return response.data.data;
  } catch (error) {
    return error;
  }
}

async function getAnimeByID(id) {
  try {
    const response = await axios.get(requestByID + id);
    return response.data.data;
  } catch (error) {
    return error;
  }
}

async function getRelations(anime) {
  let related = [];
  for (var i in anime.relations) {
    if (
      anime.relations[i].relation === "Prequel" ||
      anime.relations[i].relation === "Sequel"
    ) {
      related.push({anime: await getAnimeByID(anime.relations[i].entry[0].mal_id), relation: anime.relations[i].relation});
    }
  }
  return related;
}

//current page anime data
const data = await getAnime();

//get related anime of the current anime
const relatedAnime = await getRelations(data);
console.log(relatedAnime);

//air stuffs
let air;
if (data.status === "Not yet aired") {
  air = "Airs on:";
} else if (data.status === "Finished Airing") {
  air = "Aired:";
} else if (data.status === "Currently Airing") {
  air = "Airing:";
} else {
  air = "Aired:";
}

const airedFrom = moment(new Date(data.aired.from)).format("MMM DD YYYY");
const airedTo = moment(new Date(data.aired.to)).format("MMM DD YYYY");
</script>
