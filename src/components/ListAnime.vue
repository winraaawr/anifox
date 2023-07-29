<template>
  <!-- list per anime component-->
  <div
    class="flex flex-row p-1 items-start w-full h-[100px] max-h-[120px] rounded-md mb-4"
  >
    <!-- <h1 class="flex flex-row items-center justify-center  h-full w-[70px] text-center text-3xl font-extrabold font-outline" :class="i === 0 ? 'text-indigo-500 text-5xl' : i === 1 ? 'text-rose-500 text-5xl' : i=== 2 ? 'text-amber-500 text-5xl' : 'text-gray-800 dark:text-white' ">{{ i + 1 }}</h1> -->
    <img
      :src="poster"
      class="rounded-md h-full object-cover object-top mr-2"
    />
    <div class="flex flex-col mb-1 w-[80%]">
      <h1
        class="text-gray-800 dark:text-white text-lg md:text-xl text-ellipsis overflow-hidden line-clamp-1 font-bold"
      >
        {{ title }}
      </h1>
      <div class="flex flex-row mb-2">
        <span
          class="text-xs text-white bg-rose-500 rounded-sm w-auto px-2 py-0.5 mr-2"
          >{{
            episodes != null ? episodes + " EP" : "N/A EP"
          }}</span
        >
        <span
          class="text-xs text-white bg-emerald-500 rounded-sm w-auto px-2 py-0.5"
          >{{ type }}</span
        >
      </div>
      <div class="flex flex-row w-[] overflow-hidden">
        <span
          v-for="genre in genres"
          class="text-[10px] text-amber-500 border-2 border-amber-500 rounded-sm w-auto px-1 py-0.5 mb-2 mr-2"
          >{{ genre.name }}</span
        >
      </div>
    </div>
  </div>
  <!-- list per anime component end -->
</template>

<script async setup>
const props = defineProps({
    genres: Object,
    type: String,
    episodes: Number,
    title: String,
    poster: String
})


</script>
