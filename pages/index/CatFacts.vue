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
        class="loading absolute top-12 bg-white rounded-lg shadow-lg p-4 z-10 transition-opacity duration-300"
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
<script>
export default {
  name: "CatFacts",

  data() {
    return {
      facts: {},
      currentPage: 1,
      lastPage: 1,
      loading: false,
    };
  },
  computed: {
    isPreviousDisabled() {
      return this.currentPage === 1;
    },
    isNextDisabled() {
      return this.currentPage === this.lastPage;
    },
  },

  mounted() {
    this.getFacts(this.currentPage);
  },

  methods: {
    async getFacts() {
      try {
        this.loading = true;
        const response = await fetch(
          `https://catfact.ninja/facts?page=${this.currentPage}`,
          {
            method: "GET",
          }
        )
        .then(response => response.json());
        this.facts = response.data;
        this.lastPage = response.last_page;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },

    loadNextPage() {
      this.currentPage++;
      this.getFacts();
    },

    loadPreviousPage() {
      this.currentPage--;
      this.getFacts();
    },
  },
};
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
