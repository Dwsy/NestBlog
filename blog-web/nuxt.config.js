// import colors from 'vuetify/es5/util/colors'
import { resolve } from 'path'
import dotenv from 'dotenv'
dotenv.config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - myblog',
    title: 'Blog',
    htmlAttrs: {
      lang: 'zh-CN',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: "stylesheet", type: "text/css", href: "http://www.bootcdn.cn/animate.css" }
      // { rel: "materialdesignicons-webfont", type: "text/css", href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/fonts/materialdesignicons-webfont.woff2?v=6.5.95" },
      // { rel: "stylesheet", type: "text/css", href: "https://npm.elemecdn.com/@mdi/font@latest/css/materialdesignicons.min.css" }
      //     <link data-n-head="ssr" rel="stylesheet" type="text/css"
      //     href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap">
      // <link data-n-head="ssr" rel="stylesheet" type="text/css"
      //     href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
    ],
    // script: [{ src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js' }],
    // script: [{ src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css  script src="//unpkg.com/valine/dist/Valine.min.js
  css: ['assets/main.css'],

  webfontloader: {
    // add Google Fonts as "custom" | workaround required
    custom: {
        families: [
            // 'Open Sans:n3,n4',
            // 'Roboto:n3,n7'
        ],
        urls: [
            // for each Google Fonts add url + options you want
            // here add font-display option
            // 'https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap',
            'https://npm.elemecdn.com/roboto-font/css/fonts.css'
        ]
    }
},
  // webfontloader: {
  //   google: {
  //     families: ['Roboto:100,300,400,500,700,900&display=swap'] //Loads Lato font with weights 400 and 700
  //   }
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    { src: '~/plugins/filters.js' },
    // { src:'@/plugins/vue-highlight', ssr: false }
    // { src:'@/plugins/', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',


  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    'nuxt-ssr-cache'
    // Simple Usage
    // 'nuxt-highlightjs',
    // '@nuxtjs/markdownit',
    // With Options
    // ['nuxt-highlightjs', {
    //   style: 'obsidian'
    //   // Module Options
    // }]
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     'markdown-it-div',
  //     'markdown-it-attrs'
  //   ],
  //   runtime: true
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'zh-CN'
    }
  },


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: true,
  //     // themes: {
  //     //   dark: {
  //     //     primary: '#21CFF3',
  //     //     accent: '#FF4081',
  //     //     secondary: '#9c36b5',
  //     //     success: '#4CAF50',
  //     //     info: '#2196F3',
  //     //     warning: '#FB8C00',
  //     //     error: '#FF5252'
  //     //   },
  //     //   light: {
  //     //     primary: '#1976D2',
  //     //     accent: '#e91e63',
  //     //     secondary: '#30b1dc',
  //     //     success: '#4CAF50',
  //     //     info: '#2196F3',
  //     //     warning: '#FB8C00',
  //     //     error: '#FF5252'
  //     //   }
  //     }
  //   }
  //   // theme: {
  //   //   dark: true,
  //   //   themes: {
  //   //     dark: {
  //   //       primary: colors.blue.darken2,
  //   //       accent: colors.grey.darken3,
  //   //       secondary: colors.amber.darken3,
  //   //       info: colors.teal.lighten1,
  //   //       warning: colors.amber.base,
  //   //       error: colors.deepOrange.accent4,
  //   //       success: colors.green.accent3
  //   //     }
  //   //   }
  //   // }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    babel: {
      // plugins: [
      //   [
      //     'prismjs',
      //     {
      //       languages: [
      //         'html',
      //         'css',
      //         'javascript',
      //         'php',
      //         'dart',
      //         'bash',
      //         'nginx',
      //         'sql',
      //         'c',
      //         'cpp',
      //         'python',
      //         'go',
      //         'java',
      //         'sql',
      //         'typescript',
      //         'go',
      //         'shell-session'
      //       ],
      //       plugins: [
      //         'line-numbers',
      //         'show-language',
      //         'copy-to-clipboard'
      //       ],
      //       theme: 'tomorrow',
      //       css: true
      //     }
      //   ]
      // ]
    },
    // analyze: true
  },
  alias: {
    'cs': resolve(__dirname, './components'),
    'style': resolve(__dirname, './assets/style'),
    'data': resolve(__dirname, './assets/other/data')
  },
  generate: {
    fallback: 'index.html'
  },
  cache: {
    useHostPrefix: false, //是否使用主机前缀 如果提供了多个主机名 可以设置为true
    pages: [ //将要缓存的页面
    //root
    /^\/$/
    ],
    
    key(route, context) {
      return route //return 的route是想要设置缓存的路由 可通过函数来设置想要缓存的路由 如果想跳过缓存可以返回假值
    },
 
    store: { //store 有其他type存储的方式 具体可查看 https://github.com/arash16/nuxt-ssr-cache#readme
      type: 'memory',
 
      //缓存的最大的页面
      max: 5,
 
      // 缓存的时间 到期将过期
      ttl: 600,
    },
  },


}
