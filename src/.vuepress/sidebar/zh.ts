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
  ],
});
