import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/guide/",
  {
    text: "Project address",
    icon: "lightbulb",
    // prefix: "/guide/",
    children: [
      {
        text: "XRPC",
        icon: "lightbulb",
        link: "https://gitee.com/rentouzhunao/xlw-xrpc",
      },
      {
        text: "XRPC",
        icon: "lightbulb",
        link: "https://gitee.com/rentouzhunao/xlw-xrpc",
      },
    ],
  },
]);
