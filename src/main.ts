import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import DefaultLayout from "./Layout/DefaultLayout.vue";

import "./assets/main.css";
import store from "./store";
const app = createApp(App);
app.component("default-layout", DefaultLayout);
app.use(router).use(store).mount("#app");
