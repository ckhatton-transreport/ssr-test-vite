<template>
  <div class="mb-4 p-4">
    <h2 class="text-2xl">
      Cat Facts 🐈
    </h2>
    <p class="my-4">
      This grabs cat facts from an API (<a
        href="https://catfact.ninja/#/Facts/getFacts"
        target="_blank"
      >https://catfact.ninja/#/Facts/getFacts</a>) via fetch.
    </p>
    <p
      v-if="maxLength"
      class="my-4"
    >
      The facts have been limited to a fact length of {{ maxLength }}.
    </p>
    <div class="pagination flex justify-center">
      <button
        class="previous"
        :disabled="isPreviousDisabled"
        @click="loadPreviousPage"
      >
        Previous
      </button>
      <div class="index">
        <span>{{ currentPage }}</span>&nbsp;of&nbsp;<span>{{ lastPage }}</span>
      </div>
      <button
        class="next"
        :disabled="isNextDisabled"
        @click="loadNextPage"
      >
        Next
      </button>
    </div>
    <section class="relative flex justify-center">
      <div
        :class="loading ? 'opacity-100' : 'opacity-0'"
        class="loading"
      >
        <span class="text-xl">Loading</span>
      </div>
      <div
        :class="{ 'opacity-40': loading }"
        class="facts flex flex-wrap"
      >
        <div
          v-for="(catFact, index) in facts"
          :key="catFact.fact.split(' ')[0] + index"
          class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4"
        >
          <div class="bg-white rounded-lg shadow-lg m-4 p-4">
            <h3>{{ catFact.fact }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';

const props = defineProps({
  maxLength: {
    type: Number,
    default: null
  }
})

const facts = ref([]),
      currentPage = ref(1),
      lastPage = ref(1),
      loading = ref(false);

const isPreviousDisabled = computed(() => currentPage.value === 1);
const isNextDisabled = computed(() => currentPage.value === lastPage.value);

onBeforeMount(() => {
  getFacts(currentPage);
});

async function getFacts() {
  try {
    loading.value = true;
    const maxLengthQuery = props.maxLength ? `max_length=${props.maxLength}&` : '';
    const response = await fetch(
      `https://catfact.ninja/facts?${maxLengthQuery}page=${currentPage.value}`,
      {
        method: "GET",
      }
    )
    .then(response => response.json());
    facts.value = response.data;
    lastPage.value = response.last_page;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
}

function loadNextPage() {
  currentPage.value++;
  getFacts();
}

function loadPreviousPage() {
  currentPage.value--;
  getFacts();
}
</script>

<style lang="sass">
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

.loading
  @apply absolute top-12 bg-white rounded-lg shadow-lg p-4 z-10 transition-opacity duration-300
</style>
