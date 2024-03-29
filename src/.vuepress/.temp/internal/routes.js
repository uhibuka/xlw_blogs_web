export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Project home","i":"home"} }],
  ["/Java/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/Java/markdown.html.js"), meta: {"t":"Java基础","i":"fab fa-markdown","O":2} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/zh/Java/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/Java/markdown.html.js"), meta: {"t":"Java基础","i":"fab fa-markdown","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/Java/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/Java/index.html.js"), meta: {"t":"Java"} }],
  ["/zh/Java/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/Java/index.html.js"), meta: {"t":"Java"} }],
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
