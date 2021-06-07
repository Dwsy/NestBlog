# Blog	


Blog前端:`Nuxt.js + Vuetify.js`

Server:`Nest.js + MongoDB`

Admin:`Vue.js + Vuetify.js`

 基本功能都有了，细节有待添加。（开发进度百分之40%大概）

Blog在线预览地址：http://dwsy.link:5000/  

static: http://dwsy.link:5001/ http://blog.dwsy.link/ http://dwsy7.gitee.io/

Admin在线预览地址:http://dwsy.link:4000/ http://blog.dwsy.link/admin/ http://dwsy7.gitee.io/

Server-Swagger UI在线地址：http://dwsy.link:3000/api-docs/

---
Run


```bash
git clone https://github.com/Dwsy/blog.git
```

* 导入myblog.js
Server
```shell
cd server
yarn/npm i
nest start admin
```
```
配置：复制.env.example为.env
DB=mongodb://127.0.0.1:27017/myblog MongoDB连接
ADMIN_PORT=3000 API_URL
SECRET
```
Blog前端
```shell
cd blog-web
yarn/npm i
yarn run dev/npm run dev
```
```
配置：复制.env.example为.env
前端(HOST PORT) 服务器(API_URL)
```
Admin
```shell
cd admin
yarn/npm i
yarn run dev/npm run dev
```
```
配置：复制.env.example为.env
NODE_ENV_DEV_HOST=0.0.0.0 dev host
NODE_ENV_DEV_PORT=5000    dev port
NODE_ENV_API_L_URL=http://localhost:3000/api 本地apiURL 调试时使用
VUE_APP_API=http://www.dwsy.link:3000/api 远程apiURL build时使用

```
#### 填坑
- [x] 搜索   2021-5-12 22:18:10
- [x] 归档   2021-5-16 00:53:16
- [x] MD目录 2021-6-1 13:47:43
- [ ] 骨骼:加载动画
- [ ] 异常处理
- [ ] 时光机
- [ ] 相册
- [ ] About

