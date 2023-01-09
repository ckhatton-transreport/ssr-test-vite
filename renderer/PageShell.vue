<template>
  <div class="p-4 md:p-16">
    <Header />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
</script>
