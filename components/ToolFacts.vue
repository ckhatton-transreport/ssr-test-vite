<template>
  <section class="relative flex justify-center">
    <div
      :class="CatFactsStore.loading ? 'opacity-100' : 'opacity-0'"
      class="loading"
    >
      <span class="text-xl">Loading</span>
    </div>
    <div
      :class="{ 'opacity-40': CatFactsStore.loading }"
      class="facts flex flex-wrap"
    >
      <div
        v-for="(catFact, index) in CatFactsStore.facts"
        :key="catFact.fact.split(' ')[0] + index"
        class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4"
      >
        <div class="bg-white rounded-lg shadow-lg m-4 p-4">
          <h3>{{ catFact.fact }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CatFactsStore } from '../composables/CatFactsStore';
</script>

<style lang="sass">
.loading
  @apply absolute top-12 bg-white rounded-lg shadow-lg p-4 z-10 transition-opacity duration-300
</style>
