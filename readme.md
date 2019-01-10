## 先安装 VUE

```
npm install vue --save-dev
```

## 需要安装 vue-loader vue-template-compiler

- vue-loader 解析.vue 文件的
- vue-template-compiler 用来解析 vue 模板的

* 在 vue-loader V15 的版本中,需要在 webpack.config.js 中加入相应的插件.具体做法如下:
* 1.在 webpack.config.js 的头部引入插件:

```
const VueLoaderPlugin = require('vue-loader/lib/plugin');
```

- 2.在导出的配置中添加插件:

```
module.export = {
  ... //之前配置不变
  plugins: [
    new VueLoaderPlugin()
  ]
}
```
