# vue
vue学习.....

<hr />

> 代码组成：
- `<template></template>`
- `<script></script>`
- `<style></style>`   三个标签部分组成
> 核心概念 ：
- 组件化
- 双向数据流 (基于ES5中的defineProperty来实现的),IE9及以上才支持
<hr />

### 双向数据流
- 1向  js内存属性发生改变，影响页面变化
- 1向  页面改变影响js内存属性改变
	
<hr />

### vue的常用指令
- v-text 是元素的innertext只能在双标签中使用
- v-html 是元素的innerhtml,不能包含{{xxx}}
- v-if   元素是否移除或插入
- v-show 元素是否显示或隐藏
- v-model 数据双向绑定
- v-bind  数据单向绑定