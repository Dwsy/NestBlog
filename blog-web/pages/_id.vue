<template>
    <div>
        <v-row>
            <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
                <PPT v-bind:ppts="ppt" />
            </v-col>
            <v-col class="pl" cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
                <Recently v-bind:recently="recently" />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
                <div>
                    <br />
                    <!-- <h2 class="font-weight-bold pb-4">文章列表</h2> -->
                    <v-row>
                        <v-col>
                            <ArticleList v-bind:fields="fields" />

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
                    <br />
                    <p class="text-h6 pb-4">标签</p>
                    <Tag v-if="tag !== {}" v-bind:tags="tag" />
                    <br>
                    <p class="text-h6 pb-4">Pixiv每日排行榜Top50</p>
                    <Top-50 v-bind:pixivTop="pixivTop" />
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
    async asyncData({ $axios, params }) {
        let id = params.id;
        if (id == undefined) {
            id = 1;
        }
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
        // const recentlyData = await $axios.$get("comments/recently");
        // 并载
        const recentlyData = fieldsData.recently;
        let fields = fieldsData.data;

        if (fields == false) {
            fields = [
                {
                    contentsId: "603e76d2700bde471cfe5f25",
                    title: "你发现了新大陆",
                    cover:
                        "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
                    coverSmall:
                        "http://fp1.fghrsh.net/2021/02/11/5c71db2ce6bdc10cf95a9c0a4df9e237.png",
                    classification: {},
                    createdAt: "2021-02-27T05:30:00.000Z",
                    updatedAt: "2022-02-04T19:38:34.155Z",
                    __v: 0,
                    commentsNum: 123,
                    isDraft: false,
                    view: 60
                }
            ];
        }
        return {
            fields: fields,
            // ppt: pptData.data,
            recently: recentlyData,
            // tag: tagData.data,
            total: parseInt(fieldsData.total),
            lastPage: parseInt(fieldsData.lastPage),
            page: parseInt(fieldsData.page) || 1
            // pixivTop: pixivTop
        };
    },
    mounted() {
        setTimeout(() => {
            this.getPpt();
            this.getPixiv();
            setTimeout(() => this.getTag(), 100);
        }, 0);
    },
    data() {
        return {
            tag: null,
            pixivTop: null,
            ppt: null
        };
    },
    methods: {
        async getPpt() {
            // this.ppt= (await this.$axios.$get("ppt", {
            //     params: {
            //         query: {
            //             sort: "rank"
            //         }
            //     }
            // })).data
            // console.log(this.ppt);
            let data = JSON.parse(localStorage.getItem("ppt"));
            if (data === null) {
                console.log("if");
                this.ppt = (
                    await this.$axios.$get("ppt", {
                        params: {
                            query: {
                                sort: "rank"
                            }
                        }
                    })
                ).data;
                localStorage.setItem(
                    "ppt",
                    JSON.stringify({
                        data: this.ppt,
                        date: new Date().getTime()
                    })
                );
            } else {
                console.log("else");

                if (data.date + 22200000 > new Date().getTime()) {
                    this.ppt = data.data;
                    console.log("使用缓存");
                } else {
                    console.log("更新缓存");
                    this.ppt = (
                        await this.$axios.$get("ppt", {
                            params: {
                                query: {
                                    sort: "rank"
                                }
                            }
                        })
                    ).data;
                    localStorage.setItem(
                        "ppt",
                        JSON.stringify({
                            data: this.ppt,
                            date: new Date().getTime()
                        })
                    );
                }
            }
        },
        async getPixiv() {
            let data = JSON.parse(localStorage.getItem("pixivTop"));
            if (data === null) {
                this.pixivTop = await this.$axios.$get("/theme/pixiv");
                localStorage.setItem(
                    "pixivTop",
                    JSON.stringify({
                        data: this.pixivTop,
                        date: new Date().getTime()
                    })
                );
            } else {
                if (data.date + 22200000 > new Date().getTime()) {
                    this.pixivTop = data.data;
                    // console.log("使用缓存");
                } else {
                    // console.log("更新缓存");
                    this.pixivTop = await this.$axios.$get("/theme/pixiv");
                    localStorage.setItem(
                        "pixivTop",
                        JSON.stringify({
                            data: this.pixivTop,
                            date: new Date().getTime()
                        })
                    );
                }
            }
        },
        async getTag() {
            let data = JSON.parse(localStorage.getItem("tag"));
            if (data === null) {
                this.tag = (
                    await this.$axios.$get("/tag", {
                        params: {
                            query: {
                                limit: 777,
                                sort: "-contentsNum"
                            }
                        }
                    })
                )["data"];
                localStorage.setItem(
                    "tag",
                    JSON.stringify({
                        data: this.tag,
                        date: new Date().getTime()
                    })
                );
            } else {
                if (data.date + 22200000 > new Date().getTime()) {
                    this.tag = data.data;
                    // console.log("使用缓存");
                } else {
                    // console.log("更新缓存");
                    this.tag = (
                        await this.$axios.$get("/tag", {
                            params: {
                                query: {
                                    limit: 777,
                                    sort: "-contentsNum"
                                }
                            }
                        })
                    )["data"];
                    localStorage.setItem(
                        "tag",
                        JSON.stringify({
                            data: this.tag,
                            date: new Date().getTime()
                        })
                    );
                }
            }
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
@media (max-height: 600px) {
    .fas {
        display: none !important;
    }
}

@media (max-width: 960px) {
    .pl {
        display: none !important;
    }
}
</style>
