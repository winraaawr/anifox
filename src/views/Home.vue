<template>
  <main class="bg-slate-100 dark:bg-zinc-950">
    <div class="md:container flex flex-col min-h-screen h-auto w-full pt-[80px] md:pt-[100px] space-y-4">
      <Suspense>
        <template #default>
          <Carousel/>
        </template>
        <template #fallback>
          <div class="flex flex-row w-full h-[260px] md:h-[400px] rounded-md bg-gray-700 animate-pulse">

          </div>
        </template>
      </Suspense>
      
      <!-- Search and Filter -->
      <Suspense>
        <template #default>
          <SearchFilter />
        </template>
        <template #fallback>
          <span class="text-white">Loading...</span>
        </template>
      </Suspense>


      <!-- Top Section -->
      <section>
        <Suspense>
          <template #default>
            <Top />
          </template>
          <template #fallback>
            <CardSectionSkeleton section="Top Anime" />
          </template>
        </Suspense>
      </section>

      <!-- Recent Episode Update Section -->
      <section>
        <Suspense>
          <template #default>
            <Popular />
          </template>
          <template #fallback>
            <CardSectionSkeleton section="Most Popular" />
            
          </template>
        </Suspense>
      </section>

      <!-- Upcoming Section -->
      <section>
        <Suspense>
          <template #default>
            <Upcoming />
          </template>
          <template #fallback>
            <CardSectionSkeleton section="Upcoming Anime" />
          </template>
        </Suspense>
      </section>

    </div>
  </main>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import SearchFilter from '../components/SearchFilter.vue'
import Top from '../components/Top.vue';
import Popular from '../components/Popular.vue';
import Upcoming from '../components/Upcoming.vue';
import CardSectionSkeleton from '../components/CardSectionSkeleton.vue';

</script>
