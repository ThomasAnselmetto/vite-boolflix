<script>
import AppHeader from "./components/AppHeader.vue";
import { store } from "./data/store";
export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
  </div>
</template>

<style lang="scss" scoped></style>
