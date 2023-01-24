<template>
  <div class="footer">
    <h2 class="text-2xl">A simple footer, but lazy loaded.</h2>
  </div>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="sass">
.footer
  @apply bg-aquamarine mb-4 p-8 rounded-lg shadow-lg font-extrabold text-white tracking-wide flex flex-wrap justify-between items-center
</style>
