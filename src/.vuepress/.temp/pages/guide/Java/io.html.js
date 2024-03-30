import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/guide/Java/io.html.vue"
const data = JSON.parse("{\"path\":\"/guide/Java/io.html\",\"title\":\"Java IO\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Java IO\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"description\":\"1.BIO BIO就是当一个线程发起IO请求时，内核会去查看数据是否准备就绪，如果没有准备就绪就会一直阻塞，直到数据准备就绪。 2.NIO 在Java中NIO就是多路复用IO。多路复用IO模型中，会有一个线程不断地去询问socket的状态，当socket发出读写请求时，才会有真正的io操作。 NIO的三大核心组件： Buffer（缓冲区）：每个客户端都...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/Java/io.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Knowledge is infinite.\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java IO\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1.BIO BIO就是当一个线程发起IO请求时，内核会去查看数据是否准备就绪，如果没有准备就绪就会一直阻塞，直到数据准备就绪。 2.NIO 在Java中NIO就是多路复用IO。多路复用IO模型中，会有一个线程不断地去询问socket的状态，当socket发出读写请求时，才会有真正的io操作。 NIO的三大核心组件： Buffer（缓冲区）：每个客户端都...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"RenTouZhuNao\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Markdown\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java IO\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"RenTouZhuNao\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":2.5,\"words\":751},\"filePathRelative\":\"guide/Java/io.md\",\"autoDesc\":true}")
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
