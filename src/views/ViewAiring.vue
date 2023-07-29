<template>
  <Suspense>
    <template #default>
      <AiringPage />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>


<script setup>
  import AiringPage from '../components/AiringPage.vue';
  import Loading from '../components/Loading.vue';
</script>