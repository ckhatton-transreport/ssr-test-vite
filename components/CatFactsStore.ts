import { reactive } from 'vue';

export const CatFactsStore = reactive({
  currentPage: 1,
  lastPage: 1,
  facts: [],
  loading: false,
  maxLength: -1,
  async getFacts() {
    try {
      this.loading = true;
      const maxLengthQuery = (this.maxLength !== -1 ? `max_length=${this.maxLength}&` : '');
      const response: { data: [], last_page: number } = await fetch(
        `https://catfact.ninja/facts?${maxLengthQuery}page=${CatFactsStore.currentPage}`,
        {
          method: "GET",
        }
      )
      .then(response => response.json());
      this.facts = response.data;
      CatFactsStore.lastPage = response.last_page;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log(error);
    }
  }
})
