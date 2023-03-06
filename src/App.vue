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
        `${store.baseUri}/search/movie?&api_key=${store.apiKey}&query=lo+strappo`
      )
      .then((response) => {
        store.films = response.data.results;
        console.log(store.films);
      });
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ store.films[0].original_title }}</h1>
    <AppHeader />
  </div>
</template>

<style lang="scss" scoped></style>
