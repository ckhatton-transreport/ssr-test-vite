<template>
  <div class="p-4 md:p-16">
    <Header />
    <slot />
    <LazyFooter />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import Header from './Header.vue';
const LazyFooter = defineAsyncComponent(() =>
  import('./Footer.vue')
);
</script>
