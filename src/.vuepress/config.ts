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
      title: "知识收集",
      description: "记录学习历程",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
