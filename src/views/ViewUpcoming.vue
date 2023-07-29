<template>
    <Suspense>
      <template #default>
        <UpcomingPage />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </template>
  
  
  <script setup>
    import UpcomingPage from '../components/UpcomingPage.vue';
    import Loading from '../components/Loading.vue';
  </script>