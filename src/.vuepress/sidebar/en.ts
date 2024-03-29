import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "catalogue",
      icon: "laptop-code",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
