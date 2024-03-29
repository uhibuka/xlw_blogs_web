import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/Java/jihe/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/Java/jihe/\",\"title\":\"Foo feature\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Foo feature\",\"icon\":\"lightbulb\",\"description\":\"Introduction We support foo feature, ... Details ...\"},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"link\":\"#details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"zh/Java/jihe/README.md\",\"autoDesc\":true}")
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
