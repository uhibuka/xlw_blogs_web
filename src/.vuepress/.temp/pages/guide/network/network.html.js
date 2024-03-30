import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/network/network.html.vue"
const data = JSON.parse("{\"path\":\"/guide/network/network.html\",\"title\":\"计算机网络\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"计算机网络\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"description\":\"1.网络分层结构 计算机网络体系大概分为三种，OSI七层模型、TCP/IP四层模型和五层模型。 AltAlt\"},\"headers\":[],\"readingTime\":{\"minutes\":0.19,\"words\":58},\"filePathRelative\":\"guide/network/network.md\",\"autoDesc\":true}")
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
