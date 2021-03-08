<template>
    <div style="margin:20px">
        <v-toolbar color="#2e62cd" dark>
            <v-toolbar-title>友情链接列表</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading">共{{tags.length}}个。</span>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" class="mb-2" @click="dialogControl"
                >添加</v-btn
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
                                                v-model="editedItem.linksName"
                                                label="友联名称"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="
                                                    editedItem.linksDescription
                                                "
                                                label="描述"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                                                                        <v-text-field
                                                v-model="
                                                    editedItem.linksAvatar
                                                "
                                                label="头像链接"
                                            ></v-text-field>
                                            头像预览：<v-img
                                                :src="editedItem.linksAvatar"
                                                max-height="250px"
                                                max-width="250px"
                                            >
                                            </v-img>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.linksEmail"
                                                label="Email"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.rank"
                                                label="排序"
                                            ></v-text-field>
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

                <template v-slot:[`item.linksAvatar`]="{ item }">
                    <v-avatar>
                        <v-img
                            :src="item.linksAvatar"
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
        headers: [
            {
                text: "友联名称",
                align: "start",
                sortable: false,
                value: "linksName"
            },
            { text: "描述", value: "linksDescription" },
            { text: "链接", value: "linksUrl" },
            { text: "头像", value: "linksAvatar" },
            { text: "Email", value: "linksEmail" },
            { text: "排序", value: "rank" },
            { text: "创建时间", value: "createdAt" },
            { text: "更新时间", value: "updatedAt" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        editedIndex: -1,
        editedItem: {
            linksName: "",
            linksUrl: "",
            linksAvatar: "",
            rank: 0,
            linksEmail: ""
        },
        defaultItem: {
            linksName: "",
            linksUrl: "",
            linksAvatar: "",
            rank: 0,
            linksEmail: ""
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
            const tagData = await this.$http.getLinks();
            // console.log(tagData);
            // this.tags = tagData[0].data[0];
            // console.log(tagData[0].data);
            return (this.tags = tagData[0].data);
        },

        dialogControl() {
            this.dialog = !this.dialog;
            console.log(this.tag);
        },
        // initialize() {
        //     this.desserts = ;
        // },

        editItem(item) {
            this.editedIndex = this.tags.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        async deleteItem(item) {
            const index = this.tags.indexOf(item);
            if (confirm("是否删除该友联?")) {
                await this.$http.delLink(item._id);
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
                let a= await this.$http.upLink(this.editedItem);
                console.log(this.editedItem)
            } else {
                 let a= await this.$http.createLink(this.editedItem);
                console.log(this.editedItem)
                this.tags.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>
<style></style>
