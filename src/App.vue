<script>
import AppHeader from "./components/AppHeader.vue";
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
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?&api_key=4f5c0b616a8dd8300db5bb310c4ad301&query=il+signore+degli+anelli`
      )
      .then((response) => {
        console.log(response.data.results[0].original_title);
      });
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
  </div>
</template>

<style lang="scss" scoped></style>
