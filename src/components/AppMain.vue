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
    <div class="row row-cols-4 movies">
      <FilmsCards
        v-for="film in store.films"
        :titolo="film.title"
        :titoloOriginale="film.original_title"
        :lingua="film.original_language"
        :voto="film.vote_average"
      />
    </div>

    <div class="row row-cols-4 series mt-5">
      <SeriesCards
        v-for="serie in store.series"
        :titolo="serie.name"
        :titoloOriginale="serie.original_name"
        :lingua="serie.original_language"
        :voto="serie.vote_average"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
