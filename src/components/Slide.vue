<template>
  <RouterLink :to="'/anime/' + id" class="absolute h-full w-full after:absolute after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:to-80% after:to-zinc-950 md:after:bg-none" :id="'slide'+index">
    <img v-if="poster != null" :src="poster" class="rounded-md absolute right-0 w-full md:w-[55%] h-full overflow-y-hidden object-center object-cover">
    <div class="z-20 absolute bottom-2 left-3 flex flex-col">
      <h1 class="text-white md:text-gray-800 dark:text-white  w-[26ch] overflow-hidden overflow-ellipsis whitespace-nowrap text-xl md:text-3xl font-bold">
        {{ title }}
      </h1>
      <span class="text-white text-sm md:text-gray-800 dark:text-white w-full line-clamp-2 overflow-hidden text-ellipsis md:h-auto md:max-h-[100px] md:w-[40ch]">
        {{ synopsis }}
      </span>
    </div>
  </RouterLink>

  <!-- class="absolute border-2 overflow-hidden h-full w-full bg-gradient-to-l from-transparent to-gray-800/60 md:rounded-md" -->
</template>

<script async setup>
const props = defineProps({
  index: Number,
  id: Number,
  title: String,
  synopsis: String,
  url: String,
  poster: String,
});
</script>
