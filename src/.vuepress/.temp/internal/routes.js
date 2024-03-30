export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Project home","i":"home"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide","i":"lightbulb"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/guide/mysql/mysql.html", { loader: () => import(/* webpackChunkName: "mysql.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/mysql/mysql.html.js"), meta: {"t":"MySQL","i":"fab fa-markdown","O":2} }],
  ["/guide/Java/basice.html", { loader: () => import(/* webpackChunkName: "basice.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/basice.html.js"), meta: {"t":"Java Basice","i":"fab fa-markdown","O":2} }],
  ["/guide/Java/io.html", { loader: () => import(/* webpackChunkName: "io.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/io.html.js"), meta: {"t":"Java IO","i":"fab fa-markdown","O":2} }],
  ["/guide/Java/jvm.html", { loader: () => import(/* webpackChunkName: "jvm.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/jvm.html.js"), meta: {"t":"Java JVM","i":"fab fa-markdown","O":2} }],
  ["/guide/Java/set.html", { loader: () => import(/* webpackChunkName: "set.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/set.html.js"), meta: {"t":"Java Set","i":"fab fa-markdown","O":2} }],
  ["/guide/Java/thread.html", { loader: () => import(/* webpackChunkName: "thread.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/thread.html.js"), meta: {"t":"Java Thread","i":"fab fa-markdown","O":2} }],
  ["/guide/network/network.html", { loader: () => import(/* webpackChunkName: "network.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/network/network.html.js"), meta: {"t":"计算机网络","i":"fab fa-markdown","O":2} }],
  ["/guide/spring/spring.html", { loader: () => import(/* webpackChunkName: "spring.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/spring/spring.html.js"), meta: {"t":"Spring","i":"fab fa-markdown","O":2} }],
  ["/guide/redis/redis.html", { loader: () => import(/* webpackChunkName: "redis.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/redis/redis.html.js"), meta: {"t":"Redis","i":"fab fa-markdown","O":2} }],
  ["/zh/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/index.html.js"), meta: {"t":"导航","i":"lightbulb"} }],
  ["/zh/guide/java/basice.html", { loader: () => import(/* webpackChunkName: "basice.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/java/basice.html.js"), meta: {"t":"Java基础","i":"fab fa-markdown","O":2} }],
  ["/zh/guide/java/set.html", { loader: () => import(/* webpackChunkName: "set.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/java/set.html.js"), meta: {"t":"Java集合","i":"fab fa-markdown","O":2} }],
  ["/zh/guide/network/network.html", { loader: () => import(/* webpackChunkName: "network.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/network/network.html.js"), meta: {"t":"计算机网络","i":"fab fa-markdown","O":2} }],
  ["/zh/guide/mysql/mysql.html", { loader: () => import(/* webpackChunkName: "mysql.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/mysql/mysql.html.js"), meta: {"t":"MySQL","i":"fab fa-markdown","O":2} }],
  ["/zh/guide/redis/redis.html", { loader: () => import(/* webpackChunkName: "redis.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/redis/redis.html.js"), meta: {"t":"Redis","i":"fab fa-markdown","O":2} }],
  ["/zh/guide/spring/spring.html", { loader: () => import(/* webpackChunkName: "spring.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/spring/spring.html.js"), meta: {"t":"Spring","i":"fab fa-markdown","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/guide/mysql/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/mysql/index.html.js"), meta: {"t":"Mysql"} }],
  ["/guide/Java/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/index.html.js"), meta: {"t":"Java"} }],
  ["/guide/network/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/network/index.html.js"), meta: {"t":"Network"} }],
  ["/guide/spring/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/spring/index.html.js"), meta: {"t":"Spring"} }],
  ["/guide/redis/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/redis/index.html.js"), meta: {"t":"Redis"} }],
  ["/zh/guide/java/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/java/index.html.js"), meta: {"t":"Java"} }],
  ["/zh/guide/network/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/network/index.html.js"), meta: {"t":"Network"} }],
  ["/zh/guide/mysql/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/mysql/index.html.js"), meta: {"t":"Mysql"} }],
  ["/zh/guide/redis/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/redis/index.html.js"), meta: {"t":"Redis"} }],
  ["/zh/guide/spring/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/spring/index.html.js"), meta: {"t":"Spring"} }],
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
