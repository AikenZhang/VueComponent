# vue  组件/插件
参考Element设计模式,最终做成博客模式，来展示一些自己写的有关 vue/Extjs 的组件/插件
（本人现在的技术栈是vue、Extjs,最近有点忙，还没有及时更新文档）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
 ### 组件
- 下拉加载(dropLoad)

### 插件
- 通知(notification)
- 提示框(message)

## 组件
##### 下拉加载(dropLoad) 
##### config
- loadSvg:  是否启用组件默认的加载动画

    默认: true


##### event
- dropLoad（drop)
    params
	- drop: 组件属性对象
	- isLoading: 是否执行下拉加载

##### slot（插槽）
- content: 主要内容
- loading：自定义加载动画
