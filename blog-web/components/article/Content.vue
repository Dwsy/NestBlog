<template >
    <v-row>
        <!-- <h1>nmsl</h1> -->
        <!-- <v-card>
      <v-img max-height="400"
        :src="field.cover"></v-img>
    </v-card> -->
        <v-col>
            <h2>{{ field.title }}</h2>
            <!-- <h1>{{ this.$vuetify.theme.dark }}</h1> -->
            <br />
            <span
                >创建时间：{{
                    content.createdAt | formatDate("yyyy年MM月dd日")
                }}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分类：{{
                    field.classification.name
                }}</span
            >
            <!-- {{content.mdText}} -->
            <!-- <div v-html="$md.render(content.text)" class="Language"></div> -->
            <div
                v-html="content.text"
                class="content"
                :codeStyle="$vuetify.theme.dark ? 'prism-coy' : 'prism-mac'"
            ></div>
            <script src="https://cdn.bootcdn.net/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"></script>
            <script src="https://qiniu.dwsy.link/ns/hl/prism.js"></script>
            <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Dwsy/jsdelivr_cdn@master/nestblog/prism/prism.css"/> -->
            <!-- <script src="//cdn.jsdelivr.net/gh/Xcnte/Code-Prettify-for-typecho@master/static/prism.js"></script> -->
            <p v-if="this.$vuetify.theme.dark">
                <link
                    rel="stylesheet"
                    href="https://qiniu.dwsy.link/ns/hl/prism-tomorrow1.css"
                />
            </p>
            <p v-else>
                <link
                    rel="stylesheet"
                    href="https://qiniu.dwsy.link/ns/hl/prism-coy.css"
                />
            </p>

            <!-- <link
                rel="stylesheet"
                :href="//cdn.jsdelivr.net/gh/Xcnte/Code-Prettify-for-typecho@master/static/styles/coy.css"
            /> -->
            <p class="caption">
                最后修改时间：{{
                    content.createdAt | formatDate("yyyy年MM月dd日")
                }}
            </p>
        </v-col>
    </v-row>
</template>

<script>
// import '../../assets/prism (1)'
// import Prism from "prismjs";
let link = "";
export default {
    // components: {
    //   ContentTag
    // },
    data() {
        return {
            theme: this.$vuetify.theme.dark
        };
    },
    props: {
        content: {},
        field: {}
    },
    methods: {
        getTheme() {
            return this.$vuetify.theme.dark;
        }
    },
    mounted() {
        // Prism.highlightAll();
        // Prism.line
        (() => {
            var pres = document.querySelectorAll("pre");
            var lineNumberClassName = "line-numbers";
            pres.forEach(function(item, index) {
                item.className =
                    item.className == ""
                        ? lineNumberClassName
                        : item.className + " " + lineNumberClassName;
            });
        })();

        // theme
        // link = document.createElement("link");
        // link.type = "text/css";
        // link.id = "theme";
        // link.rel = "stylesheet";
        // link.href =
        //     "//cdn.jsdelivr.net/gh/Dwsy/jsdelivr_cdn@master/nestblog/css/mac.css";
        // document.getElementsByTagName("head")[0].appendChild(link);
        // console.log(this.$vuetify.theme.dark);
    },

    watch: {
        "this.$vuetify.theme.dark"(oldValue, newValue) {
            console.log(oldValue);
        }
    }
};
</script>
 <style scoped>
.content >>> table {
    width: 100%;
    overflow: auto;
    display: table;
    font-size: 14px;
    border-spacing: 0;
    border-collapse: collapse;
    word-break: normal;
    word-wrap: normal;
    margin-bottom: 1px;
}
@media (max-width: 767px) {
    .content >>> table {
        margin-bottom: 0;
    }
}
.content >>> table th {
    font-weight: 700;
    background-color: #f8f8f8;
}
.content >>> table td,
.content >>> table th {
    padding: 6px 13px;
    word-break: keep-all;
}
.content >>> table tr {
    background-color: #fff;
}
.content >>> table tr:nth-child(2n) {
    background-color: #f8f8f8;
}
.content >>> table th[align="left"] {
    text-align: left;
}
.content >>> table th[align="center"] {
    text-align: center;
}
.content >>> table th[align="right"] {
    text-align: right;
}

.content >>> hr {
    margin: 1.5em auto;
    border-top: 2px dotted #eee;
}
/* 列表 */
.content >>> li > ol,
.content >>> li > ul {
    margin: 0 0;
}

.content >>> li p.first {
    display: inline-block;
}

.content >>> ul,
ol {
    padding-left: 2rem;
}

ul:first-child,
ol:first-child {
    margin-top: 0;
}

ul:last-child,
ol:last-child {
    margin-bottom: 0;
}

#write ol li,
ul li {
    padding-left: 0.1rem;
}

/* 无序列表，显示为空心圆 */
/* ul {
  list-style-type: circle;
} */

/* 引用 */
.content >>> blockquote {
    /* margin-left: 1rem; */
    border-left: 0.3rem solid var(--purple-light-4);
    border-radius: 0.4rem;
    padding: 10px 15px;
    color: #777;
    background-color: var(--purple-light-1);
    box-shadow: var(--purple-light-2);
    font-family: var(--quota-font);
}

/* Table Head */
.content >>> thead th {
    background-color: rgb(81, 130, 187);
    color: #fff;
    border-bottom-width: 0;
}

/* Column Style */
.content >>> td {
    background-color: rgba(243, 248, 255, 0.986);
    color: #000;
}
/* Heading and Column Style */
.content >>> tr,
.content >>> th {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(81, 130, 187);
}

/* Padding and font style */
.content >>> td,
.content >>> th {
    padding: 5px 10px;
    font-size: 12px;
    font-family: Verdana;
    font-weight: bold;
}
</style>

<style lang="scss">
#__nuxt {
    .content {
        color: #4c4e4d;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
            Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol;
    }

    // .content code,
    .content pre code {
        box-shadow: none;
        color: inherit;
        max-height: 710px;
    }
    .content img {
        display: block;
        margin: 0 auto;
    }
    .content table tr {
        background-color: initial;
    }
    // .hljs {
    //   background-color: initial;
    // }
}

.theme--dark {
    .content {
        background-color: initial;

        // code {
        //   background-color: #000;
        // }

        .highlight pre,
        pre {
            background-color: #282b33;

            // code {
            //   background-color: initial;
            // }
        }
    }
    .v-note-wrapper {
        border-color: #000 !important;
    }

    .v-note-wrapper .v-note-op {
        border-bottom-color: #000;
    }

    .v-note-wrapper .v-note-op .v-left-item .op-icon:hover,
    .v-note-wrapper .v-note-op .v-right-item .op-icon:hover {
        background-color: #000;
        color: #ccc;
    }

    .content blockquote,
    .content dl,
    .content ol,
    .content p,
    .content pre,
    .content table,
    .content ul {
        color: #ccc;
    }

    .content h1,
    .content h2,
    .content h3,
    .content h4,
    .content h5,
    .content h6 {
        color: #dddddd;
        border-bottom-color: #282b33;
    }

    .content blockquote {
        border-left-color: #282b33;
    }

    .auto-textarea-wrapper .auto-textarea-input {
        color: #ccc;
    }
}

@media (min-width: 960px) {
    .content-container {
        width: 980px !important;
    }
}
</style>