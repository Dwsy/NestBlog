<template>
    <v-row>
        <div v-on:keyup.enter="search">
            <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on }">
                    <v-text-field
                        flat
                        clearable
                        hide-details
                        label="搜索....."
                        prepend-inner-icon="mdi-magnify"
                        dense
                        full-width
                        v-model="text"
                        class="input-search "
                        autocomplete="off"
                        v-on="on"
                        ref="search"
                    ></v-text-field>
                </template>
                <v-list v-if="text.length > 0" class="border-list" fill-height>
                    <!-- 标题 -->
                    <v-list-item
                        v-for="item in title.slice(0, 7)"
                        v-show="title.length !== 0"
                        :key="item._id"
                        :to="'/article/' + item.contentsId"
                    >
                        <v-list-item-title class="font-weight-normal">
                            <v-icon>{{ "mdi-access-point" }}</v-icon>
                            标题:<span v-html="item._highlights"></span>
                        </v-list-item-title>
                        <v-divider></v-divider>
                    </v-list-item>
                    <!-- 内容 -->
                    <v-list-item
                        v-for="item in content.slice(0, 7)"
                        v-show="content.length !== 0"
                        :key="item._id"
                        :to="'/article/' + item._id"
                    >
                        <v-icon>{{ "mdi-text" }}</v-icon>
                        <v-list-item-title class="font-weight-normal">
                            <!--                            <a :href="'/article/' + item._id">-->
                            <!--                            内容:<span v-html="item._highlights.substr(item._highlights.indsexOf(this.search),20)"></span>-->
                            内容:<span v-html="item._highlights"></span>
                            <!--                            </a>-->
                        </v-list-item-title>
                        <v-divider></v-divider>
                    </v-list-item>
                    <!-- Tag -->
                    <v-sheet v-show="tag.length !== 0">
                        <Tag v-bind:tags="tag" />
                    </v-sheet>

                    <!-- 分类 -->
                    <v-list-item
                        v-for="item in classification"
                        v-show="classification.length !== 0"
                        :key="item._id"
                        :to="'/classification/' + item._id"
                    >
                        <v-list-item-title class="font-weight-normal">
                            <v-icon>{{ "mdi-book-variant" }}</v-icon>
                            <!--                            <a :href="'/classification/' + item._id">-->
                            分类:<span v-html="item._highlights"></span>
                            <!--                            </a>-->
                        </v-list-item-title>
                        <v-divider></v-divider>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list
                        v-show="
                            tag.length === 0 &&
                                classification.length === 0 &&
                                content.length === 0 &&
                                title.length === 0
                        "
                    >
                        <v-toolbar-title class="font-weight-normal">
                            ❌无搜索结果❌
                        </v-toolbar-title>
                    </v-list>
                </v-list>
            </v-menu>
        </div>
    </v-row>
</template>
<script>
import Tag from "./article/Tag";

export default {
    components: {
        Tag
    },
    props: {
        SearchFunction: {
            type: Function
        }
    },
    data() {
        return {
            text: "",
            showSelect: true,
            items: [],
            title: [],
            tag: [],
            content: [],
            classification: [],
            now: "`"
        };
    },
    watch: {
        text: "inputHandle"
    },
    methods: {
        itemClick(item) {
            this.text = item.name;
            this.$refs.search.blur();
            // this.$router.push()
        },
        inputHandle(text) {
            if (text?.trim() !== "") {
                this.showSelect = true;
                setTimeout(() => {
                    this.getEntity();
                }, 700);
            }
        },
        async getEntity() {
            // 请求接口更新 items 数据
            // let a= this.$emit('search',this.text);
            if (this.now !== this.text && this.text !== "") {
                this.now = String(this.text);
                let Sdata;
                Sdata = await this.SearchFunction(this.text);
                // console.log(Sdata);
                this.tag = Sdata.S_tag;
                // console.log(this.tag);
                this.content = Sdata.S_content;
                this.classification = Sdata.S_classification;
                this.title = Sdata.S_title;
            }
            this.highlights();
        },
        search() {
            this.$refs.search.blur();
            // console.log(this.text);
            // this.$router.push()
        },
        highlights() {
            const search = this.text;
            this.title = this.title.map(item => {
                for (let key in item) {
                    if (key === "title") {
                        // console.log(key);
                        let replaceReg = new RegExp(search, "g"); // 匹配关键字正则
                        let replaceString =
                            '<span class="highlights-text">' +
                            search +
                            "</span>"; // 高亮替换v-html值
                        item["_highlights"] = item[key].replace(
                            replaceReg,
                            replaceString
                        ); // 开始替换
                    }
                }
                return item;
            });

            this.classification = this.classification.map(item => {
                for (let key in item) {
                    if (key === "name") {
                        // console.log(key);
                        let replaceReg = new RegExp(search, "g"); // 匹配关键字正则
                        let replaceString =
                            '<span class="highlights-text">' +
                            search +
                            "</span>"; // 高亮替换v-html值
                        item["_highlights"] = item[key].replace(
                            replaceReg,
                            replaceString
                        ); // 开始替换
                    }
                }
                return item;
            });

            this.content = this.content.map(item => {
                for (let key in item) {
                    if (key === "text") {
                        // console.log(key)
                        let replaceReg = new RegExp(search, "g"); // 匹配关键字正则
                        let replaceString =
                            '<span class="highlights-text">' +
                            search +
                            "</span>"; // 高亮替换v-html值
                        let len = item[key].length;
                        let index = item[key].indexOf(this.text);
                        if (len > 162) {
                            item[key] = item[key].substr(index - 10, 152);
                        }
                        // item[key]=item[key].substr(index-10,152)
                        item["_highlights"] = item[key].replace(
                            replaceReg,
                            replaceString
                        ); // 开始替换
                    }
                }
                return item;
            });
        }
    },
    filters: {
        ellipsis(value) {
            if (!value) return "";
            if (value.length > 64) {
                return value.slice(0, 64) + "...";
            }
            return value;
        }
    }
};
</script>
<style scoped>
a {
    text-decoration: none;
    width: 100%;
    height: 100%;
}

::-webkit-scrollbar {
    width: 0px;
}

.input-search {
    width: 100%;
    margin: auto;
}

/*.width-20-percent {*/
/*    width: 30%;*/
/*}*/
/*.img-div {*/
/*    margin: 16vh 0 40px 0;*/
/*    text-align: center;*/
/*}*/
/*.v-menu__content {*/
/*    box-shadow: none !important;*/
/*}*/
.border-list {
    border: 0px solid #eee !important;
}
</style>
<style lang="scss">
.highlights-text {
    color: #ff5134;
}
</style>
