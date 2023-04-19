import { reactive } from "vue";

export const store = reactive({
  multiList: [],
  search: {
    baseUrl: "https://api.themoviedb.org/3/",
    myApiKey: "?api_key=ce83b213695d9cf07a9cb96a7315906c",
    searchMulti: "search/multi",
  },
});
