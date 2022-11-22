import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router/index";
import { store } from "./store";

const token = localStorage.getItem("token");

store.token = token ? token : "";

const axiosConf = {
  baseURL: "http://localhost:3000",
};
if (store.token.length > 0) {
  console.log("token");
  axiosConf.headers = {
    Authorization: `Bearer ${store.token}`,
  };
}

const axiosInstance = axios.create(axiosConf);

createApp(App).use(VueAxios, axiosInstance).use(router).mount("#app");
