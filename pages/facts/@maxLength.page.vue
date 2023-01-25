<template>
  <div class="max-w-7xl mx-auto">
    <CatFacts />
  </div>
</template>

<script>
export default {
  name: 'PagesFactsMaxLength'
}
</script>

<script setup>
import CatFacts from '/components/CatFacts.vue';

import { usePageContext } from '/renderer/usePageContext';
import { CatFactsStore } from '/components/CatFactsStore';

CatFactsStore.maxLength = Number(usePageContext().maxLength) || -1;
</script>
