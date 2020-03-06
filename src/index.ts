import { VueConstructor } from "vue";

const comma = (input: number) => {
  return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export default {
  install(Vue: VueConstructor): void {
    Vue.filter("comma", comma);
  }
};
