<template>
  <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
    <Card
      v-if="data != null"
      v-for="anime in data"
      :title="anime.title"
      :episodes="anime.episodes"
      :format="anime.type"
      :rating="anime.score"
      :poster="anime.images.jpg.large_image_url"
      :link="'/anime/' + anime.mal_id"
    />
    <h1 v-if="data === null || data.length === 0" class="col-span-2 md:col-span-6 py-12 italic text-gray-800/50 dark:text-white/80 text-center">
        No matches found
    </h1>
  </div>
</template>

<script async setup>
import { ref, watch } from "vue";
import axios from "axios";
import Card from "./Card.vue";

const data = ref({});
const status = ref()
const isSearching = ref(false);

const props = defineProps({
  query: { type: String, required: true },
});

async function getResult() {
  try {
    const response = await axios.get(props.query);
    status.value = response.status
    return await response.data.data;
  } catch (error) {
    return error;
  }
}

data.value = await getResult();
</script>
