<template>
    <v-app id="inspire">
        <!-- 加载动画 -->

        <!-- 侧边导航栏 -->
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            dark
            :src="navigationsrc"
        >
            <v-list>
                <v-col cols="10">
                    <v-avatar size="50px" class="img-full">
                        <img
                            alt="Avatar"
                            src="https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100"
                        />
                    </v-avatar>
                    <sub>{{ greetings }}</sub>
                    <div @click="upyy">
                        <sub>{{ yy.hitokoto }}</sub
                        ><br />
                        <sub style="left: 120px">--{{ yy.from }}</sub>
                    </div>
                </v-col>

                <template v-for="item in items">
                    <v-list-group
                        :to="item.link"
                        v-if="item.children"
                        :key="item.text"
                        v-model="item.model"
                        :prepend-icon="
                            item.model ? item.icon : item['icon-alt']
                        "
                        append-icon=""
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="(child, i) in item.children"
                            :key="i"
                            link
                            nuxt
                            :to="'/classification/' + child._id"
                        >
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.name }}
                                    <v-divider></v-divider>
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-group>

                    <v-list-item v-else :key="item.text" :to="item.link" link>
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                                <v-divider></v-divider>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <!-- 主视图 -->
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>

        <!-- 顶部 -->
        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            dark
            :src="appbarsrc"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="dwsy ml-0 pl-4">
                <span class="hidden-sm-and-down">Dwsy-blog</span>
            </v-toolbar-title>
            <v-col></v-col>
            <v-row style="max-width: 100%">
                <Search :SearchFunction="SearchFunction"></Search>
            </v-row>
            <v-spacer></v-spacer>

            <v-btn
                elevation="0"
                @click="handleChangeTheme"
                text
                transition="fade-transition"
            >
                <v-icon v-if="$vuetify.theme.dark"
                    >mdi-white-balance-sunny</v-icon
                >
                <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-bell-circle</v-icon>
            </v-btn>
            <!-- <v-btn icon>
                <v-icon>mdi-account-key</v-icon>
            </v-btn> -->
        </v-app-bar>

        <v-footer color=" lighten-1" padless>
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="(link, i) in links"
                    :key="i"
                    text
                    rounded
                    class="my-2"
                >
                    <a
                        :href="link.url"
                        style="text-decoration: none"
                        target="_blank"
                    >
                        {{ link.name }}
                    </a>
                </v-btn>
                <v-col class="lighten-2 py-4 text-center" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer>
        <div class="example">
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
        </div>
        <ScrollToTop />
    </v-app>
</template>

<script>
import ScrollToTop from "@/components/ScrollToTop.vue";
import Navigation from "../components/Comment/Navigation";
import Search from "../components/Search";

export default {
    components: {
        ScrollToTop,
        Navigation,
        Search,
    },

    // async created() {
    //     // this.$vuetify.theme.dark = true;
    //     // // const classificationData = await this.$axios.$get("classification");
    //     // // const themeData = await this.$axios.$get("theme");

    //     // // let classificationData = JSON.parse(localStorage.getItem("classificationData"))
    //     // // let themeData = JSON.parse(localStorage.getItem("themeData"));
    //     // // console.log(this.classificationData);
    //     // // console.log(this.themeData);

    //     //     let CAT = JSON.parse(window.localStorage.getItem("classAndTheme"));
    //     //     if (CAT === null) {
    //     //         this.classificationData = await this.$axios.$get("classification");
    //     //         this.themeData = await this.$axios.$get("theme");
    //     //         window.localStorage.setItem(
    //     //             "classAndTheme",
    //     //             JSON.stringify({
    //     //                 data: {
    //     //                     class:this.classificationData,
    //     //                     theme:this.themeData
    //     //                 },
    //     //                 date: new Date().getTime()
    //     //             })
    //     //         );
    //     //     } else {
    //     //         if (data.date + 22200000 > new Date().getTime()) {
    //     //             this.classificationData = CAT.data.class;
    //     //             this.themeData = CAT.data.theme;
    //     //             // console.log("使用缓存");
    //     //         } else {
    //     //             // console.log("更新缓存");
    //     //         this.classificationData = await this.$axios.$get("classification");
    //     //         this.themeData = await this.$axios.$get("theme");
    //     //         window.localStorage.setItem(
    //     //             "classAndTheme",
    //     //             JSON.stringify({
    //     //                 data: {
    //     //                     class:this.classificationData,
    //     //                     theme:this.themeData
    //     //                 },
    //     //                 date: new Date().getTime()
    //     //             })
    //     //         );
    //     //         }
    //     //     }

    //     // // if (this.classificationData === null) {
    //     // //     this.classificationData = await this.$axios.$get("classification");
    //     // // }
    //     // // if (this.themeData === null) {
    //     // //     this.themeData = await this.$axios.$get("theme");
    //     // // }
    //     // this.items[5].children = this.classificationData.data;
    //     // this.themeDark = this.themeData.data[0];
    //     // this.themeLight = this.themeData.data[1];
    //     // let dark = {
    //     //     accent: this.themeDark.accent,
    //     //     primary: this.themeDark.primary,
    //     //     error: this.themeDark.error,
    //     //     warning: this.themeDark.warning,
    //     //     success: this.themeDark.success,
    //     //     secondary: this.themeDark.secondary,
    //     //     info: this.themeDark.info
    //     // };
    //     // let light = {
    //     //     accent: this.themeLight.accent,
    //     //     primary: this.themeLight.primary,
    //     //     error: this.themeLight.error,
    //     //     warning: this.themeLight.warning,
    //     //     success: this.themeLight.success,
    //     //     secondary: this.themeLight.secondary,
    //     //     info: this.themeLight.info
    //     // };
    //     // this.$vuetify.theme.themes.light = light;
    //     // this.$vuetify.theme.themes.dark = dark;
    //     // // this.document.body.removeChild(document.getElementById("Loading"));
    //     // this.loader = !this.loader;
    //     // const h = new Date().getHours();
    //     // this.$vuetify.theme.dark = (h >= 19 && h <= 24) || (h >= 0 && h <= 7);
    //     // // this.greetings = "好耶！○( ＾皿＾)っ🐱‍🏍Hiahiahia…"
    //     // if (h >= 6 && h <= 10) {
    //     //     this.greetings = "早上好！👾👾";
    //     // } else if (h > 10 && h <= 14) {
    //     //     this.greetings = "中午好！(❁´◡`❁)🙂";
    //     // } else if (h > 14 && h <= 19) {
    //     //     this.greetings = "下午好ヾ(≧ ▽ ≦)ゝ🤯";
    //     // } else if (h > 19 && h <= 23) {
    //     //     this.greetings = "晚上好！( ఠൠఠ )ﾉ👻";
    //     // } else if (h >= 0 && h <= 8) {
    //     //     this.greetings = "好耶！○( ＾皿＾)っ🐱‍🏍";
    //     // }
    //     // this.yy = await this.$axios.$get("https://v1.hitokoto.cn/");
    //     // // console.log(this.yy);
    //     // if ((h >= 19 && h <= 24) || (h >= 0 && h <= 7)) {
    //     //     this.navigationsrc = this.themeDark.navigationImage;
    //     //     this.appbarsrc = this.themeDark.topImage;
    //     //     this.islight = false;
    //     // } else {
    //     //     this.navigationsrc = this.themeLight.navigationImage;
    //     //     this.appbarsrc = this.themeLight.topImage;
    //     //     // this.navigationsrc = "";
    //     //     // this.appbarsrc = "";
    //     //     this.islight = true;
    //     // }

    //     // // this.$vuetify.theme.dark = true;
    // },
    data() {
        return {
            themeData: null,
            classificationData: null,
            loader: true,
            dialog: false,
            drawer: null,
            islight: true,
            navigationsrc: "",
            appbarsrc: "",
            // greetings: new Date(),
            greetings: "",
            yy: {},
            items: [
                { icon: "mdi-home-outline", text: "博客首页", link: "/" },
                {
                    icon: "mdi-flag-variant-outline",
                    text: "文章归档",
                    link: "/archives",
                },
                {
                    icon: "mdi-timeline-clock-outline ",
                    text: "时光机",
                    link: "/cross",
                },
                { icon: "mdi-image", text: "相册", link: "/image" },
                { icon: "mdi-tag-multiple-outline", text: "Tag", link: "/tag" },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "文章分类",
                    model: false,
                    children: [],
                },
                {
                    icon: "mdi-account-multiple-outline",
                    text: "友情链接",
                    link: "/firend",
                },
                {
                    icon: "mdi-infinity",
                    text: "infinitynewtab",
                    link: "/infinitynewtab",
                },
                {
                    icon: "mdi-information-variant",
                    text: "关于",
                    link: "/about",
                },
            ],
            links: [
                {
                    name: "Home",
                    url: "https://nestblog.dwsy.link",
                },
                {
                    name: "About Us",
                    url: "1",
                },
                {
                    name: "Admin",
                    url: "https://nestadmin.dwsy.link/",
                },
                {
                    name: "Github",
                    url: "https://github.com/Dwsy",
                },
                {
                    name: "Blog",
                    url: "https://www.dwsy.link",
                },
                {
                    name: "Contact Us",
                    url: "1",
                },
            ],

            miniVariant: false,
            right: true,
            rightDrawer: false,
            themeDark: "",
            themeLight: "",
        };
    },
    async mounted() {
        console.log("123");
        this.$vuetify.theme.dark = true;
        // const classificationData = await this.$axios.$get("classification");
        // const themeData = await this.$axios.$get("theme");

        // let classificationData = JSON.parse(localStorage.getItem("classificationData"))
        // let themeData = JSON.parse(localStorage.getItem("themeData"));
        // console.log(this.classificationData);
        // console.log(this.themeData);

        let CAT = JSON.parse(localStorage.getItem("classAndTheme"));
        if (CAT === null) {
            this.classificationData = await this.$axios.$get("classification");
            this.themeData = await this.$axios.$get("theme");
            localStorage.setItem(
                "classAndTheme",
                JSON.stringify({
                    data: {
                        class: this.classificationData,
                        theme: this.themeData,
                    },
                    date: new Date().getTime(),
                })
            );
        } else {
            if (CAT.date + 22200000 > new Date().getTime()) {
                this.classificationData = CAT.data.class;
                this.themeData = CAT.data.theme;
                // console.log("使用缓存");
            } else {
                // console.log("更新缓存");
                this.classificationData = await this.$axios.$get(
                    "classification"
                );
                this.themeData = await this.$axios.$get("theme");
                localStorage.setItem(
                    "classAndTheme",
                    JSON.stringify({
                        data: {
                            class: this.classificationData,
                            theme: this.themeData,
                        },
                        date: new Date().getTime(),
                    })
                );
            }
        }

        // if (this.classificationData === null) {
        //     this.classificationData = await this.$axios.$get("classification");
        // }
        // if (this.themeData === null) {
        //     this.themeData = await this.$axios.$get("theme");
        // }
        this.items[5].children = this.classificationData.data;
        this.themeDark = this.themeData.data[0];
        this.themeLight = this.themeData.data[1];
        let dark = {
            accent: this.themeDark.accent,
            primary: this.themeDark.primary,
            error: this.themeDark.error,
            warning: this.themeDark.warning,
            success: this.themeDark.success,
            secondary: this.themeDark.secondary,
            info: this.themeDark.info,
        };
        let light = {
            accent: this.themeLight.accent,
            primary: this.themeLight.primary,
            error: this.themeLight.error,
            warning: this.themeLight.warning,
            success: this.themeLight.success,
            secondary: this.themeLight.secondary,
            info: this.themeLight.info,
        };
        this.$vuetify.theme.themes.light = light;
        this.$vuetify.theme.themes.dark = dark;
        // this.document.body.removeChild(document.getElementById("Loading"));
        this.loader = !this.loader;
        const h = new Date().getHours();
        this.$vuetify.theme.dark = (h >= 19 && h <= 24) || (h >= 0 && h <= 7);
        // this.greetings = "好耶！○( ＾皿＾)っ🐱‍🏍Hiahiahia…"
        if (h >= 6 && h <= 10) {
            this.greetings = "早上好！👾👾";
        } else if (h > 10 && h <= 14) {
            this.greetings = "中午好！(❁´◡`❁)🙂";
        } else if (h > 14 && h <= 19) {
            this.greetings = "下午好ヾ(≧ ▽ ≦)ゝ🤯";
        } else if (h > 19 && h <= 23) {
            this.greetings = "晚上好！( ఠൠఠ )ﾉ👻";
        } else if (h >= 0 && h <= 8) {
            this.greetings = "好耶！○( ＾皿＾)っ🐱‍🏍";
        }
        this.yy = await this.$axios.$get("https://v1.hitokoto.cn/");
        // console.log(this.yy);
        if ((h >= 19 && h <= 24) || (h >= 0 && h <= 7)) {
            this.navigationsrc = this.themeDark.navigationImage;
            this.appbarsrc = this.themeDark.topImage;
            this.islight = false;
        } else {
            this.navigationsrc = this.themeLight.navigationImage;
            this.appbarsrc = this.themeLight.topImage;
            // this.navigationsrc = "";
            // this.appbarsrc = "";
            this.islight = true;
        }

        // this.$vuetify.theme.dark = true;
        // this.handleLoadNoticeStatus();
    },
    methods: {
        async upyy() {
            this.yy = await this.$axios.$get("https://v1.hitokoto.cn/");
        },
        handleChangeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            if (this.islight === true) {
                this.navigationsrc = this.themeDark.navigationImage;
                this.appbarsrc = this.themeDark.topImage;
                this.islight = !this.islight;
                console.log("夜间");
            } else {
                this.navigationsrc = this.themeLight.navigationImage;
                this.appbarsrc = this.themeLight.topImage;
                // this.navigationsrc = "";
                // this.appbarsrc = "";
                console.log("日间");
                this.islight = !this.islight;
            }
        },
        handleShowSide() {
            this.$store.commit("SET_SIDE_STATUS", true);
        },
        async SearchFunction(a) {
            let url = `contents/search/s/${a}`;
            const retSearch = await this.$axios.$get(url);
            // callback(retSearch.S_content[0])
            // console.log(retSearch);
            // console.log(url);
            return retSearch;
        },
    },
};
</script>

<style>
pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
}
@media only screen and (min-width: 320px) {
    .dwsy {
        width: 200px;
    }
}

::-webkit-scrollbar {
    width: 8px;
    height: 6px;
}
/*定义滚动条轨道*/
::-webkit-scrollbar-track {
    background-color: transparent;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    background-color: #8f8f8f;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.4) 100%,
        transparent 100%,
        transparent 50%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0.4) 75%,
        transparent 75%,
        transparent
    );
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}

.theme--dark.v-application code {
    background-color: rgb(0 0 0 / 0%);
    color: currentColor;
}

.img-full {
    width: 100px;
    border-radius: 50%;
    /* animation: light 8s ease-in-out infinite; */
    transition: 0.5s;
}
.img-full:hover {
    transform: scale(1.15) rotate(720deg);
}

.imgbig:hover {
    transform: scale(1.25);
    cursor: pointer;
    transition: all 0.8s;
}
</style>

