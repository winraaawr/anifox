<template>
    <RouterLink :to="link">
        <div class="flex flex-col">
            <div class="mb-2">
                <img :src="poster" class="h-[230px] md:h-[300px] w-full object-cover rounded-t-md">
                <div
                    class="py-2 px-2 w-full flex flex-row items-center justify-between space-x-2 bg-gray-800 rounded-b-md">
                    <div class="flex flex-row items-center space-x-3">
                        <span class=" text-white/80 text-[10px] md:border-2 md:border-rose-500 md:px-2 md:py-0.5 md:rounded-md text-rose-500  md:text-xs">{{ episodes === null ? 'N/A' : episodes }}
                            EP</span>
                        <span class=" text-white/80 text-[10px] md:border-2 md:border-purple-500 md:px-2 md:py-0.5 md:rounded-md text-purple-500 uppercase md:text-xs">{{ format }}</span>
                    </div>
                    <span class="flex flex-row text-green-500 justify-center items-center text-[10px] md:text-xs">
                        <EmoticonHappyIcon class="mr-1 h-[12px] md:h-[16px] w-auto" />
                        <span class="">{{ rating }}</span>
                    </span> 
                </div>
            </div>
            <h1 class="text-gray-800 dark:text-white font-bold text-xs md:text-base mb-1">{{ titleString }}</h1>
        </div>
    </RouterLink>
</template>

<script setup>
import { computed, ref } from 'vue';
import EmoticonHappyIcon from '~icons/mdi/emoticon-happy'

const titleString = props.title.length > 36 ? props.title.substring(0, 35) + ".." : props.title

const props = defineProps({
    title: String,
    episodes: { type: Number, },
    format: String,
    rating: Number,
    poster: String,
    link: String
})
</script>
