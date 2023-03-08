<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      search_something: "",
    };
  },
  emits: ["search"],

  resetSearch() {
    this.search_something = "";
  },
};
</script>
<!-- creo la search-bar con uno snippet bootstrap -->
<template>
  <header>
    <div class="container d-flex justify-content-between py-3">
      <div class="boolflix-logo">
        <a href="#">BOOLFLIX</a>
      </div>
      <div class="searchbar">
        <div class="input-group flex-nowrap">
          <button
            type="button"
            class="input-group-text btn btn-danger"
            id="addon-wrapping"
            submit.prevent
            @click="$emit('search', search_something)"
          >
            B
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="Cerca il tuo film o la tua serie preferita..."
            aria-label="Username"
            aria-describedby="addon-wrapping"
            v-model="search_something"
            submit.prevent
            @keyup.enter="$emit('search', search_something)"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #000000;
}
.boolflix-logo {
  A {
    color: red;
    text-decoration: none;
    font-size: 3rem;
    font-weight: bolder;
  }
}

.input-group {
  input {
    width: 310px;
  }
  button {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
