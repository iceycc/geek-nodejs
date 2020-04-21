# 浏览指引

1. 第二章里，每一个小文件夹都是一个demo
2. 第三章里，整个第三章是一个完整项目，请观看第三章的readme来确定启动方式
3. 第四章里，每一个小文件夹都是一个demo
4. 第五章里，整个第五章是一个完整项目，请观看第五章的readme来确定启动方式

Node


## nodejs是什么
1. v8 事件驱动 非阻塞I/O
2. 在chrome和node中写js的不同？
   1. nodejs没有浏览器的API控制浏览器
   2. nodejs提供api控制整个计算机
## nodejs可以做什么
1. web服务 腾讯视频
   1. 搜索引擎优化 + 首屏速度优化  = 服务端渲染
   2. 服务端渲染 + 前后端同构 
2. 构建工作流
   1. gulp-cli、webpack
   2. 构建工具不会永远不出问题
   3. 构建工具不会永远满足需求
   4. 之前可以用java、ruby等
   5. 使用nodejs做js构建工具
3. Visual Studio Code
4. 游戏 wayward
5. 客户端应用 twitch.tv
   1. 在已有的网站开发应用
6. 可拓展性
   1. 大型应用需要给使用者自定义模块的能力
   2. 使用nodejs做复杂的本地应用
      1. 可以利用js的灵活性提供外部扩展
      2. JS庞大的开发者基数让他们的灵活性得到利用

## nodejs版的极客时间网站
- 列表
  - 打通前后台
  - 服务端渲染
- 详情页
  - 网页路由
  - 异步加载
- 播放页
  - API服务器

## 什么是技术预研

- 分析要做的需求，找出技术难点
- 针对每个技术难点进行攻克
- BFF层：Backend for Frontend
  - chrome <---> node  <-----> 微服务:`['播放服务','播放服务','个人信息','广告']`
  - 对用户侧提供HTTP服务
  - 使用后端RPC服务
- nodejs是怎么跑起来的
  

## nodejs环境搭建
- chrome安装 + vscode安装 +
- node安装
  - 官方：LTS稳定 current最新版
- 查看是否安装成功 node -v  node -v
- window 安装 和 mac安装  全局环境变量

## 第一个node.js程序 - 石头剪头布游戏
- 运行方式
- node全局变量
  

## commonjs
- script标签  
  - 脚本变多时，需要手动管理加载顺序
  - 不同脚本之间逻辑调用，需要通过全局变量通过全局变量的方式
  - 没有html
- commonjs模块规范
  - JavaScript社区发起，nodejs应用推广
  - 影响到了浏览器端端Javascript
- 

## npm

## node核心模块

## nodejs的非阻塞I/O
- I/O
- 阻塞I/O和非阻塞I/O
- 排队打饭 vs 餐厅点菜
  - 对于点餐人员
    - 排队是阻塞I/O
    - 餐厅点菜是非阻塞I/O


## rpc
- 基于http
- 基于tcp多路复用


## 实战

1. 一 
   1. 重构极客时间网站，使用nodejs搭建BFF层
   2. BFF层，向前端提高HTTP服务，向后端发起RPC调用
2. 二 
   1. Nodejs
   2. 向前提供HTTP服务
   3. 向后进行RPC通信
3. koa-mount
4. koa-static
5. 模版渲染 
   1. include 子模版
   2. xss过滤，模版helper函数
   3. 实现一个模版引擎
      1. es6模版字符串
      2. vm模块
6. easy_sock
7. protocol-buffers?
   1. https://developers.google.com/protocol-buffers/docs/reference/javascript-generated
   2. 一文看懂Protocol Buffer:https://zhuanlan.zhihu.com/p/36554982
8.  api服务
    - restful 类似点菜的餐厅，每个菜配料都弄好了，很全
    - graphQL规范 类似食堂，需要什么配什么菜，按需聚合
      - 专注数据聚合，前端需要什么就返回什么
      - 让前端自定义查询数据的能力 ： https://graphql.cn/
      - 