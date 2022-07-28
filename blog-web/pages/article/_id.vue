<template>
    <v-container v-if="content.key !== 0">
<!--        <div>-->
<!--            <HeadImage :cover="field.cover" />-->
<!--        </div>-->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.min.js"></script> -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
        />
        <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
                <div>
                    <br />
                    <Content
                        class="js-toc-content"
                        :content="content"
                        :field="field"
                    />
                    <p>浏览量:{{ view }}</p>
                    <ContentTag :tags="field.tag" />
                    <CommentList :comments="comments" :id="id" :IP="IP" />
                    <SendComment :id="id" :IP="IP" :getComments="getComments" />
                </div>
            </v-col>
            <v-col v-if="pc" cols="2" xl="2" lg="2" md="2" sm="11" xs="11">
                <br />
                <Toc />
            </v-col>
            <div v-else class="toc">
                <ol class="js-toc"></ol>
            </div>
        </v-row>

    </v-container>
    <h2 v-else>⭕没有权限访问此文章</h2>
</template>
<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";
import SendComment from "../../components/article/sendComment.vue";
import HeadImage from "../../components/article/HeadImage";
import ContentTag from "../../components/article/ContentTag";
import Toc from "../../components/article/Toc";
import tocbot from "tocbot";
// import Ccomment from '../../components/article/Ccomment';
export default {
    async asyncData({ $axios, params }) {
        let id = params.id;
        // console.log(params);
        // if (id === undefined) {
        //     // $router.push('/');
        //     id = "603e751045d89d46e830734a"; //直接通过前缀访问跳转
        // }
        const data = await $axios.$get(`contents/all/${id}`);
        // console.log(data)
        const content = data.content
        const view = data.view
        // alert(view)
        const field =data.fieled
        if (content.key === 0) {
            return {
                content: content,
            };
        }

        return {
            comments: {},
            IP: "",
            content: content,
            id: id,
            // IP: ipData.query,
            field: field,
            view: view,
            // toc: content.menus.menus,
            pc: true,
        };
    },
    mounted() {
        let innerWidth = window.innerWidth;
        if (innerWidth > 960&&!this.isMobile()) {
            this.pc = true;
            let a= document.getElementsByClassName("tocbtn")
            a[0].style.display="none"
        } else {
            this.pc = false;
            // console.log("this.pc = false;");
            let a= document.getElementsByClassName("tocbtn")

            setTimeout(() => this.createToc(), 500);
            setTimeout(() => a[0].style.display="block", 500);
        }
        setTimeout(() => this.getComments(), 1000);
    },
    methods: {
        isMobile() {
            var userAgentInfo = navigator.userAgent;

            var mobileAgents = [
                "Android",
                "iPhone",
                "SymbianOS",
                "Windows Phone",
                "iPad",
                "iPod",
            ];

            var mobile_flag = false;

            //根据userAgent判断是否是手机
            for (var v = 0; v < mobileAgents.length; v++) {
                if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                    mobile_flag = true;
                    break;
                }
            }

            var screen_width = window.screen.width;
            var screen_height = window.screen.height;

            //根据屏幕分辨率判断是否是手机
            if (screen_width < 500 && screen_height < 800) {
                mobile_flag = true;
            }

            return mobile_flag;
        },
        async getComments() {
            const comments = await this.$axios.$get(`comments/${this.id}`);
            // const comments = await this.$axios.$get(`comments/603e751045d89d46e830734a`);
            // console.log(comments);
            const userData = await this.$axios.$get(`fields/user`);
            this.comments = comments;
            this.IP = userData.ip;
            this.UA = userData.ua;
        },
        createToc() {
            tocbot.init({
                // Where to render the table of contents.
                tocSelector: ".js-toc",
                // Where to grab the headings to build the table of contents.
                contentSelector: ".js-toc-content",
                // Which headings to grab inside of the contentSelector element.
                headingSelector: "h1, h2, h3,h4,h5,h6",
                // For headings inside relative or absolute positioned containers within content.
                hasInnerContainers: true,
                includeHtml: true,
                includeTitleTags: false,
                scrollSmoothOffset: -80,
            });
        },
    },
    components: {
        Content,
        CommentList,
        SendComment,
        HeadImage,
        ContentTag,
        Toc,
        // Ccomment
    },
};
// console.log(this.id);
</script>

<style>
img {
    height: 100%;
    width: 100%;
}
.toc::-webkit-scrollbar {
    width: 0 !important;
}
.toc {
    position: fixed;
    top: 165px;
    right: -300px;
    width: 240px;
    height: auto;
    transition: all 0.2s ease 0s;
    margin-bottom: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease 0s;

    z-index: 1;

    border-radius: 6px;
    padding: 10px;
    color: #fff;
    font-size: 16px;
    overflow: hidden;
    margin: 100px auto;
    backdrop-filter: blur(10px);

    background-color: rgba(12, 52, 90, 0.555);
}
</style>
