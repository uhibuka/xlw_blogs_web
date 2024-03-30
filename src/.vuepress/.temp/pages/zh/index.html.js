import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"项目主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"项目主页\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"个人网站\",\"tagline\":\"我自己的小空间...\",\"actions\":[{\"text\":\"进入主页\",\"icon\":\"lightbulb\",\"link\":\"./guide/\",\"type\":\"primary\"}],\"copyright\":false,\"footer\":\"版权所有 © 2024-present RenTouZhuNao\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"学无止境\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"项目主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"RenTouZhuNao\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"项目主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.22,\"words\":66},\"filePathRelative\":\"zh/README.md\"}")
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
