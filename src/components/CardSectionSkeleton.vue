<template>
    <div class="flex flex-col px-2 md:px-0">
        <h1 class="text-xl md:text-2xl font-bold text-orange-600 uppercase mb-6">{{ section }}</h1>
        <div class="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 w-full">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    </div>
</template>

<script setup>
import CardSkeleton from './CardSkeleton.vue'
defineProps({
    section: String
})
</script>
