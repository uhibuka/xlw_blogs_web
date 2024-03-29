import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
