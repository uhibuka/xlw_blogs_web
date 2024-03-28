export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Project home","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"Disabling layout and features","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"Encryption Article","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"Layout","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown Enhance","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"Page Config","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Features demo","i":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide","i":"lightbulb"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar feature","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo feature","i":"lightbulb"} }],
  ["/zh/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/zh/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/zh/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/zh/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/zh/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/zh/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/zh/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/zh/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/zh/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/zh/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/zh/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
