<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="" />
    <button
      @keyup="makeSearch"
      class="btn btn-outline-danger"
      type="button"
      id="button-addon1"
    >
      Search
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../data/store.js";
export default {
  name: "SearchBarComponent",
  methods: {
    makeSearch() {
      const url = store.baseUrl + store.searchMulti + store.myApiKey;
      let options = {};
      let params = {};
      for (let key in store.search) {
        if (store.search[key]) {
          params[key] = store.search[key];
        }
      }
      axios.get(url, options).then((res) => {
        store.multiList = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
