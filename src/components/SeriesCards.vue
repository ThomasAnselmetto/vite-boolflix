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
  },
  methods: {
    getFlag(country) {
      country = country.toUpperCase();
      if (country == "EN") return "https://flagsapi.com/GB/flat/64.png";
      if (country == "ZH") return "https://flagsapi.com/CN/flat/64.png";
      return "https://flagsapi.com/" + country + "/flat/64.png";
    },
  },
};
</script>

<template>
  <div class="col my-4">
    <div class="card" style="">
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

<style lang="scss" scoped></style>
