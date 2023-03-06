<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "the lord of the rings",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>
<!-- creo la search-bar con uno snippet bootstrap -->
<template>
  <header class="container d-flex justify-content-between py-3">
    <div class="boolflix-logo"></div>
    <div class="searchbar">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">N</span>
        <input
          type="text"
          class="form-control"
          placeholder="Cerca il tuo film o la tua serie preferita..."
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #000000;
}
.boolflix-logo {
  width: 50px;
  background-color: red;
  height: 40px;
}

.input-group {
  span {
    color: red;
    font-size: 25px;
    font-weight: 800;
  }
  input {
    width: 310px;
  }
}
</style>
