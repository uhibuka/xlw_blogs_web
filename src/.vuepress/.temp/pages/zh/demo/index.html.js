import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/\",\"title\":\"Java\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"知识目录\"],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/demo/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"知识收集\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"RenTouZhuNao\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"RenTouZhuNao\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"zh/demo/README.md\"}")
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
