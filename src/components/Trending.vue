<template>
    <div class="flex flex-col px-2 md:px-0">
        <h1 class="text-xl md:text-2xl font-bold text-orange-600 uppercase mb-6">Top Anime</h1>
        <div class="grid grid-flow-row grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6 w-full">
            <Card v-for="n,i in 6"
            :title="data[i].title" :episodes="data[i].episodes" :format="data[i].type" :rating="data[i].score" :poster="data[i].images.jpg.large_image_url" :link="'/anime/' + data[i].mal_id" /> 
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import Card from './Card.vue';

async function getTrending() {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime')
        return response.data.data
    } catch (error) {
        return error
    }
}

const data = await getTrending()
console.log(data)
</script>