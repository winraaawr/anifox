<template>
  <!-- list per anime component-->
  <RouterLink :to="'/anime/' + id">
    <div class="flex flex-row p-1 items-start w-full h-[80px] rounded-md mb-4 hover:bg-slate-100 dark:hover:bg-gray-800 border-2 border-transparent group hover:border-orange-500 dark:hover:border-orange-500 transition-all">
      <!-- <h1 class="flex flex-row items-center justify-center  h-full w-[70px] text-center text-3xl font-extrabold font-outline" :class="i === 0 ? 'text-indigo-500 text-5xl' : i === 1 ? 'text-rose-500 text-5xl' : i=== 2 ? 'text-amber-500 text-5xl' : 'text-gray-800 dark:text-white' ">{{ i + 1 }}</h1> -->
      <img
        :src="poster"
        class="rounded-md h-full object-cover object-top mr-2"
      />
      <div class="flex flex-col mb-1 w-full">
        <h1
          class="text-gray-800 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-500 text-base text-ellipsis overflow-hidden line-clamp-1 font-bold transition-all"
        >
          {{ title }}
        </h1>
        <div class="flex flex-row mb-2">
          <span v-if="episodes != null"
            class="text-xs text-white bg-rose-500 rounded-sm w-auto px-2 py-0.5 mr-2"
            >{{ episodes != null ? episodes + " EP" : "N/A EP" }}</span
          >
          <span
            class="text-xs text-white bg-indigo-500 rounded-sm w-auto px-2 py-0.5 mr-2"
            >{{ type }}</span
          >
          <span v-if="season != null || year !=null"
            class="capitalize text-xs text-white bg-emerald-500 rounded-sm w-auto px-2 py-0.5 mr-2"
            >{{ season != null ? season + " " : '' }}{{ year != null ? year : '' }}</span
          >
        </div>
      </div>
    </div>
  </RouterLink>
  <!-- list per anime component end -->
</template>

<script async setup>
const props = defineProps({
  id: Number,
  genres: Object,
  type: String,
  episodes: Number,
  title: String,
  poster: String,
  year: String,
  season: String,
});
</script>
