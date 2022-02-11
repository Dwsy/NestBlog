由于jsdelivr节点更换故替换所有CDN资源

## 字体文件
` 已通过nuxt-webfontloader更改=>nuxt.config.js`

## 图标CSS
`路径blog-web\node_modules\@nuxtjs\vuetify\dist\icons.js`
手动替换以下**网址**
```JavaScript
const presetsCDN = {
    mdi: 'https://npm.elemecdn.com/@mdi/font@latest/css/materialdesignicons.min.css',
    md: 'https://cdn.bootcdn.net/ajax/libs/material-design-icons/3.0.2/iconfont/material-icons.min.css',
    fa: 'https://npm.elemecdn.com/@fortawesome/fontawesome-free@latest/css/all.min.css',
    fa4: 'https://npm.elemecdn.com/font-awesome@4.7.0/css/font-awesome.min.css'
};
// 暂未找到更好的方法
```




# myblog

## Build Setup

```bash
# install dependencies
$ yarn install
//
# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



