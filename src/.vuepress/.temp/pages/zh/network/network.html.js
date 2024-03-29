import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/network/network.html.vue"
const data = JSON.parse("{\"path\":\"/zh/network/network.html\",\"title\":\"Network\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Network\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"zh/network/network.md\"}")
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
