<template>
  <div class="max-w-7xl mx-auto">
    <BaseCatFacts />
  </div>
</template>

<script>
export default {
  name: 'PagesFactsMaxLength'
}
</script>

<script setup>
import BaseCatFacts from '/components/BaseCatFacts.vue';

import { usePageContext } from '/renderer/usePageContext';
import { CatFactsStore } from '/composables/CatFactsStore';

CatFactsStore.maxLength = Number(usePageContext().maxLength) || -1;
</script>
