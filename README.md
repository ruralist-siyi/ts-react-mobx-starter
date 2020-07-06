# ts-react-mobx-starter

#### 技术栈

1. React v16.13
2. typescript
3. mobx + mobx-react
4. webpack V4+
5. eslint + prettier

#### 项目目的

实现轻量以及自定义配置的支持 typescript 的 react 脚手架。

#### 功能

1. webpack 基本配置均以实现（打包、静态资源以及热替换等）
2. code splitting(通过 React 最新的 lazy + Suspense)
3. typescript 配置语法转换支持
4. eslint + prettier 配置以及 husky hook 支持
5. react-mobx 集成，更好的状态管理

#### 如何 run

```
// 安装依赖
npm install
// 启动dev环境
npm start
// 打包
npm run build
// webpack 打包报告分析
npm run report
// prettier 自动美化
npm run prettier
```
