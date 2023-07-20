<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-0">
        <div class="flex flex-col space-y-2">
            <span class="font-semibold text-gray-800 dark:text-white">Search</span>
            <input type="text" id="search" name="search" placeholder="Search"
                class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm">
        </div>
        <div class="flex flex-col space-y-2">
            <span class="font-semibold text-gray-800 dark:text-white">Genres</span>
            <select id="genre" name="genre" placeholder="Select Genre"
                class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm">
                <option v-for="n, i in genres">{{ genres[i].name }}</option>
            </select>
        </div>
        <div class="flex flex-col space-y-2">
            <span class="font-semibold text-gray-800 dark:text-white">Year</span>
            <select id="year" name="year"
                class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm">
                <option v-for="(year, y) in yearList">
                    {{ year }}
                </option>
            </select>
        </div>
        <div class="flex flex-col space-y-2">
            <span class="font-semibold text-gray-800 dark:text-white">Season</span>
            <select id="season" name="season"
                class="px-2 py-1 md:py-1.5 border-2 dark:border-0 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white border-gray-200 rounded-md text-sm">
                <option value="">Winter</option>
                <option value="">Spring</option>
                <option value="">Summer</option>
                <option value="">Fall</option>
            </select>

        </div>
    </div>
    <div class="flex flex-row">
        Search & Filter Values
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const yearList = ref([])


function getYearList() {
    const startYear = 1940
    const endYear = new Date().getFullYear() + 1;

    for (let i = endYear; i >= startYear; i--) {
        yearList.value = [...yearList.value, i]
    }
}


async function getGenres() {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/genres/anime')
        return response.data.data
    } catch (error) {
        return error
    }
}

onMounted(() => {
    getYearList()
})

const genres = await getGenres()
console.log(genres)

</script>
