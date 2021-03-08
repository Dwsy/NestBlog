<template>
    <div style="margin:20px">
        <v-toolbar color="#2e62cd" dark>
            <v-toolbar-title>评论列表</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading">共20条。</span>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" class="mb-2">添加</v-btn>
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
                    <v-dialog v-model="dialog" max-width="900px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.authorName"
                                                label="评论人"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.email"
                                                label="email"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.ip"
                                                label="ip"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field
                                                v-model="editedItem.url"
                                                label="网址"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-textarea
                                                v-model="editedItem.text"
                                                label="评论内容"
                                            ></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
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
                    <v-img
                        :src="item.cover"
                        width="200px"
                        :aspect-ratio="16 / 9"
                    >
                    </v-img>
                </template>

                <template v-slot:[`item.coverSmall`]="{ item }">
                    <v-img
                        :src="item.coverSmall"
                        max-height="100"
                        max-width="100"
                    >
                    </v-img>
                </template>

                <template v-slot:[`item.MD5email`]="{ item }">
                    <v-avatar>
                        <v-img
                            :src="
                                'https://gravatar.helingqi.com/wavatar/' +
                                    item.MD5email +
                                    '?s=220&r=X&d=mm'
                            "
                            max-height="80px"
                            max-width="80px"
                        >
                        </v-img>
                    </v-avatar>
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
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
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
        delDialog: false,
        headers: [
            {
                text: "文章标题",
                align: "start",
                sortable: false,
                value: "fieldsId.title"
            },
            { text: "评论人", value: "authorName" },
            { text: "头像", value: "MD5email" },
            { text: "评论内容", value: "text" },
            { text: "email", value: "email" },
            { text: "ip", value: "ip" },
            { text: "网址", value: "url" },
            { text: "评论时间", value: "createdAt" },
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

    created() {
        this.get();
    },

    methods: {
        async get() {
            const tagData = await this.$http.getComment();
            // console.log(md5(123123));
            // console.log(tagData);
            // this.tags = tagData[0].data[0];
            // console.log(tagData[0].data);
            return (this.tags = tagData[0]);
        },

        // initialize() {
        //     this.desserts = ;
        // },

        editItem(item) {
            this.editedIndex = this.tags.indexOf(item);
            this.editedItem = Object.assign({}, item);
            // console.log(item);
            // console.log(item._id);
            this.dialog = true;
        },

        async deleteItem(item) {
            //删除评论及其子评论
            const index = this.tags.indexOf(item);
            if (confirm("是否删除该条评论及其子评论?")) {
                await this.$http.delComment(item._id, item.isChild);
                this.tags.splice(index, 1);
            }
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        async save() {
            if (this.editedIndex > -1) {
                Object.assign(this.tags[this.editedIndex], this.editedItem);
                let a= await this.$http.upComment(this.editedItem);
                console.log(this.editedItem)
            } else {
                // let b= await this.$http.createComment(this.editedItem);
                console.log(this.editedItem);
                this.tags.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>
<style></style>
