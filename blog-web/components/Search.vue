<template>
    <v-row>
        <div v-on:keyup.enter="search">
            <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on }">
                    <v-text-field
                        flat
                        clearable
                        hide-details
                        label="搜索.."
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
                <v-list
                    v-if="text.length > 0"
                    class="border-list"
                    dense
                    fill-height
                >
                    <v-list-item
                        v-for="(item, index) in title.slice(0, 8)"
                        :key="index"
                        @click="itemClick(item)"
                    >
                        <v-list-item-title>
                            <v-icon>{{ "mdi-access-point" }}</v-icon>

                            <a :href="'/article/' + item.contentsId">
                                标题:{{ item.title }}
                            </a>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        v-for="(item, index) in content"
                        :key="index"
                        @click="itemClick(item)"
                    >
                        <v-icon>{{ "mdi-text" }}</v-icon>
                        <v-list-item-title>
                            <a :href="'/article/' + item._id">
                                内容:{{ item.mdText | ellipsis }}
                            </a>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-tile-title>
                        Tag列表:
                    </v-list-tile-title>
                    <v-list-></v-list->
                    <p></p>
                    <Tag v-bind:tags="tag" />

                    <v-list-item
                        v-for="(item, index) in classification"
                        :key="index"
                        @click="itemClick(item)"
                    >
                        <v-list-item-title>
                            <v-icon>{{ "mdi-book-variant" }}</v-icon>
                            <a :href="'/classification/' + item._id">
                                分类:{{ item.name }}
                            </a>
                        </v-list-item-title>
                    </v-list-item>
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
            now: "o"
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
            if (text.trim() !== "") {
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
                console.log(Sdata);
                this.tag = Sdata.S_tag;
                console.log(this.tag);
                this.content = Sdata.S_content;
                this.classification = Sdata.S_classification;
                this.title = Sdata.S_title;
            }

            // let SD;
            // Sdata.then(data => {
            //     SD = data;
            // });
            // let a = this.$emit("search", this.text, val => {
            //     itemName = val;
            // });
            // console.log(itemName);

            // this.items={}
            // this.items = [
            //   {
            //     key: '1234',
            //     name: '1234'
            //   },
            //   {
            //     key: 'abc',
            //     name: 'abc'
            //   },
            //   {
            //     key: 'def',
            //     name: 'def'
            //   },
            //   {
            //     key: 'ccc',
            //     name: 'ccc'
            //   },
            //   {
            //     key: 'ccc',
            //     name: 'ccc'
            //   },
            //   {
            //     key: 'ccc',
            //     name: 'ccc'
            //   }
            // ]
        },
        search() {
            this.$refs.search.blur();
            console.log(this.text);
            // this.$router.push()
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
/* .input-search {
    width: 100%;
    margin: auto;
}
.width-20-percent {
    width: 30%;
}
.img-div {
    margin: 16vh 0 40px 0;
    text-align: center;
}
.v-menu__content {
    box-shadow: none !important;
}
.border-list {
    
    border: 1px solid #eee !important;
} */
</style>
