import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/Java/",
  {
    text: "项目地址",
    icon: "lightbulb",
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
