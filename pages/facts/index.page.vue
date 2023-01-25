<template>
  <div class="max-w-7xl mx-auto">
    <BaseCatFacts />
  </div>
</template>

<script>
export default {
  name: 'PagesFacts'
}
</script>

<script setup>
import BaseCatFacts from '/components/BaseCatFacts.vue';

import { CatFactsStore } from '/composables/CatFactsStore';

CatFactsStore.maxLength = -1;
</script>
