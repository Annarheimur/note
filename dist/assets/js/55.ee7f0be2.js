(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{741:function(t,a,n){"use strict";n.r(a);var s=n(46),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"模块化进化史教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块化进化史教程"}},[t._v("#")]),t._v(" 模块化进化史教程")]),t._v(" "),n("ol",[n("li",[t._v("全局function模式")])]),t._v(" "),n("ul",[n("li",[t._v("module1.js"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//数据\nlet data = 'atguigu.com'\n\n//操作数据的函数\nfunction foo() {\n  console.log(`foo() ${data}`)\n}\nfunction bar() {\n  console.log(`bar() ${data}`)\n}\n")])])])]),t._v(" "),n("li",[t._v("module2.js"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let data2 = 'other data'\n\nfunction foo() {  //与另一个模块中的函数冲突了\n  console.log(`foo() ${data2}`)\n}\n")])])])]),t._v(" "),n("li",[t._v("test1.html"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<script type="text/javascript" src="module1.js"><\/script>\n<script type="text/javascript" src="module2.js"><\/script>\n<script type="text/javascript">\n\n  let data = "修改后的数据"\n  foo()\n  bar()\n<\/script>\n')])])])]),t._v(" "),n("li",[t._v("说明:\n"),n("ul",[n("li",[t._v("全局函数模式: 将不同的功能封装成不同的全局函数")]),t._v(" "),n("li",[t._v("问题: Global被污染了, 很容易引起命名冲突")])])])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("namespace模式")])]),t._v(" "),n("ul",[n("li",[t._v("module1.js"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let myModule = {\n  data: 'atguigu.com',\n  foo() {\n    console.log(`foo() ${this.data}`)\n  },\n  bar() {\n    console.log(`bar() ${this.data}`)\n  }\n}\n")])])])]),t._v(" "),n("li",[t._v("module2.js"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let myModule2 = {\n  data: 'atguigu.com2222',\n  foo() {\n    console.log(`foo() ${this.data}`)\n  },\n  bar() {\n    console.log(`bar() ${this.data}`)\n  }\n}\n")])])])]),t._v(" "),n("li",[t._v("test2.html"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<script type="text/javascript" src="module2.js"><\/script>\n<script type="text/javascript" src="module22.js"><\/script>\n<script type="text/javascript">\n  myModule.foo()\n  myModule.bar()\n\n  myModule2.foo()\n  myModule2.bar()\n\n  myModule.data = \'other data\' //能直接修改模块内部的数据\n  myModule.foo()\n\n<\/script>\n')])])])]),t._v(" "),n("li",[t._v("说明\n"),n("ul",[n("li",[t._v("namespace模式: 简单对象封装")]),t._v(" "),n("li",[t._v("作用: 减少了全局变量")]),t._v(" "),n("li",[t._v("问题: 不安全")])])])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("IIFE模式")])]),t._v(" "),n("ul",[n("li",[t._v("module3.js"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("(function (window) {\n  //数据\n  let data = 'atguigu.com'\n\n  //操作数据的函数\n  function foo() { //用于暴露有函数\n    console.log(`foo() ${data}`)\n  }\n\n  function bar() {//用于暴露有函数\n    console.log(`bar() ${data}`)\n    otherFun() //内部调用\n  }\n\n  function otherFun() { //内部私有的函数\n    console.log('otherFun()')\n  }\n\n  //暴露行为\n  window.myModule = {foo, bar}\n})(window)\n")])])])]),t._v(" "),n("li",[t._v("test3.html"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<script type="text/javascript" src="module3.js"><\/script>\n<script type="text/javascript">\n  myModule.foo()\n  myModule.bar()\n  //myModule.otherFun()  //myModule.otherFun is not a function\n  console.log(myModule.data) //undefined 不能访问模块内部数据\n  myModule.data = \'xxxx\' //不是修改的模块内部的data\n  myModule.foo() //没有改变\n\n<\/script>\n')])])])]),t._v(" "),n("li",[t._v("说明:\n"),n("ul",[n("li",[t._v("IIFE模式: 匿名函数自调用(闭包)")]),t._v(" "),n("li",[t._v("IIFE : immediately-invoked function expression(立即调用函数表达式)")]),t._v(" "),n("li",[t._v("作用: 数据是私有的, 外部只能通过暴露的方法操作")]),t._v(" "),n("li",[t._v("问题: 如果当前这个模块依赖另一个模块怎么办?")])])])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("IIFE模式增强")])]),t._v(" "),n("ul",[n("li",[t._v("引入jquery到项目中")]),t._v(" "),n("li",[t._v("module4.js"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("(function (window, $) {\n  //数据\n  let data = 'atguigu.com'\n\n  //操作数据的函数\n  function foo() { //用于暴露有函数\n    console.log(`foo() ${data}`)\n    $('body').css('background', 'red')\n  }\n\n  function bar() {//用于暴露有函数\n    console.log(`bar() ${data}`)\n    otherFun() //内部调用\n  }\n\n  function otherFun() { //内部私有的函数\n    console.log('otherFun()')\n  }\n\n  //暴露行为\n  window.myModule = {foo, bar}\n})(window, jQuery)\n")])])])]),t._v(" "),n("li",[t._v("test4.html"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<script type="text/javascript" src="jquery-1.10.1.js"><\/script>\n<script type="text/javascript" src="module4.js"><\/script>\n<script type="text/javascript">\n  myModule.foo()\n<\/script>\n')])])])]),t._v(" "),n("li",[t._v("说明\n"),n("ul",[n("li",[t._v("IIFE模式增强 : 引入依赖")]),t._v(" "),n("li",[t._v("这就是现代模块实现的基石")])])])]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("页面加载多个js的问题")])]),t._v(" "),n("ul",[n("li",[t._v("页面:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<script type="text/javascript" src="module1.js"><\/script>\n<script type="text/javascript" src="module2.js"><\/script>\n<script type="text/javascript" src="module3.js"><\/script>\n<script type="text/javascript" src="module4.js"><\/script>\n')])])])]),t._v(" "),n("li",[t._v("说明\n"),n("ul",[n("li",[t._v("一个页面需要引入多个js文件")]),t._v(" "),n("li",[t._v("问题:\n"),n("ul",[n("li",[t._v("请求过多")]),t._v(" "),n("li",[t._v("依赖模糊")]),t._v(" "),n("li",[t._v("难以维护")])])]),t._v(" "),n("li",[t._v("这些问题可以通过现代模块化编码和项目构建来解决")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);