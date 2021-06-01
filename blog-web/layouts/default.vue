<template>
    <v-app id="inspire">
        <!-- 加载动画 -->
        <div id="Loading">
            <div data-loader="ball-scale" v-show="loader">
                <div></div>
                <!-- <div></div>
                <div></div> -->
                <div></div>
            </div>
        </div>
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
                    <sub>{{ yy.hitokoto }}</sub><br/>
                    <sub style="left: 120px;">--{{ yy.from }}</sub>
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
            <v-btn icon>
                <v-icon>mdi-account-key</v-icon>
            </v-btn>
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
                        style="text-decoration:none"
                        target="_blank"
                    >
                        {{ link.name }}
                    </a>
                </v-btn>
                <v-col class=" lighten-2 py-4 text-center " cols="12">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
            </v-row>
        </v-footer>
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
        Search
    },

    async created() {
        this.$vuetify.theme.dark = true;
        // const classificationData = await this.$axios.$get("classification");
        // const themeData = await this.$axios.$get("theme");

        let classificationData = JSON.parse(localStorage.getItem("classificationData"))
        let themeData = JSON.parse(localStorage.getItem("themeData"));
        console.log(classificationData);
        console.log(themeData);
        if(classificationData===null){
            classificationData = await this.$axios.$get("classification")
            localStorage.setItem("classificationData", JSON.stringify(classificationData));
        }
        if(themeData===null){
            themeData = await this.$axios.$get("theme")
            localStorage.setItem("themeData", JSON.stringify(themeData));
        }

        // classificationData = classificationData===null?await this.$axios.$get("classification"):classificationData
        // themeData = themeData===null?await this.$axios.$get("theme"):themeData
        // console.log("1111111111111111111111");
        // console.log(JSON.parse(localStorage.getItem("test")));
        // console.log("1111111111111111111111");
        // this.userinfoArr = JSON.parse(localStorage.getItem("classificationData"));
        // this.userinfoArr = JSON.parse(localStorage.getItem("themeData"));
        
        // console.log(themeData);
        this.items[5].children = classificationData.data;
        this.themeDark = themeData.data[0];
        this.themeLight = themeData.data[1];
        // Light theme
        this.$vuetify.theme.themes.light.accent = themeData.data[1].accent;
        this.$vuetify.theme.themes.light.error = themeData.data[1].error;
        this.$vuetify.theme.themes.light.info = themeData.data[1].info;
        this.$vuetify.theme.themes.light.primary = themeData.data[1].primary;
        this.$vuetify.theme.themes.light.secondary =
            themeData.data[1].secondary;
        this.$vuetify.theme.themes.light.success = themeData.data[1].success;
        this.$vuetify.theme.themes.light.warning = themeData.data[1].warning;

        // Dark theme
        this.$vuetify.theme.themes.dark.accent = themeData.data[0].accent;
        this.$vuetify.theme.themes.dark.error = themeData.data[0].error;
        this.$vuetify.theme.themes.dark.info = themeData.data[0].info;
        this.$vuetify.theme.themes.dark.primary = themeData.data[0].primary;
        this.$vuetify.theme.themes.dark.secondary = themeData.data[0].secondary;
        this.$vuetify.theme.themes.dark.success = themeData.data[0].success;
        this.$vuetify.theme.themes.dark.warning = themeData.data[0].warning;

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
        this.yy = await this.$axios.$get("https://v1.hitokoto.cn/")
        console.log(this.yy);
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
    },
    data() {
        return {
            loader: true,
            dialog: false,
            drawer: null,
            islight: true,
            navigationsrc: "",
            appbarsrc: "",
            // greetings: new Date(),
            greetings: "",
            yy:{},
            items: [
                { icon: "mdi-home-outline", text: "博客首页", link: "/" },
                {
                    icon: "mdi-flag-variant-outline",
                    text: "文章归档",
                    link: "/archives"
                },
                { icon: "mdi-google-photos", text: "时光机", link: "/cross" },
                { icon: "mdi-image", text: "相册", link: "/image" },
                { icon: "mdi-tag-multiple-outline", text: "Tag", link: "/tag" },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "文章分类",
                    model: false,
                    children: []
                },
                {
                    icon: "mdi-account-multiple-outline",
                    text: "友情链接",
                    link: "/firend"
                },
                {
                    icon: "mdi-infinity",
                    text: "infinitynewtab",
                    link: "/infinitynewtab"
                },
                {
                    icon: "mdi-information-variant",
                    text: "关于",
                    link: "/about"
                }
            ],
            links: [
                {
                    name: "Home",
                    url: "http://www.dwsy.link:5000"
                },
                {
                    name: "About Us",
                    url: "1"
                },
                {
                    name: "Admin",
                    url: "http://www.dwsy.link:4000/"
                },
                {
                    name: "Github",
                    url: "https://github.com/Dwsy"
                },
                {
                    name: "Blog",
                    url: "http://www.dwsy.link:88"
                },
                {
                    name: "Contact Us",
                    url: "1"
                }
            ],

            miniVariant: false,
            right: true,
            rightDrawer: false,
            themeDark: "",
            themeLight: ""
        };
    },
    mounted() {
        // this.handleLoadNoticeStatus();
    },
    methods: {
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
        }
    }
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

    <style type="text/css">
#Loading {
    top: 50%;
    left: 50%;
    position: absolute;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
}
@-webkit-keyframes ball-beat {
    50% {
        opacity: 0.2;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes ball-beat {
    50% {
        opacity: 0.2;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

.ball-beat > div {
    background-color: #279fcf;
    width: 15px;
    height: 15px;
    border-radius: 100% !important;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.7s 0s infinite linear;
    animation: ball-beat 0.7s 0s infinite linear;
}
.ball-beat > div:nth-child(2n-1) {
    -webkit-animation-delay: 0.35s !important;
    animation-delay: 0.35s !important;
}

/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
.la-ball-climbing-dot,
.la-ball-climbing-dot > div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.la-ball-climbing-dot {
    display: block;
    font-size: 0;
    color: #fff;
}
.la-ball-climbing-dot.la-dark {
    color: #333;
}
.la-ball-climbing-dot > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-ball-climbing-dot {
    width: 42px;
    height: 32px;
}
.la-ball-climbing-dot > div:nth-child(1) {
    position: absolute;
    bottom: 32%;
    left: 18%;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
    -moz-animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
    -o-animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
    animation: ball-climbing-dot-jump 0.6s ease-in-out infinite;
}
.la-ball-climbing-dot > div:not(:nth-child(1)) {
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 2px;
    border-radius: 0;
    -webkit-transform: translate(60%, 0);
    -moz-transform: translate(60%, 0);
    -ms-transform: translate(60%, 0);
    -o-transform: translate(60%, 0);
    transform: translate(60%, 0);
    -webkit-animation: ball-climbing-dot-steps 1.8s linear infinite;
    -moz-animation: ball-climbing-dot-steps 1.8s linear infinite;
    -o-animation: ball-climbing-dot-steps 1.8s linear infinite;
    animation: ball-climbing-dot-steps 1.8s linear infinite;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(2) {
    -webkit-animation-delay: 0ms;
    -moz-animation-delay: 0ms;
    -o-animation-delay: 0ms;
    animation-delay: 0ms;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(3) {
    -webkit-animation-delay: -600ms;
    -moz-animation-delay: -600ms;
    -o-animation-delay: -600ms;
    animation-delay: -600ms;
}
.la-ball-climbing-dot > div:not(:nth-child(1)):nth-child(4) {
    -webkit-animation-delay: -1200ms;
    -moz-animation-delay: -1200ms;
    -o-animation-delay: -1200ms;
    animation-delay: -1200ms;
}
.la-ball-climbing-dot.la-sm {
    width: 20px;
    height: 16px;
}
.la-ball-climbing-dot.la-sm > div:nth-child(1) {
    width: 6px;
    height: 6px;
}
.la-ball-climbing-dot.la-sm > div:not(:nth-child(1)) {
    width: 6px;
    height: 1px;
}
.la-ball-climbing-dot.la-2x {
    width: 84px;
    height: 64px;
}
.la-ball-climbing-dot.la-2x > div:nth-child(1) {
    width: 28px;
    height: 28px;
}
.la-ball-climbing-dot.la-2x > div:not(:nth-child(1)) {
    width: 28px;
    height: 4px;
}
.la-ball-climbing-dot.la-3x {
    width: 126px;
    height: 96px;
}
.la-ball-climbing-dot.la-3x > div:nth-child(1) {
    width: 42px;
    height: 42px;
}
.la-ball-climbing-dot.la-3x > div:not(:nth-child(1)) {
    width: 42px;
    height: 6px;
}
[data-loader] {
    margin: 8px;
}
[data-loader="circle"] {
    width: 25px;
    height: 25px;

    -webkit-animation: circle infinite 0.75s linear;
    -moz-animation: circle infinite 0.75s linear;
    -o-animation: circle infinite 0.75s linear;
    animation: circle infinite 0.75s linear;

    border: 2px solid #fff;
    border-top-color: transparent;
    border-radius: 100%;
}
[data-loader="circle-side"] {
    position: relative;

    width: 25px;
    height: 25px;

    -webkit-animation: circle infinite 0.75s linear;
    -moz-animation: circle infinite 0.75s linear;
    -o-animation: circle infinite 0.75s linear;
    animation: circle infinite 0.75s linear;

    border: 2px solid #fff;
    border-top-color: rgba(0, 0, 0, 0.2);
    border-right-color: rgba(0, 0, 0, 0.2);
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
}

@-webkit-keyframes circle {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-moz-keyframes circle {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-o-keyframes circle {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes circle {
    0% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

[data-loader="arrow-circle"] {
    position: relative;

    width: 25px;
    height: 25px;

    -webkit-animation: arrow-circle infinite 0.75s linear;
    -moz-animation: arrow-circle infinite 0.75s linear;
    -o-animation: arrow-circle infinite 0.75s linear;
    animation: arrow-circle infinite 0.75s linear;

    border: 2px solid #fff;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 100%;
}
[data-loader="arrow-circle"]:before,
[data-loader="arrow-circle"]:after {
    position: absolute;
    top: 19px;
    left: -3px;

    content: "";
    -webkit-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    -o-transform: rotate(-30deg);
    transform: rotate(-30deg);

    border-top: 5px solid #fff;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
}
[data-loader="arrow-circle"]:after {
    top: 0;
    left: 17px;

    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    -o-transform: rotate(150deg);
    transform: rotate(150deg);
}

@-webkit-keyframes arrow-circle {
    0% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    100% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
}

@-moz-keyframes arrow-circle {
    0% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    100% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
}

@-o-keyframes arrow-circle {
    0% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    100% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
}

@keyframes arrow-circle {
    0% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    100% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        -o-transform: rotate(0);
        transform: rotate(0);
    }
}

[data-loader="ball-scale"] {
    width: 50px;
    height: 50px;

    -webkit-animation: ball-scale infinite linear 0.75s;
    -moz-animation: ball-scale infinite linear 0.75s;
    -o-animation: ball-scale infinite linear 0.75s;
    animation: ball-scale infinite linear 0.75s;

    border-radius: 100%;
    background-color: #fff;
}
@-webkit-keyframes ball-scale {
    0% {
        -webkit-transform: scale(0.1);
        -ms-transform: scale(0.1);
        -o-transform: scale(0.1);
        transform: scale(0.1);

        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);

        opacity: 0;
    }
}

@-moz-keyframes ball-scale {
    0% {
        -webkit-transform: scale(0.1);
        -ms-transform: scale(0.1);
        -o-transform: scale(0.1);
        transform: scale(0.1);

        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);

        opacity: 0;
    }
}

@-o-keyframes ball-scale {
    0% {
        -webkit-transform: scale(0.1);
        -ms-transform: scale(0.1);
        -o-transform: scale(0.1);
        transform: scale(0.1);

        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);

        opacity: 0;
    }
}

@keyframes ball-scale {
    0% {
        -webkit-transform: scale(0.1);
        -ms-transform: scale(0.1);
        -o-transform: scale(0.1);
        transform: scale(0.1);

        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);

        opacity: 0;
    }
}

[data-loader="ball-rotate"] {
    position: relative;

    width: 15px;
    height: 15px;

    -webkit-animation: ball-rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86)
        infinite;
    -moz-animation: ball-rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86)
        infinite;
    -o-animation: ball-rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86)
        infinite;
    animation: ball-rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;

    border-radius: 100%;
    background-color: #fff;

    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
[data-loader="ball-rotate"]:before,
[data-loader="ball-rotate"]:after {
    position: absolute;

    width: 15px;
    height: 15px;
    margin: 2px;

    content: "";

    opacity: 0.8;
    border-radius: 100%;
    background-color: #fff;
}
[data-loader="ball-rotate"]:before {
    top: 0;
    left: -28px;
}
[data-loader="ball-rotate"]:after {
    top: 0;
    left: 25px;
}
@-webkit-keyframes ball-rotate {
    0% {
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        -o-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
    }
    50% {
        -webkit-transform: rotate(180deg) scale(0.6);
        -ms-transform: rotate(180deg) scale(0.6);
        -o-transform: rotate(180deg) scale(0.6);
        transform: rotate(180deg) scale(0.6);
    }
    100% {
        -webkit-transform: rotate(360deg) scale(1);
        -ms-transform: rotate(360deg) scale(1);
        -o-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}
@-moz-keyframes ball-rotate {
    0% {
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        -o-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
    }
    50% {
        -webkit-transform: rotate(180deg) scale(0.6);
        -ms-transform: rotate(180deg) scale(0.6);
        -o-transform: rotate(180deg) scale(0.6);
        transform: rotate(180deg) scale(0.6);
    }
    100% {
        -webkit-transform: rotate(360deg) scale(1);
        -ms-transform: rotate(360deg) scale(1);
        -o-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}
@-o-keyframes ball-rotate {
    0% {
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        -o-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
    }
    50% {
        -webkit-transform: rotate(180deg) scale(0.6);
        -ms-transform: rotate(180deg) scale(0.6);
        -o-transform: rotate(180deg) scale(0.6);
        transform: rotate(180deg) scale(0.6);
    }
    100% {
        -webkit-transform: rotate(360deg) scale(1);
        -ms-transform: rotate(360deg) scale(1);
        -o-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}
@keyframes ball-rotate {
    0% {
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        -o-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
    }
    50% {
        -webkit-transform: rotate(180deg) scale(0.6);
        -ms-transform: rotate(180deg) scale(0.6);
        -o-transform: rotate(180deg) scale(0.6);
        transform: rotate(180deg) scale(0.6);
    }
    100% {
        -webkit-transform: rotate(360deg) scale(1);
        -ms-transform: rotate(360deg) scale(1);
        -o-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}

[data-loader="ball-pulse"] {
    position: relative;

    width: 1px;
    height: 1px;
}
[data-loader="ball-pulse"]:before,
[data-loader="ball-pulse"]:after {
    position: absolute;
    display: inline-block;

    width: 15px;
    height: 15px;

    content: "";

    border-radius: 100%;
    background-color: #fff;
}
[data-loader="ball-pulse"]:before {
    left: -15px;

    -webkit-animation: ball-pulse infinite 0.75s -0.4s cubic-bezier(0.2, 0.68, 0.18, 1.08);
    -moz-animation: ball-pulse infinite 0.75s -0.4s cubic-bezier(0.2, 0.68, 0.18, 1.08);
    -o-animation: ball-pulse infinite 0.75s -0.4s cubic-bezier(0.2, 0.68, 0.18, 1.08);
    animation: ball-pulse infinite 0.75s -0.4s cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
[data-loader="ball-pulse"]:after {
    right: -15px;

    -webkit-animation: ball-pulse infinite 0.75s
        cubic-bezier(0.2, 0.68, 0.18, 1.08);
    -moz-animation: ball-pulse infinite 0.75s
        cubic-bezier(0.2, 0.68, 0.18, 1.08);
    -o-animation: ball-pulse infinite 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08);
    animation: ball-pulse infinite 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
@-webkit-keyframes ball-pulse {
    0% {
        transform: scale(1);

        opacity: 1;
    }
    50% {
        transform: scale(0.1);

        opacity: 0.6;
    }
    100% {
        transform: scale(1);

        opacity: 1;
    }
}
@-moz-keyframes ball-pulse {
    0% {
        transform: scale(1);

        opacity: 1;
    }
    50% {
        transform: scale(0.1);

        opacity: 0.6;
    }
    100% {
        transform: scale(1);

        opacity: 1;
    }
}
@-o-keyframes ball-pulse {
    0% {
        transform: scale(1);

        opacity: 1;
    }
    50% {
        transform: scale(0.1);

        opacity: 0.6;
    }
    100% {
        transform: scale(1);

        opacity: 1;
    }
}
@keyframes ball-pulse {
    0% {
        transform: scale(1);

        opacity: 1;
    }
    50% {
        transform: scale(0.1);

        opacity: 0.6;
    }
    100% {
        transform: scale(1);

        opacity: 1;
    }
}

[data-loader="ball-circle"] {
    position: relative;

    width: 40px;
    height: 40px;
}
[data-loader="ball-circle"]:before,
[data-loader="ball-circle"]:after {
    position: absolute;

    width: 10px;
    height: 10px;

    content: "";

    border-radius: 100%;
    background-color: #fff;
}
[data-loader="ball-circle"]:before {
    transform: translate(0, 0);
    -webkit-animation: ball-circle-before infinite 1.5s linear;
    -moz-animation: ball-circle-before infinite 1.5s linear;
    -o-animation: ball-circle-before infinite 1.5s linear;
    animation: ball-circle-before infinite 1.5s linear;
}
[data-loader="ball-circle"]:after {
    transform: translate(30px, 30px);
    -webkit-animation: ball-circle-after infinite 1.5s linear;
    -moz-animation: ball-circle-after infinite 1.5s linear;
    -o-animation: ball-circle-after infinite 1.5s linear;
    animation: ball-circle-after infinite 1.5s linear;
}

@-webkit-keyframes ball-circle-after {
    0% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    25% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    50% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    75% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    100% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
}
@-moz-keyframes ball-circle-after {
    0% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    25% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    50% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    75% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    100% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
}
@-o-keyframes ball-circle-after {
    0% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    25% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    50% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    75% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    100% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
}
@keyframes ball-circle-after {
    0% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    25% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    50% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    75% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    100% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
}

@-webkit-keyframes ball-circle-before {
    0% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    25% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    50% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    75% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
@-moz-keyframes ball-circle-before {
    0% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    25% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    50% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    75% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
@-o-keyframes ball-circle-before {
    0% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    25% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    50% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    75% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
@keyframes ball-circle-before {
    0% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    25% {
        -webkit-transform: translate(30px, 0);
        -ms-transform: translate(30px, 0);
        -o-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    50% {
        -webkit-transform: translate(30px, 30px);
        -ms-transform: translate(30px, 30px);
        -o-transform: translate(30px, 30px);
        transform: translate(30px, 30px);
    }
    75% {
        -webkit-transform: translate(0, 30px);
        -ms-transform: translate(0, 30px);
        -o-transform: translate(0, 30px);
        transform: translate(0, 30px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

[data-loader="rectangle"] {
    position: relative;

    width: 10px;
    height: 30px;

    -webkit-animation: rectangle infinite 1s ease-in-out -0.2s;
    -moz-animation: rectangle infinite 1s ease-in-out -0.2s;
    -o-animation: rectangle infinite 1s ease-in-out -0.2s;
    animation: rectangle infinite 1s ease-in-out -0.2s;

    background-color: #fff;
}
[data-loader="rectangle"]:before,
[data-loader="rectangle"]:after {
    position: absolute;

    width: 10px;
    height: 30px;

    content: "";

    background-color: #fff;
}
[data-loader="rectangle"]:before {
    left: -20px;

    -webkit-animation: rectangle infinite 1s ease-in-out -0.4s;
    -moz-animation: rectangle infinite 1s ease-in-out -0.4s;
    -o-animation: rectangle infinite 1s ease-in-out -0.4s;
    animation: rectangle infinite 1s ease-in-out -0.4s;
}
[data-loader="rectangle"]:after {
    right: -20px;

    -webkit-animation: rectangle infinite 1s ease-in-out;
    -moz-animation: rectangle infinite 1s ease-in-out;
    -o-animation: rectangle infinite 1s ease-in-out;
    animation: rectangle infinite 1s ease-in-out;
}
@-webkit-keyframes rectangle {
    0%,
    80%,
    100% {
        height: 35px;

        -webkit-box-shadow: 0 0 #fff;
        box-shadow: 0 0 #fff;
    }
    40% {
        height: 45px;

        -webkit-box-shadow: 0 -20px #fff;
        box-shadow: 0 -20px #fff;
    }
}
@-moz-keyframes rectangle {
    0%,
    80%,
    100% {
        height: 35px;

        -webkit-box-shadow: 0 0 #fff;
        box-shadow: 0 0 #fff;
    }
    40% {
        height: 45px;

        -webkit-box-shadow: 0 -20px #fff;
        box-shadow: 0 -20px #fff;
    }
}
@-o-keyframes rectangle {
    0%,
    80%,
    100% {
        height: 35px;

        -webkit-box-shadow: 0 0 #fff;
        box-shadow: 0 0 #fff;
    }
    40% {
        height: 45px;

        -webkit-box-shadow: 0 -20px #fff;
        box-shadow: 0 -20px #fff;
    }
}
@keyframes rectangle {
    0%,
    80%,
    100% {
        height: 35px;

        -webkit-box-shadow: 0 0 #fff;
        box-shadow: 0 0 #fff;
    }
    40% {
        height: 45px;

        -webkit-box-shadow: 0 -20px #fff;
        box-shadow: 0 -20px #fff;
    }
}
[data-loader="heart"] {
    position: relative;

    width: 100px;
    height: 90px;

    -webkit-animation: heart infinite 0.85s linear;
    -moz-animation: heart infinite 0.85s linear;
    -o-animation: heart infinite 0.85s linear;
    animation: heart infinite 0.85s linear;
}
[data-loader="heart"]:before,
[data-loader="heart"]:after {
    position: absolute;
    top: 0;
    left: 30px;

    width: 30px;
    height: 50px;

    content: "";
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;

    -moz-border-radius: 30px 30px 0 0;
    border-radius: 30px 30px 0 0;
    background: #fff;
}
[data-loader="heart"]:after {
    left: 0;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
@-webkit-keyframes heart {
    0% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
    50% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
}
@-moz-keyframes heart {
    0% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
    50% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
}
@-o-keyframes heart {
    0% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
    50% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
}
@keyframes heart {
    0% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
    50% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        -o-transform: scale(0.8);
        transform: scale(0.8);
    }
}

[data-loader="jumping"] {
    position: relative;

    width: 50px;

    -webkit-perspective: 200px;
    -moz-perspective: 200px;
    -ms-perspective: 200px;
    perspective: 200px;
}
[data-loader="jumping"]:before,
[data-loader="jumping"]:after {
    position: absolute;

    width: 20px;
    height: 20px;

    content: "";
    animation: jumping 0.5s infinite alternate;

    background: rgba(0, 0, 0, 0);
}
[data-loader="jumping"]:before {
    left: 0;
}
[data-loader="jumping"]:after {
    right: 0;

    animation-delay: 0.15s;
}
@-webkit-keyframes jumping {
    0% {
        -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
        -ms-transform: scale(1) translateY(0px) rotateX(0deg);
        -o-transform: scale(1) translateY(0px) rotateX(0deg);
        transform: scale(1) translateY(0px) rotateX(0deg);

        -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        transform: scale(1.2) translateY(-25px) rotateX(45deg);

        background: rgb(255, 255, 255);
        -webkit-box-shadow: 0 25px 40px rgb(255, 255, 255);
        box-shadow: 0 25px 40px rgb(255, 255, 255);
    }
}
@-moz-keyframes jumping {
    0% {
        -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
        -ms-transform: scale(1) translateY(0px) rotateX(0deg);
        -o-transform: scale(1) translateY(0px) rotateX(0deg);
        transform: scale(1) translateY(0px) rotateX(0deg);

        -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        transform: scale(1.2) translateY(-25px) rotateX(45deg);

        background: rgb(255, 255, 255);
        -webkit-box-shadow: 0 25px 40px rgb(255, 255, 255);
        box-shadow: 0 25px 40px rgb(255, 255, 255);
    }
}
@-o-keyframes jumping {
    0% {
        -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
        -ms-transform: scale(1) translateY(0px) rotateX(0deg);
        -o-transform: scale(1) translateY(0px) rotateX(0deg);
        transform: scale(1) translateY(0px) rotateX(0deg);

        -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        transform: scale(1.2) translateY(-25px) rotateX(45deg);

        background: rgb(255, 255, 255);
        -webkit-box-shadow: 0 25px 40px rgb(255, 255, 255);
        box-shadow: 0 25px 40px rgb(255, 255, 255);
    }
}
@keyframes jumping {
    0% {
        -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
        -ms-transform: scale(1) translateY(0px) rotateX(0deg);
        -o-transform: scale(1) translateY(0px) rotateX(0deg);
        transform: scale(1) translateY(0px) rotateX(0deg);

        -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
        transform: scale(1.2) translateY(-25px) rotateX(45deg);

        background: rgb(255, 255, 255);
        -webkit-box-shadow: 0 25px 40px rgb(255, 255, 255);
        box-shadow: 0 25px 40px rgb(255, 255, 255);
    }
}

[data-loader="satellite"] {
    position: relative;

    width: 48px;
    height: 48px;

    animation: satellite 3s infinite linear;

    border: 1px solid #fff;
    border-radius: 100%;
}
[data-loader="satellite"]:before,
[data-loader="satellite"]:after {
    position: absolute;
    left: 0;

    width: 15px;
    height: 15px;

    content: "";

    border-radius: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 0 10px #fff;
    box-shadow: 0 0 10px #fff;
}
[data-loader="satellite"]:after {
    right: 0;

    width: 24px;
    height: 24px;
    margin: 12px;
}

@-webkit-keyframes satellite {
    from {
        -webkit-transform: rotate(0) translateZ(0);
        -ms-transform: rotate(0) translateZ(0);
        -o-transform: rotate(0) translateZ(0);
        transform: rotate(0) translateZ(0);
    }
    to {
        -webkit-transform: rotate(360deg) translateZ(0);
        -ms-transform: rotate(360deg) translateZ(0);
        -o-transform: rotate(360deg) translateZ(0);
        transform: rotate(360deg) translateZ(0);
    }
}
@-moz-keyframes satellite {
    from {
        -webkit-transform: rotate(0) translateZ(0);
        -ms-transform: rotate(0) translateZ(0);
        -o-transform: rotate(0) translateZ(0);
        transform: rotate(0) translateZ(0);
    }
    to {
        -webkit-transform: rotate(360deg) translateZ(0);
        -ms-transform: rotate(360deg) translateZ(0);
        -o-transform: rotate(360deg) translateZ(0);
        transform: rotate(360deg) translateZ(0);
    }
}
@-o-keyframes satellite {
    from {
        -webkit-transform: rotate(0) translateZ(0);
        -ms-transform: rotate(0) translateZ(0);
        -o-transform: rotate(0) translateZ(0);
        transform: rotate(0) translateZ(0);
    }
    to {
        -webkit-transform: rotate(360deg) translateZ(0);
        -ms-transform: rotate(360deg) translateZ(0);
        -o-transform: rotate(360deg) translateZ(0);
        transform: rotate(360deg) translateZ(0);
    }
}
@keyframes satellite {
    from {
        -webkit-transform: rotate(0) translateZ(0);
        -ms-transform: rotate(0) translateZ(0);
        -o-transform: rotate(0) translateZ(0);
        transform: rotate(0) translateZ(0);
    }
    to {
        -webkit-transform: rotate(360deg) translateZ(0);
        -ms-transform: rotate(360deg) translateZ(0);
        -o-transform: rotate(360deg) translateZ(0);
        transform: rotate(360deg) translateZ(0);
    }
}
</style>