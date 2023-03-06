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
        `${store.baseUri}/search/movie?&api_key=${store.apiKey}&query=il+signore+degli+anelli`
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
