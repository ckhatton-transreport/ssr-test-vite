<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-wrap justify-center items-center">
      <BaseLink
        class="button"
        href="/facts/123"
      >
        Facts length 123
      </BaseLink>
      <BaseLink
        class="button"
        href="/facts/30"
      >
        Facts length 30
      </BaseLink>
    </div>

    <BaseCatFacts />
  </div>
</template>

<script>
export default {
  name: 'PagesHome'
}
</script>

<script setup>
import BaseLink from '/components/BaseLink.vue';
import BaseCatFacts from '/components/BaseCatFacts.vue';

import { CatFactsStore } from '/composables/CatFactsStore';

CatFactsStore.maxLength = -1;
</script>

<style lang="sass">
  .button
    @apply block px-6 py-3 m-2 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200 text-center
</style>
