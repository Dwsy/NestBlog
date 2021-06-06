<template>
    <v-container v-if="content.key !== 0">
        <div>
            <HeadImage :cover="field.cover" />
        </div>
        <v-row>
            <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12">
                <div>
                    <br />

                            <p>浏览量:{{ view.view }}</p>
                            <Content :content="content" :field="field" />
                            <ContentTag :tags="field.tag" />
                            <CommentList
                                :comments="comments"
                                :id="id"
                                :IP="IP"
                            />
                            <SendComment :id="id" :IP="IP" />

                </div>
            </v-col>
            <v-col cols="2" xl="2" lg="2" md="2" sm="12" xs="12" >
                <br />
                <Toc :toc="toc" />
            </v-col>
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

// import Ccomment from '../../components/article/Ccomment';
export default {
    async asyncData({ $axios, params }) {
        let id = params.id;
        if (id === undefined) {
            id = "603e751045d89d46e830734a"; //直接通过前缀访问跳转
        }
        const content = await $axios.$get(`contents/${id}`);
        if (content.key == 0) {
            return {
                content: content
            };
        }
        const view = await $axios.$get(`/fields/view/${content.fieldsId}`);
        const field = await $axios.$get(`fields/${content.fieldsId}`, {
            params: {
                query: {
                    populate: "tag classification"
                }
            }
        });

        // const ipData = await $axios.$get(`http://ip-api.com/json/`);
        // const comments = await $axios.$get(`comments/${id}`);
        // const ipData = await $axios.$get(`fields/ip`);
        // console.log(ipData.query);
        return {
            comments: {},
            IP: "",
            content: content,
            id: id,
            // IP: ipData.query,
            field: field,
            view: view,
            toc: content.menus.menus
        };
    },
    mounted() {
        setTimeout(() => this.getComments(), 2000);
    },
    methods: {
        async getComments() {
            const comments = await this.$axios.$get(`comments/${this.id}`);
            // const comments = await this.$axios.$get(`comments/603e751045d89d46e830734a`);
            console.log(comments);
            const ipData = await this.$axios.$get(`fields/ip`);
            console.log(ipData);
            this.comments = comments;
            this.IP = ipData;
        }
    },
    components: {
        Content,
        CommentList,
        SendComment,
        HeadImage,
        ContentTag,
        Toc
        // Ccomment
    }
};
// console.log(this.id);
</script>

<style>
img {
    height: 100%;
    width: 100%;
}
</style>
