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
<!-- c'era la volonta' di pulire il codice utilizzando una sola Appcard ma nel tentativo di crearla,importarla,dichiararla ed usarla nel template qualcosa e' andato storto -->
<template>
  <div class="container">
    <h2>Films</h2>
    <div v-if="store.films.length" class="conditions">
      <div class="row row-cols-4 movies">
        <FilmsCards
          v-for="film in store.films"
          :titolo="film.title"
          :titoloOriginale="film.original_title"
          :lingua="film.original_language"
          :voto="film.vote_average"
          :image="film.poster_path"
          :overview="film.overview"
        />
      </div>
    </div>
    <h2>TV Series</h2>
    <div v-if="store.series.length" class="conditions">
      <div class="row row-cols-4 series mt-5">
        <SeriesCards
          v-for="serie in store.series"
          :titolo="serie.name"
          :titoloOriginale="serie.original_name"
          :lingua="serie.original_language"
          :voto="serie.vote_average"
          :image="serie.poster_path"
          :overview="serie.overview"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.container {
  h2 {
    margin-top: 2rem;
    font-size: 3rem;
    font-weight: bold;
    color: rgb(169, 169, 169);
  }
}
</style>
