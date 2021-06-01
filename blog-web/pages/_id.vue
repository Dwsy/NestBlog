<template>
    <div>
        <div>
            <PPT v-bind:ppts="ppt"/>
        </div>
        <v-row>
            <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
                <div>
                    <br/>
                    <!-- <h2 class="font-weight-bold pb-4">文章列表</h2> -->
                    <v-row>
                        <v-col>
                            <ArticleList v-bind:fields="fields"/>

                            <div class="text-center">
                                <v-pagination
                                    v-model="page"
                                    v-bind:length="lastPage - 1"
                                ></v-pagination>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>

            <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
                <div>
                    <br/>

                    <Recently v-bind:recently="recently"/>
                    <Top-50 v-bind:pixivTop="pixivTop"/>
                    <p class="text-h6 pb-4">标签</p>
                    <Tag v-if="tag!=={}" v-bind:tags="tag"/>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PPT from "../components/article/PPT";
import Tag from "../components/article/Tag";
import Recently from "../components/Comment/Recently";
import Top50 from "../components/Top50";
import ArticleList from "../components/article/ArticleList";
import Paging from "../components/article/Paging";

export default {
    components: {
        PPT,
        Tag,
        Recently,
        Top50,
        ArticleList,
        Paging
    },
    async asyncData({$axios, params}) {
        let id = params.id;
        const fieldsData = await $axios.$get("fields", {
            params: {
                query: {
                    limit: 8,
                    page: id,
                    sort: "-_id",
                    populate: "tag classification"
                }
            }
        });
        const recentlyData = await $axios.$get("comments/recently");
        // const pixivTop = await $axios.$get("/theme/pixiv");
        // const tagData = await $axios.$get("tag", {
        //     params: {
        //         query: {
        //             limit: 777,
        //             sort: "-contentsNum"
        //         }
        //     }
        // });
        const pptData = await $axios.$get("ppt", {
            params: {
                query: {
                    sort: "rank"
                }
            }
        });

        return {
            fields: fieldsData.data,
            ppt: pptData.data,
            recently: recentlyData,
            // tag: tagData.data,
            tag: {},
            total: parseInt(fieldsData.total),
            lastPage: parseInt(fieldsData.lastPage),
            page: parseInt(fieldsData.page) || 1,
            // pixivTop: pixivTop
            pixivTop: {}
        };
    },
    mounted() {
        setTimeout(() => {
            this.getPixiv()
            setTimeout(() => this.getTag(), 100);
        }, 100);

    },
    methods: {
        async getPixiv() {
        this.pixivTop = JSON.parse(localStorage.getItem("pixivTop"))
        if(this.pixivTop===null){
            this.pixivTop = await this.$axios.$get("/theme/pixiv");
            localStorage.setItem("pixivTop", JSON.stringify(this.pixivTop));
        }
        // this.pixivTop = await this.$axios.$get("/theme/pixiv");
        },
        async getTag() {
        this.tag = JSON.parse(localStorage.getItem("tag"))
        if(this.tag===null){
            this.tag = (await this.$axios.$get("/tag", {
                params: {
                    query: {
                        limit: 777,
                        sort: "-contentsNum"
                    }
                }
            }))['data'];
            localStorage.setItem("tag", JSON.stringify(this.tag));
        }

            // this.tag = (await this.$axios.$get("/tag", {
            //     params: {
            //         query: {
            //             limit: 777,
            //             sort: "-contentsNum"
            //         }
            //     }
            // }))['data'];
        }
    },

    watch: {
        page: {
            handler(val) {
                this.$router.push(`${this.page}`);
            }
            // deep: true
        }
    }
};
</script>
<style scoped>
</style>
