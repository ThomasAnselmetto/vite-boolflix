<script>
export default {
  data() {
    return {
      baseImage: "https://image.tmdb.org/t/p/w342",
      // NotLoadImage:
      //   "https://image.tmdb.org/t/p/w342/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
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
  computed: {
    fullStars() {
      return Math.ceil(this.voto / 2);
    },
    emptyStars() {
      return 5 - this.fullStars;
    },
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
    <div v-if="image != null" class="card" style="">
      <div class="front">
        <img :src="`${baseImage}${image}`" class="card-img" alt="..." />
      </div>
      <div class="back p-3">
        <div class="card-text">
          <h5 class="card-title">{{ titoloOriginale }}</h5>
          <p class="card-text">{{ titolo }}</p>
          <p class="card-text">{{ overview }}</p>
          <p class="card-text"><img :src="getFlag(lingua)" alt="flags" /></p>
          <font-awesome-icon
            class="full-star"
            v-for="star in fullStars"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            class="empty-star"
            v-for="star in emptyStars"
            icon="fa-regular fa-star"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 28rem;
  border: 5px solid red;
  &:hover {
    .front {
      display: none;
    }
    .back {
      display: block;
    }
  }
}

.front {
  img {
    max-height: 28rem;
  }
}
.back {
  background-color: black;
  color: white;
  text-align: center;
  min-height: 100%;
  display: none;
  overflow: auto;
}
</style>
