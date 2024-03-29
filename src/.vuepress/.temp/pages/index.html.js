import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Project home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"Project home\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/6-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"Project name\",\"tagline\":\"You can place the description of the project here.\",\"actions\":[{\"text\":\"How to Use\",\"icon\":\"lightbulb\",\"link\":\"./Java/\",\"type\":\"primary\"},{\"text\":\"Docs\",\"link\":\"./guide/\"}],\"copyright\":false,\"footer\":\"Copyright © 2024-present RenTouZhuNao\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Knowledge collection\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Project home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"RenTouZhuNao\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Project home\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":63},\"filePathRelative\":\"README.md\"}")
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
