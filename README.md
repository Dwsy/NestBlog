# Blog	


Blog前端:`Nuxt.js + Vuetify.js`

Server:`NestJS + MongoDB`

Admin:`Vue.js + Vuetify.js`

基本功能都有了，细节有待添加。（开发进度百分之30%大概）

Blog在线预览地址：http://dwsy.link:5000/
-
Admin在线预览地址:http://dwsy.link:4000/    http://admindwsy.glitch.me/blog/ (未更新)
-
Server-Swagger UI在线地址：http://dwsy.link:3000/api-docs/
---
运行

* 导入myblog.js


```bash
git clone https://github.com/Dwsy/blog.git
```

Server 

```bash
cd server
yarn/npm i
nest start admin
```
端口设置：复制.env.example为.env 修改

Blog前端
```bash
cd blog-web
yarn/npm i
yarn run dev/npm run dev
```
端口设置：复制.env.example为.env  BASE_URL为blog端口API_URL为server端口

Admin
```bash
cd admin
yarn/npm i
yarn run dev/npm run dev
```
端口设置： vue.config.js -> devServer:port  proxy->target为api端口
上线修改：admin\src\plugins\axios.js  中的('~~~/api')   baseURL: process.env.NODE_ENV === 'development' ? '/api' : `'~~~/api'`
