import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.21_vuepress@2.0.0-rc.9/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "E:/code/xlw-blogs/blogs_web/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.32_markdown-it@14.1.0_sass-loader@14.1.1_vuepress@2.0.0-rc.9/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
