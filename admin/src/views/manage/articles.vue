<template>
    <div style="margin:20px">
        <v-toolbar color="#2e62cd" dark>
            <v-toolbar-title>文章列表</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading">共{{ tags.length }}篇。</span>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" class="mb-2" to="/write/article"
                >撰写文章</v-btn
            >
        </v-toolbar>

        <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
                <!-- <p>Employee List</p> -->
                <!-- <v-spacer></v-spacer> -->
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="搜索"
                    clearable
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>

            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="tags"
                :search="search"
                item-key="name"
                class="elevation-1"
                show-select
            >
                <template v-slot:top>
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close"
                                    >Cancel</v-btn
                                >
                                <v-btn color="blue darken-1" text @click="save"
                                    >Save</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <!-- </v-toolbar> -->
                </template>

                <template v-slot:[`item.cover`]="{ item }">
                    <a :href="item.cover" target="_blank">
                        <v-img
                            :src="item.cover"
                            width="200px"
                            :aspect-ratio="16 / 9"
                        >
                        </v-img>
                    </a>
                </template>

                <template v-slot:[`item.coverSmall`]="{ item }">
                    <a :href="item.coverSmall" target="_blank">
                        <v-img
                            :src="item.coverSmall"
                            max-height="100"
                            max-width="100"
                        >
                        </v-img>
                    </a>
                </template>

                <template v-slot:[`item.tag`]="{ item }">
                    <v-chip
                        class="ma-1"
                        v-for="i in item.tag"
                        :key="i.name"
                        :color="i.colours"
                        small
                        outlined
                    >
                        {{ i.name }}
                        <v-avatar v-show="i.icon">
                            <v-icon>{{ i.icon }}</v-icon>
                        </v-avatar>
                    </v-chip>
                </template>

                <template v-slot:[`item.title`]="{ item }">
                    <a
                        :href="
                            'http://dwsy.link:5000/article/' + item.contentsId
                        "
                        target="_blank"
                        style="text-decoration:none"
                        >{{ item.title }}</a
                    >
                </template>
                <template v-slot:[`item.commentsNum`]="{ item }">
                    {{ item.commentsNum }}
                </template>
                <template v-slot:[`item.createdAt`]="{ item }">
                    {{ item.createdAt | formatDate("yyyy年MM月dd日hh:mm") }}
                </template>
                <template v-slot:[`item.updatedAt`]="{ item }">
                    {{ item.createdAt | formatDate("yyyy年MM月dd日hh:mm") }}
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item)">
                        mdi-delete
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        selected: [],
        search: ""
    },
    data: () => ({
        tags: [],
        dialog: false,
        headers: [
            {
                text: "标题",
                align: "start",
                sortable: false,
                value: "title"
            },
            { text: "评论数", value: "commentsNum" },
            { text: "分类", value: "classification.name" },
            { text: "标签", value: "tag" },
            { text: "大图", value: "cover" },
            { text: "小图", value: "coverSmall" },
            { text: "创建时间", value: "createdAt" },
            { text: "更新时间", value: "updatedAt" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        editedIndex: -1,
        editedItem: {
            name: "",
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        },
        defaultItem: {
            name: "",
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },

    created() {
        this.get();
    },

    methods: {
        async get() {
            const tagData = await this.$http.getFields();
            // console.log(tagData);
            // this.tags = tagData[0].data[0];
            // console.log(tagData[0].data);
            return (this.tags = tagData[0].data);
        },

        dialogControl() {
            this.dialog = !this.dialog;
            // console.log(this.tag);
        },
        // initialize() {
        //     this.desserts = ;
        // },

        editItem(item) {
            // console.log(item);
            this.editedIndex = this.tags.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        editItem(item) {
            // console.log(item);
            let id = item._id;
            let contentsId = item.contentsId;

            // this.$router.push({ name: '/write/edit/', params: { id: id }})
            this.$router.push(`/edit/${id}`);
            // this.editedIndex = this.tags.indexOf(item);
            // this.editedItem = Object.assign({}, item);
            // this.dialog = true;
        },

        async deleteItem(item) {
            const index = this.tags.indexOf(item);
            if (confirm("你确定要删除这篇文章吗？")) {
                await this.$http.delContent(item.contentsId);
                await this.$http.delField(item._id);
                await this.$http.ClassificationContentsNum(
                    item.classification._id,
                    -1
                );
                await this.$http.TagContentsNum(
                    item.tag.map(val => val._id),
                    -1
                );
                console.log("删除成功");
                this.tags.splice(index, 1);
            }

            // console.log(123);
            // console.log();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.tags[this.editedIndex], this.editedItem);
            } else {
                this.tags.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>
<style></style>
