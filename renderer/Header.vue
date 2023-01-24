<template>
  <div class="header">
    <BaseLink href="/" class="text-2xl">Vite Plugin SSR</BaseLink>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader'
}
</script>

<script setup>
import BaseLink from '/components/BaseLink.vue';
</script>

<style lang="sass">
.header
  @apply bg-aquamarine mb-4 p-8 rounded-lg shadow-lg font-extrabold text-white tracking-wide flex flex-wrap justify-between items-center
</style>
