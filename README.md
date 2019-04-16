# vue
vue学习.....

<hr />

> 代码组成：
- `<template></template>`
- `<script></script>`
- `<style></style>`   三个标签部分组成
- 核心概念 ：
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


<hr />

<a name="e7909c5b"></a>
#### 事件修饰符：（事件修饰符使用时可以多个使用串联的方式写）
* .stop：阻止冒泡
* .prevent：阻止默认事件
* .capture：添加事件侦听器时使用事件捕获模式
* .self：只当事件在该元素本身（比如不是子元素）触发时触发回调
* .once：事件只触发一次
* **.stop与.self的区别：**
* .self只会阻止自身的事件冒泡，并不会阻止其它元素的事件冒泡

<hr />


<a name="8b0429ba"></a>
#### 事件绑定与属性绑定，v-model双向数据绑定
* v-bind：绑定属性值，简写为：
* v-on：绑定事件，简写为 
* v-model：实现数据的双向绑定（注意：v-model只能运用在表单元素中）

<hr />

<a name="ebb91e64"></a>
#### v-for="(自定义属性名 , index )   in    data中的数据名"，   用法就是{{  自定义属性名.数据key名   }}
* 注意：如果使用v-for迭代数字的话，那么它的下标是从1开始，而不是从0开始。
* .push：添加
* .set：删除
* .unshift：在头部添加
* 注意：v-for使用的时候，key属性只能使用number或string属性的值
* 注意：key在使用时，必须使用v-bind属性绑定的形式，指定key的值

<hr />

<a name="69d99266"></a>
#### v-if与v-show指令
* v-if 的特点：每次都会重新删除或创建dom元素，但v-if 有较高的切换性能消耗，如果元素频繁切换，那么不建议使用 v-if ，而建议使用 v-show
* v-show 的特点：每次不会重新删除或创建dom元素，只是改变了当前dom元素的  display 属性，但 v-show 有较高的初始渲染消耗，如果元素可能永远不会再页面上显示，那么不建议使用 v-show ，而建议使用 v-if 

<hr />

<a name="cc553d30"></a>
#### 数组的方法
* .some方法用于检测数组中的元素是否满足指定条件，注意：1、some方法不会对空数组进行检测，2、some方法bu不会改变原始数组。
* .findIndex方法用于返回符合条件的元素的索引位置。注意点与some方法相同。
* .foreach方法用于遍历数组的每个元素，并将元素传递给回调函数
* .indexOf方法用于检索字符串，如果该字符串没有出现，则返回-1
* .filter方法用于检测符合条件的所有元素，并将这些元素放入一个新数组中
* .includes方法用于判断一个数组是否包含指定的值，如果是则返回true，否则返回false

<hr />


<a name="04bd0c61"></a>
#### 过滤器
* 在vue中允许自定义过滤器，可被用作一些常见的文本格式化。
* 过滤器可以用在两个地方：mustachc插值和v-bind表达式
* 过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示   |
* {{ name  |   过滤器的名称 }}
* 全局过滤器：Vue.filter('过滤器的名称'，function(){ } ),function中的第一个参数，永远都是你要取的值，第二个参数，就可以进行传参，可以有多个传参，可以多次调用过滤器
* `${变量名}-${变量名}-${变量名}`：模版字符串
* filters：定义私有过滤器（局部），过滤器有两个条件【过滤器名称和处理函数】，过滤器在调用的时候采用就近原则进行调用
* es6新语法：.padstart（指定字符串的最小长度，'指定补全长度的字符串'）用于头部补全字符串，.padend(指定字符串的最小长度，'指定补全长度的字符串')用于尾部补全字符串

<hr />

<a name="0be1d466"></a>
#### 自定义键盘修饰符
* 全局定义：Vue.config.keyCodes.自定义的按键名称  =   相对应键盘码

<hr />

<a name="e16c6d26"></a>
#### 自定义全局指令
* 使用  Vue.directive（'指令的名称'，｛｝）  来自定义全局指令。
* 注意：其中，参数1为指令的名称，在定义的时候不需要加 v- 前缀。但是，在调用自定义指令的时候需要加   v-  前缀。
* 参数2为一个对象，这个对象上有一些指令相关的钩子函数，这些钩子函数可以在特定的阶段，执行相关的操作，参数2的一些钩子函数有：
* bind:function(){}    每当指令绑定到元素上的时候，就会立即执行这个bind函数，只执行一次
* inserted:function(){}   表示元素插入到DOM中的时候，会执行inserted函数（只触发一次）
* updated:function(){} 当VNode更新的时候，会执行updated ，可能会触发多次
* 注意：在每个函数中，第一个参数，永远都是  el , 表示被绑定了指令的那个元素，这个  el  是个原生的 js 对象，可以进行DOM操作

<hr />

<a name="407afa31"></a>
#### vue实例的生命周期
* 生命周期：从vue实例创建、运行到销毁期间，有各种各样的事件，这些事件统称为生命周期。
* 生命周期钩子就是生命周期的别名
* 生命周期函数的分类：
  * 创建期间的生命周期函数
    * beforeCreate()：这是我们遇到的第一个生命周期函数，表示示例完全被创建出来之前，会执行它。注意：在beforeCreate生命周期函数执行的时候，data和methods中的数据都还没有初始化。
    * **created()**：这是遇到的第二个生命周期函数，在created生命周期函数执行时，data和methods中的数据都初始化好了，注意：如果要调用methods中的方法或者操作data中的数据，最早只能在created()中操作。 
    * beforeMount()：这是遇到的第三个生命周期函数，在beforeMount生命周期函数执行时，模版已经在内存中编译好了，但未挂载到页面上去，注意：在beforeMount执行的时候，页面中的元素还没有被真正替换过来，只是之前写的一些模版字符串。
    * **mounted()**：这是遇到的第四个生命周期函数，表示内存中的模版已经真实的挂载到了页面中，注意：mounted是实例创建期间的最后一个生命周期函数，当执行完mounted就表示实例已经完全创建好了。如果要操作DOM节点，最早在mounted中执行。 
  * 运行期间的生命周期函数
    * beforeUpdate()：这时候表示我们的界面还没被更新，但数据肯定被更新了。注意：当执行beforeUpdate生命周期函数的时候，页面上显示的数据还是旧的，此时，data中的数据是最新的，页面尚未和最新的数据保持同步。
    * updated()：updated执行时，页面和data中的数据已经保持同步了。
  * 销毁期间的生命周期函数
    * beforeDestroy()：当执行beforeDestroy钩子函数时，vue实例已经从运行阶段进入到了销毁阶段，注意：当执行beforeDestroy的时候，实例身上所有的data和所有的methods以及指令等等，都处于可用状态，此时vue实例还没有被真正销毁。
    * destroyed()：当执行到destroyed函数时，组件已经完全被销毁，此时组件中的所有数据、方法、指令等等，都已经不可用了。

<hr />

<a name="4377a9ae"></a>
#### 使用vue-resource实现get,post,jsonp请求
* 测试url请求地址
  * get请求地址：http://vue.studiyt.io/api/getlunbo
  * post请求地址：http://vue.studiyt.io/api/post
  * jsonp请求地址：http://vue.studiyt.io/api/jsonp
* 写法：this.$http.get( 'url地址',{},{} ).then(function( ){ })
* 手动发起的post请求，默认没有表单格式，需要通过post的第三个参数，｛emulateJSON：true｝设置 提交的内容类型 为 普通的表单数据格式 
* jsonp的实现原理 
  * 由于浏览器安全性限制，不允许ajax访问，跨域就是协议不同、端口不同、域名不同的数据接口，浏览器认为这种访问不安全。
  * 实现原理：动态创建script标签的形式，把script标签中的src属性，指向数据接口的地址，因为srcipt标签没有跨域限制，这种获取方式称为  jsonp（注意：jsonp只支持get请求）
<hr />

<a name="b599979e"></a>
#### 动画
* 使用transition元素将需要被动画控制的元素包裹起来
* 自定义两组动画来实现transition内部的元素动画
  * .v-enter  ,  .v-leave-to     动画开始与结束时
    * v-enter   动画进入之前，元素的起始状态，此时还没有开始进入
    * v-leave-to    动画结束之后，离开的终止状态，此时动画已结束
  * .v-enter-active  ,  .v-leave-active     动画中的过程
    * v-enter-active    入场动画时间段
    * v-leave-active    离场动画时间段    
* 不同动画之间需要在transition上加一个name='属性名'，然后样式中就将  v-  改成   属性名-
* 使用animated类库来实现动画
  * 在transition上加class类：
    * 进入时的动画类：enter-active-class="animated  动画类名"
    * 离开时的动画类：leave-active-class="animated  动画类名"
    * 绑定动画的时间：  :duration｛enter:进入时间，leave:离开时间 ｝
* 使用钩子函数实现半场动画：
  * [@before-enter：](#) 动画进入前
  * [@enter](#) ： 动画开始
  * [@after-enter](#) ： 动画离开后
* 如果需要实现v-for循环出来的DOM元素的动画，则需使用transition-group包裹动画元素。如果要实现v-for渲染出来的单个列表动画，那么就一定要添加   :key   属性
* 使用 .v-move 与  .v-leave-active｛position:absolute｝ 可以设置元素位移时的动画 
* 给 transition-group 添加 appear 属性来实现页面的入场效果
* tag = '标签名'   使用tag可以指定这个元素渲染为什么标签
<hr />

<a name="479bf02c"></a>
#### 组件化与模块化的区别：
* 模块化：是从代码逻辑的角度去划分的，方便代码分层开发，保证每一个功能模块的职能单一
* 组件化：是从UI的角度去划分的，前端的组件化，方便UI组件的重用
* 使用vue.extend({ template }) 与 vue.component('组件名'，创建出来的模版对象 )  来定义全局组件，使用方法：在template  里面用html标签的形式进行调用
* 使用components:{ 组件名:{ template:' 组件内容 ' }  } 来定义私有组件
* 组件可以有自己的data数据；组件中的data和实例中的data有点不一样，实例中的data可以为一个对象，但组件中的data必须是一个方法；组件中的data除了必须为一个方法之外，还必须返回一个对象才行；组件中的data数据和实例中的data数据使用方式完全一样
* 组件之间的切换（tab切换）: <component :is="  '显示的组件名称'  "></component>
* 父子组件传值
  * 通过属性绑定的形式将父组件的数据传递给子组件（：属性名="父组件中data的数据"）<br />
  * 使用props进行父子组件的传值，组件中的所有props中的数据都是通过父组件传递给子组件的
  * props中的数据都是只读的，无法重新赋值
  * 父组件传过来的数据属性都需要在props中定义一下，这样才能使用这个数据
* 父子组件之间调用方法
  * 通过事件绑定的形式将父组件中的方法传递给子组件（@func="父组件中的方法名"）
  * 在子组件中添加一个click时间，然后在子组件中创建这个点击事件，之后就用在这个点击事件中通过this.$emit(  ' 组件中绑定的事件名 ' ， 可以写传递的值或不写 )
* 使用ref获取dom元素和组件
  * 在dom元素元素上绑定ref=' 属性名 '
  * 在方法中操作dom元素时，使用this.$refs.属性名.操作属性<br />
