<template>
    <Suspense>
      <template #default>
        <PopularPage />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </template>
  
  
  <script setup>
    import PopularPage from '../components/PopularPage.vue';
    import Loading from '../components/Loading.vue';
  </script>