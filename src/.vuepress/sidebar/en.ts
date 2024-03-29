import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "catalogue",
      icon: "laptop-code",
      prefix: "Java/",
      link: "Java/",
      children: "structure",
    },
  ],
});
