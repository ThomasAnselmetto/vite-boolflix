import { reactive } from "vue";

// creo i collegamenti in entrata ed in uscita dei vari elementi che formeranno l'app

export const store = reactive({
  // inserisco nell'export la mia api key e l'url base di https://www.themoviedb.org/,l'array dei films e quello delle serie
  baseUri: "https://api.themoviedb.org/3",
  apiKey: "4f5c0b616a8dd8300db5bb310c4ad301",
  films: [],
  series: [],
});
