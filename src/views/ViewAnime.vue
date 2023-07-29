<template>
  <Suspense>
    <template #default>
      <Anime />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script setup>
import Anime from "../components/Anime.vue";
import Loading from "../components/Loading.vue";

</script>
