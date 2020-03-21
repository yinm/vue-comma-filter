import { VueConstructor } from "vue";
import { comma } from "./filter";

export default {
  install(Vue: VueConstructor): void {
    Vue.filter("comma", comma);
  }
};
