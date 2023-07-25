<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-0">
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Search</span>
      <input
        v-model="search"
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      />
    </div>
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Genres</span>
      <select
        v-model="genre"
        id="genre"
        name="genre"
        placeholder="Select Genre"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      >
        <option selected>Any</option>
        <option v-for="(n, i) in genres">{{ genres[i].name }}</option>
      </select>
    </div>
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Year</span>
      <select
        v-model="year"
        id="year"
        name="year"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      >
        <option selected>Any</option>
        <option v-for="(year, y) in yearList">
          {{ year }}
        </option>
      </select>
    </div>
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Season</span>
      <select
        v-model="season"
        id="season"
        name="season"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      >
        <option selected>Any</option>
        <option>Winter</option>
        <option>Spring</option>
        <option>Summer</option>
        <option>Fall</option>
      </select>
    </div>
  </div>
  <div class="flex flex-col md:flex-row md:justify-between px-2 md:px-0">
    <div class="flex flex-wrap md:flex-row">
      <span
        v-if="search"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2 "
      >
        Search: {{ search }}
        <button @click="clearSearch()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
      <span
        v-if="genre && genre != 'Any'"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Genre: {{ genre }}
        <button @click="clearGenre()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
      <span
        v-if="year && year != 'Any'"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Year: {{ year }}
        <button @click="clearYear()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
      <span
        v-if="season && season != 'Any'"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Season: {{ season }}
        <button @click="clearSeason()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
    </div>
    <div class="flex flex-row">
      <button
        @click="clearAllFilter()"
        v-if="
          (year && year != 'Any') ||
          (season && season != 'Any') ||
          (genre && genre != 'Any') ||
          search
        "
        class="text-gray-400 dark:text-white/50 text-xs"
      >
        Clear All
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CloseIcon from '~icons/mdi/close';

const yearList = ref([]);
const search = ref();
const genre = ref();
const year = ref();
const season = ref();


function clearSearch() {
  search.value = "";
}

function clearGenre() {
  genre.value = "Any";
}

function clearYear() {
  year.value = "Any";
}
function clearSeason() {
  season.value = "Any";
}

function clearAllFilter() {
  clearSearch();
  clearGenre();
  clearYear();
  clearSeason();
}

function getYearList() {
  const startYear = 1940;
  const endYear = new Date().getFullYear() + 1;

  for (let i = endYear; i >= startYear; i--) {
    yearList.value = [...yearList.value, i];
  }
}

async function getGenres() {
  try {
    console.log('Fetching Genres')
    const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
    return (await response.data.data)
  } catch (error) {
    return error;
  }
}

onMounted(() => {
  getYearList();
});

const genres = await getGenres();
</script>
