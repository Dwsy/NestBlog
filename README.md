# Blog	


Blog前端:`Nuxt.js + Vuetify.js`

Server:`NestJS + MongoDB`

Admin:`Vue.js + Vuetify.js`

暂无权限验证功能
Blog在线预览地址：http://dwsy.link:5000/
Admin在线预览地址:暂未部署
---
运行
```bash
git clone https://github.com/Dwsy/blog.git
```
Server 
```bash
cd server
yarn/npm i
nest start admin
``
端口设置：server\apps\admin\src\main.ts      await app.listen(3000);

Blog前端
```bash
cd blog-web
yarn/npm i
yarn run dev/npm run dev
``
端口设置：复制.env.example为.env  BASE_URL为blog端口API_URL为server端口

Admin
```bash
cd admin
yarn/npm i
yarn run dev/npm run dev
``
端口设置： vue.config.js -> devServer:port  proxy->target为api端口
