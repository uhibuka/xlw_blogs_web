import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/java/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/guide/java/\",\"title\":\"Java\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Java\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/guide/java/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Knowledge is infinite.\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"RenTouZhuNao\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Java\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
