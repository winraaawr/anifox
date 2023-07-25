<template>
  <RouterLink :to="link" class="group">
    <div class="flex flex-col">
      <div
        class="mb-2 rounded-md border-2 border-transparent group-hover:border-orange-500 transition-all"
      >
        <img
          :src="poster"
          class="h-[230px] md:h-[300px] w-full object-cover rounded-t-md"
        />
        <div
          class="py-2 px-2 w-full flex flex-row items-center justify-between space-x-2 bg-gray-800 rounded-b-md"
        >
          <div class="flex flex-row items-center space-x-2">
            <span
              v-if="episodes != null"
              class="text-white/80 text-[10px] md:border-2 md:border-rose-500 md:px-1 md:py-0.5 md:rounded-md text-rose-500 md:text-xs"
              >{{ episodes === null ? "N/A" : episodes }} EP
            </span>
            <span
              v-if="episodeTitle != null && episodeNumber != null"
              class="text-white/80 text-[10px] md:border-2 md:border-rose-500 md:px-1 md:py-0.5 md:rounded-md text-rose-500 md:text-xs"
              >EP {{ episodeNumber }}
            </span>
            <span
              v-if="format"
              class="text-white/80 text-[10px] md:border-2 md:border-purple-500 md:px-1 md:py-0.5 md:rounded-md text-purple-500 uppercase md:text-xs"
              >{{ format }}
            </span>
            <span
              v-if="year || season"
              class="text-white/80 text-[10px] md:border-2 md:border-green-500 md:px-1 md:py-0.5 md:rounded-md text-green-500 uppercase md:text-xs"
              >{{ year + " " + season }}
            </span>
          </div>
          <span
            v-if="rating"
            class="flex flex-row text-green-500 justify-center items-center text-[10px] md:text-xs"
          >
            <EmoticonHappyIcon class="mr-1 h-[12px] md:h-[16px] w-auto" />
            <span class="">{{ rating }}</span>
          </span>
        </div>
      </div>
    </div>
    <h1
      class="text-gray-800 line-clamp-2 dark:text-white font-bold text-xs md:text-base mb-1 group-hover:text-orange-500 transition-all"
    >
      {{ title }}
    </h1>
  </RouterLink>
</template>

<script setup>
import { computed, ref } from "vue";
import EmoticonHappyIcon from "~icons/mdi/emoticon-happy";

const props = defineProps({
  title: String,
  episodes: { type: Number },
  format: String,
  rating: Number,
  poster: String,
  link: String,
  episodeTitle: String,
  episodeNumber: Number,
  season: String,
  year: Number,
});
</script>
