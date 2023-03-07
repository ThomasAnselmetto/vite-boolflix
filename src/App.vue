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
  // dopo istruzioni di tiziano metto entrambe le fetch in una fetch padre
  methods: {
    fetchSomething(query) {
      this.fetchmovies(query);
      this.fetchTvSeries(query);
    },
    fetchmovies(query) {
      axios
        .get(
          `${store.baseUri}/search/movie?api_key=${store.apiKey}&query=${query}`
        )
        .then((MoviesResponse) => {
          store.films = MoviesResponse.data.results;
        });
    },
    fetchTvSeries(query) {
      axios
        .get(
          `${store.baseUri}/search/tv?api_key=${store.apiKey}&query=${query}`
        )
        .then((SeriesResponse) => {
          store.series = SeriesResponse.data.results;
        });
      console.log(SeriesResponse);
    },
  },
};
</script>

<template>
  <div class="">
    <AppHeader @search="fetchSomething" />
    <main>
      <AppMain />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  background-color: #434343;
  height: 100vh;
  overflow: auto;
}
</style>
