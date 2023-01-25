<template>
  <div class="max-w-7xl mx-auto">
    <CatFacts />
  </div>
</template>

<script>
export default {
  name: 'PagesFacts'
}
</script>

<script setup>
import CatFacts from '/components/CatFacts.vue';

import { CatFactsStore } from '/components/CatFactsStore';

CatFactsStore.maxLength = -1;
</script>
