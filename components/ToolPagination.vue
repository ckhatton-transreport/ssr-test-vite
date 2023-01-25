<template>
  <div class="pagination flex justify-center">
    <button
      class="previous"
      :disabled="isPreviousDisabled"
      @click="loadPreviousPage"
    >
      Previous
    </button>
    <div class="index">
      <span>{{ CatFactsStore.currentPage }}</span>&nbsp;of&nbsp;<span>{{ CatFactsStore.lastPage }}</span>
    </div>
    <button
      class="next"
      :disabled="isNextDisabled"
      @click="loadNextPage"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CatFactsStore } from '../composables/CatFactsStore';

const isPreviousDisabled = computed((): boolean => CatFactsStore.currentPage === 1);
const isNextDisabled = computed((): boolean => CatFactsStore.currentPage === CatFactsStore.lastPage);

function loadNextPage(): void {
  CatFactsStore.currentPage++;
  CatFactsStore.getFacts();
}

function loadPreviousPage(): void {
  CatFactsStore.currentPage--;
  CatFactsStore.getFacts();
}
</script>

<style lang="sass" scoped>
.pagination
  button
    @apply bg-gray-300 py-2 px-4

    &:not([disabled])
      @apply cursor-pointer hover:bg-gray-400 hover:shadow-lg

    &.previous
      @apply rounded-l

    &.next
      @apply rounded-r

  .index
    @apply flex justify-center items-center bg-gray-300 py-2 px-4
</style>
