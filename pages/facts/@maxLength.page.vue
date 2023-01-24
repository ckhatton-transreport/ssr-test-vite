<template>
  <div class="max-w-7xl mx-auto">
    <CatFacts :max-length="maxLength" />
  </div>
</template>

<script>
export default {
  name: 'PagesFactsMaxLength'
}
</script>

<script setup>
import CatFacts from '/components/CatFacts.vue'

import { usePageContext } from '/renderer/usePageContext'

const maxLength = Number(usePageContext().maxLength) || null;
</script>
