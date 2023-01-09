<template>
  <div class="mb-4 p-4">
    <h2 class="text-2xl">Cat Facts 🐈</h2>
    <p class="my-4">This grabs cat facts from an API (<a href="https://catfact.ninja/#/Facts/getFacts" target="_blank">https://catfact.ninja/#/Facts/getFacts</a>) via fetch.</p>
    <section class="flex flex-wrap">
      <div v-for="(catFact, index) in facts" class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4" :key="catFact.fact.split(' ')[0] + index">
        <div class="bg-white rounded-lg shadow-lg m-4 p-4">
          <h3>{{ catFact.fact }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CatFacts',
  data () {
    return {
      facts: []
    }
  },
  
  methods: {
    async getFacts(event) {
      try {
        const response = await fetch( 'https://catfact.ninja/facts', {
          method: 'GET'
        })
        .then(response => response.json())
        .then(responseData => responseData.data);
        this.facts = response;
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.getFacts();
  },
}
</script>
