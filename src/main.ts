import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import uviewPlus from "uview-plus";
import "uview-plus/index.scss";
import "./uni.scss";
export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
  app.use(uviewPlus);
  return {
    app,
  };
}
