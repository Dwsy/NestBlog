<template>
    <div style="margin:20px">
        <v-toolbar color="#2e62cd" dark>
            <v-toolbar-title>分类列表</v-toolbar-title>
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
                    <v-dialog v-model="dialog" max-width="500px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.name"
                                                label="分类名称"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.description"
                                                label="分类描述"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.contentsNum"
                                                label="分类文章数"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="editedItem.rank"
                                                label="分类排序"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="10" md="8">
                                            <v-text-field
                                                v-model="editedItem.icon"
                                                label="分类图标"
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

                <template v-slot:[`item.icon`]="{ item }">
                    <v-icon color="primary">
                        {{ item.icon }}
                    </v-icon>
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
                text: "分类名称",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "分类描述", value: "description" },
            { text: "分类文章数", value: "contentsNum" },
            { text: "分类排序", value: "rank" },
            { text: "分类图标", value: "icon" },
            { text: "创建时间", value: "createdAt" },
            { text: "更新时间", value: "updatedAt" },
            { text: "Actions", value: "actions", sortable: false }
        ],
        editedIndex: -1,
        editedItem: {
            name: "",
            description: "",
            contentsNum: 0,
            rank: 0,
            icon: 0
        },
        defaultItem: {
            name: "",
            description: "",
            contentsNum: 0,
            rank: 0,
            icon: 0
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "添加" : "修改";
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
            const tagData = await this.$http.getClassification();
            // console.log(tagData);
            // this.tags = tagData[0].data[0];
            // console.log(tagData[0].data);
            return (this.tags = tagData[0].data);
        },

        dialogControl() {
            this.dialog = !this.dialog;
        },
        // initialize() {
        //     this.desserts = ;
        // },

        editItem(item) {
            this.editedIndex = this.tags.indexOf(item);
            this.editedItem = Object.assign({}, item);
            console.log(this.editedItem);
            this.dialog = true;
        },

        async deleteItem(item) {
            const index = this.tags.indexOf(item);
            if (confirm("是否删除此分类?")) {
                await this.$http.delfClassification(item._id);
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
                let a= await this.$http.upClassification(this.editedItem);
                console.log(a)
            } else {
                let b= await this.$http.createClassification(this.editedItem);
                console.log(b);
                this.tags.push(this.editedItem);
            }

            // console.log(this.editedItem._id);
            
            ;
            this.close();
        }
    }
};
</script>
<style></style>
