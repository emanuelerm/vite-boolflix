<template>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-sm-2 col-md-2 col-lg-2">
          <h1>Boolflix</h1>
        </div>
        <div class="col-12 col-sm-6 col-md-5 col-lg-3">
          <SearchBarComponent />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import SearchBarComponent from "./components/SearchBarComponent.vue";
export default {
  name: "App",
  components: {
    SearchBarComponent,
  },
};
</script>

<style lang="scss" scoped></style>
