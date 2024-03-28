import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "Java/",
      link: "Java/",
      children: "structure",
    },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
