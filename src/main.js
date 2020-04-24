import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BTable } from "bootstrap-vue/esm/components/table/table";
import { BSpinner } from "bootstrap-vue/esm/components/spinner/spinner";
import { BButton } from "bootstrap-vue/esm/components/button/button";

Vue.component("b-table", BTable);
Vue.component("b-spinner", BSpinner);
Vue.component("b-button", BButton);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
