import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// dopo post slack di tiziano riesco ad usare le due tipologie diverse di stesse
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
library.add(faStarSolid, faStarRegular);
const app = createApp(App);
// se metti la costante dopo app.component grazie che non va
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
