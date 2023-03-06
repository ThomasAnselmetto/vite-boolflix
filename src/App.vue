<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store";
// divido import da export per chiarezza
export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },
  created() {
    axios
      .get(
        `${store.baseUri}/search/movie?api_key=${store.apiKey}&query=lo+strappo`
      )
      .then((MoviesResponse) => {
        store.films = MoviesResponse.data.results;
        console.log(store.films[0]);
      });
    axios
      .get(`${store.baseUri}/search/tv?api_key=${store.apiKey}&query=stranger`)
      .then((SeriesResponse) => {
        store.series = SeriesResponse.data.results;
        console.log(store.series[0]);
      });
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
    <main>
      <h1>{{ store.films[0].title }}</h1>
      <hr />
      <h1>{{ store.series[0].name }}</h1>
      <AppMain />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
