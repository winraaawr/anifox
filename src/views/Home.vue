<template>
  <main class="bg-slate-100 dark:bg-zinc-950">
    <div class="md:container flex flex-col min-h-screen h-auto w-full pt-[80px] md:pt-[100px] space-y-6">
      <Carousel />

      <!-- Search and Filter -->
      <Suspense>
        <template #default>
          <SearchFilter />
        </template>
        <template #fallback>
          <span class="text-white">Loading...</span>
        </template>
      </Suspense>


      <!-- Trending Now Section -->
      <section>
        <Suspense>
          <template #default>
            <Trending />
          </template>
          <template #fallback>
            <CardSectionSkeleton section="Top Anime" />
          </template>
        </Suspense>
      </section>

    </div>
  </main>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import SearchFilter from '../components/SearchFilter.vue'
import Trending from '../components/Trending.vue';
import CardSectionSkeleton from '../components/CardSectionSkeleton.vue';

</script>
