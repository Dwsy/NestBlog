const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const IsProduction = process.env.NODE_ENV === "production";
const Path=process.env.NODE_ENV === 'development' ? './' : process.env.CDN_URL
// if (process.env.NODE_ENV !== 'development') {
//     var fs = require('fs');
//     var version = new Date().getTime();
//     var content = 'getVersion(\'' + version + '\')';

//     // console.log('开始创建版本文件...')
//     fs.writeFile('./src/version.js', content, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('version.js OK');
//     });
// }

module.exports = {
    lintOnSave: false,
    
    publicPath: Path,
    // publicPath: "./",
    // publicPath: "https://cdn.jsdelivr.net/gh/Dwsy/jsdelivr_cdn@master/nestblog/blog-admin/",
    pages: {
        // title:"后台管理平台"
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '后台管理平台',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    devServer: {
        /* 自动打开浏览器 */
        // open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        clientLogLevel: 'warning',

        host: process.env.NODE_ENV_DEV_HOST,
        port: process.env.NODE_ENV_DEV_PORT,
        https: false,
        hotOnly: false,
        proxy: {
            "/": {
                target: process.env.NODE_ENV_API_L_URL,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/": "/"
                }
            },
        }
    },
    configureWebpack: {
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    },
    lintOnSave: false,

}
