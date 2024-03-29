import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/redis/redis.html.vue"
const data = JSON.parse("{\"path\":\"/zh/redis/redis.html\",\"title\":\"Redis\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"zh/redis/redis.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
