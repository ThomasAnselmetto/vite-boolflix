<script>
export default {
  data() {
    return {};
  },
  props: {
    titolo: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
  },
};
</script>

<template>
  <div class="col my-4">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ titolo }}</h5>
        <p class="card-text">{{ titoloOriginale }}</p>
        <p class="card-text">{{ lingua }}</p>
        <a href="#" class="btn btn-primary">{{ voto }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
