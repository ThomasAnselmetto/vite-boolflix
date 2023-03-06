<!-- dentro main ripeschero' i dati degli array e li inviero' ciclati sotto forma di props ai figli Cards  -->

<script>
import FilmsCards from "./FilmsCards.vue";
import SeriesCards from ".//SeriesCards.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    FilmsCards,
    SeriesCards,
  },
};
</script>

<template>
  <div class="container">
    <div class="row movies">
      <FilmsCards />
    </div>
    <div class="row series">
      <SeriesCards />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
