<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-0">
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Search</span>
      <input
        v-model="search"
        @keyup="searchQuery"
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
        @change="searchQuery"
        v-model="genre"
        id="genre"
        name="genre"
        placeholder="Select Genre"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      >
        <option :value="null" selected>Any</option>
        <option
          v-for="(n, i) in genres"
          :value="{ id: genres[i].mal_id, name: genres[i].name }"
        >
          {{ genres[i].name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Year</span>
      <select
        @change="searchQuery"
        v-model="year"
        id="year"
        name="year"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      >
        <option :value="null" selected="selected">Any</option>
        <option v-for="(year, y) in yearList">
          {{ year }}
        </option>
      </select>
    </div>
    <div class="flex flex-col space-y-2">
      <span class="font-semibold text-gray-800 dark:text-white">Status</span>
      <select
        v-model="status"
        @change="searchQuery"
        id="status"
        name="status"
        class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm"
      >
        <option :value="null" selected="selected">Any</option>
        <option value="airing">Airing</option>
        <option value="complete">Complete</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  </div>
  <div class="flex flex-col md:flex-row md:justify-between px-2 md:px-0">
    <div class="flex flex-wrap md:flex-row">
      <span
        v-if="search"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Search: {{ search }}
        <button @click="clearSearch()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
      <span
        v-if="genre && genre != ''"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Genre: {{ genre.name }}
        <button @click="clearGenre()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
      <span
        v-if="year && year != ''"
        class="flex flex-row items-center rounded-md text-xs text-white bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Year: {{ year }}
        <button @click="clearYear()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
      <span
        v-if="status && status != ''"
        class="flex flex-row items-center rounded-md text-xs text-white capitalize bg-cyan-500 px-2 py-0.5 mb-2 mr-2"
      >
        Status: {{ status }}
        <button @click="clearStatus()" class="ml-2 text-gray-500">
          <CloseIcon />
        </button>
      </span>
    </div>
    <div class="flex flex-row">
      <button
        @click="clearAllFilter()"
        v-if="
          (year && year != '') ||
          (status && status != '') ||
          (genre && genre != '') ||
          search
        "
        class="text-gray-400 dark:text-white/50 text-xs"
      >
        Clear All
      </button>
    </div>
  </div>
  <div v-if="query != null">
    <h1
      class="text-gray-800 dark:text-white font-bold col-span-2 md:col-span-6"
    >
      Result
    </h1>
    <Suspense>
      <template #default>
        <Search :query="query" />
      </template>
      <template #fallback>
        <CardSectionSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import CloseIcon from "~icons/mdi/close";
import Search from "./Search.vue";
import CardSectionSkeleton from "./CardSectionSkeleton.vue";

const yearList = ref([]);
const search = ref(null);
const genre = ref(null);
const year = ref(null);
const status = ref(null);
const isSearching = ref(false);

const emit = defineEmits(['searching'])

const query = ref();
var keyTimer;

function searchQuery() {
  let holdQuery = new URL("https://api.jikan.moe/v4/anime?");
  isSearching.value = true;
  query.value = null;

  clearTimeout(keyTimer);
  keyTimer = setTimeout(() => {
    emit('searching', isSearching.value)
    //append all parameters
    if (search.value != null && search.value != "")
      holdQuery.searchParams.append("q", search.value);
    if (genre.value != null)
      holdQuery.searchParams.append("genres", genre.value.id);
    if (year.value != null)
      holdQuery.searchParams.append("start_date", `${year.value}-01-01`);
    if (status.value != null)
      holdQuery.searchParams.append("status", status.value);

    if (
      (search.value === null || search.value === "") &&
      (genre.value === null || genre.value === "") &&
      (year.value === null || year.value === "") &&
      (status.value === null || status.value === "")
    ) {
      query.value = null;
      isSearching.value = false;
      emit('searching', isSearching.value)
    } else {
      //holdQuery.searchParams.append("order_by", "popularity");
      query.value = holdQuery.href;
    }
  }, 300);
}

function clearSearch() {
  search.value = null;
  searchQuery();
}

function clearGenre() {
  genre.value = null;
  searchQuery();
}

function clearYear() {
  year.value = null;
  searchQuery();
}
function clearStatus() {
  status.value = null;
  searchQuery();
}

function clearAllFilter() {
  clearSearch();
  clearGenre();
  clearYear();
  clearStatus();
  isSearching.value = false;
  emit('searching', isSearching.value)
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
    console.log("Fetching Genres");
    const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
    return await response.data.data;
  } catch (error) {
    return error;
  }
}

onMounted(() => {
  getYearList();
});

const genres = await getGenres();
</script>
