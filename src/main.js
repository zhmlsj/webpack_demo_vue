import Vue from "vue";
import App from "./App.vue";
console.log(App);

// 这样直接引用vue ，引用的并不是vue.js 引用的是vue 的runtime
// vue =compiler +runtime (compiler 可以编译模板)

new Vue({
  el: "#app",
  // template: "<div>hello world</div>",  // 这样写会报错
  // render 函数的作用是将虚拟dom渲染成真实的dom
  // render: function(createElement) {
  //   return createElement("h1", ["hello", createElement("span", "子元素")]);
  // },
  // render: h => h("h1", ["hello", h("span", "子元素")]),
  // render: h => h("h1", "hello") //es6写法
  render: h => h(App)
});
