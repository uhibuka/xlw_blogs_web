import comp from "E:/code/xlw-blogs/blogs_web/src/.vuepress/.temp/pages/zh/guide/Java、/basice.html.vue"
const data = JSON.parse("{\"path\":\"/zh/guide/Java%E3%80%81/basice.html\",\"title\":\"Java基础\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java基础\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"description\":\"1.基本类型和包装类型的区别？ 相同点 ：都可以用作变量，无论是方法传递的参数还是成员变量。 不同点 ：一个是基础数据类型，一个是引用数据类型 两者在比较的时候方式不同； 储存方式不同，基本类型一般作为参数和代码块内的局部变量（栈的局部变量表中），如果是成员变量（队），static修饰的（方法区）。引用数据类型（堆），static修饰的（方法区）； 所...\"},\"headers\":[],\"readingTime\":{\"minutes\":1.86,\"words\":557},\"filePathRelative\":\"zh/guide/Java、/basice.md\",\"autoDesc\":true}")
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
