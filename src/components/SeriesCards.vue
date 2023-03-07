<script>
export default {
  data() {
    return {
      baseImage: "https://image.tmdb.org/t/p/w342",
    };
  },
  props: {
    titolo: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
    image: String,
    overview: String,
  },
  methods: {
    getFlag(country) {
      country = country.toUpperCase();
      if (country == "EN") return "https://flagsapi.com/GB/flat/64.png";
      if (country == "ZH") return "https://flagsapi.com/CN/flat/64.png";
      if (country == "HI") return "https://flagsapi.com/IN/flat/64.png";
      if (country == "KO") return "https://flagsapi.com/KR/flat/64.png";
      return "https://flagsapi.com/" + country + "/flat/64.png";
    },
  },
};
</script>

<template>
  <div class="col my-4">
    <!-- qua vorrei dire che se l'immagine e' uguale a null non stampare nulla ma rimane lo spazio occupato quindi operatore ternario per dare la classe -->
    <div v-if="image != null" class="card" style="">
      <img
        :src="`${baseImage}${image}`"
        class="card-img-top border"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ titoloOriginale }}</h5>
        <p class="card-text">{{ titolo }}</p>
        <p class="card-text"><img :src="getFlag(lingua)" alt="flags" /></p>
        <a href="#" class="btn btn-primary">{{ voto }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  min-height: 50rem;
  border: 5px solid red;
}
</style>
