# vue-components-simple

## install
`yarn install`

`yarn serve`

`yarn build` vue组件打包成库文件,输出目录lib

`yarn release`

## 目录结构
```
├── build 构建库文件配置
|—— lib
│    ├── dialog.js
│    ├── index.js
│    ├── popover.js
│    └── theme_package 样式表
├── src
│    ├── App.vue
│    ├── assets
│    ├── components
│    ├── index.js
│    ├── main.js
│    ├── modules 需要打包的组件
│    │   ├── dialog
│    │   └── popover
│    └── util
├── vue.config.js 测试项目配置, 实时预览组建
```

## 功能列表
- 支持按需引入
- scss全局变量

todo
- 主题配置
- 语言配置
- 完善基础组件dialog/popover/button/input/searchinput/message/affix/vurtual list..., 支持accessibility
- vuepress 文档
- 开vue3+typescript版本