<template>
  <div class="mb-4 p-4">
    <div class="flex flex-wrap justify-center">
      <img
        class="w-96 h-93 lg:mr-6 mb-6"
        src="/img/kitten.jpeg"
        alt="Kitten photo"
      >
      <div>
        <h2 class="text-2xl">
          Cat Facts 🐈
        </h2>
        <p class="my-4">
          This grabs cat facts from an API <BaseLink
            href="https://catfact.ninja/#/Facts/getFacts"
            target="_blank"
          >
            (https://catfact.ninja/#/Facts/getFacts)
          </BaseLink> via fetch.
        </p>
        <p
          v-if="CatFactsStore.maxLength !== -1"
          class="my-4"
        >
          The facts have been limited to a fact length of {{ CatFactsStore.maxLength }}.
        </p>
      </div>
    </div>
    <ToolPagination />
    <ToolFacts />
  </div>
</template>

<script setup lang="ts">
import BaseLink from '/components/BaseLink.vue';
import ToolPagination from '/components/ToolPagination.vue';
import ToolFacts from '/components/ToolFacts.vue';

import { onBeforeMount } from 'vue';
import { CatFactsStore } from '../composables/CatFactsStore';

onBeforeMount((): void => {
  CatFactsStore.getFacts();
});
</script>
