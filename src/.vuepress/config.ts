import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Knowledge collection",
      description: "Record learning process",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "学无止境",
      description: "记录学习历程",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
