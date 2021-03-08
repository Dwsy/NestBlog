<template>
    <div>
        <v-toolbar color="#2e62cd" dark>
            <v-toolbar-title>分类列表</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading">共20个。</span>
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
                            <!-- <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.name
                                                        "
                                                        label="Dessert name"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.calories
                                                        "
                                                        label="Calories"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="editedItem.fat"
                                                        label="Fat (g)"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.carbs
                                                        "
                                                        label="Carbs (g)"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.protein
                                                        "
                                                        label="Protein (g)"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text> -->

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

                <template v-slot:[`item.navigationImage`]="{ item }">
                    <a :href="item.navigationImage" target="_blank">
                        <v-img
                            :src="item.navigationImage"
                            max-height="100px"
                            max-width="100px"
                        >
                        </v-img>
                    </a>
                </template>
                <template v-slot:[`item.topImage`]="{ item }">
                    <a :href="item.topImage" target="_blank">
                        <v-img
                            :src="item.topImage"
                            max-height="200px"
                            max-width="200px"
                        >
                        </v-img>
                    </a>
                </template>

                <template v-slot:[`item.primary`]="{ item }">
                    <v-chip :color="item.primary" label></v-chip>
                </template>

                <template v-slot:[`item.secondary`]="{ item }">
                    <v-chip :color="item.secondary" label></v-chip>
                </template>
                <template v-slot:[`item.accent`]="{ item }">
                    <v-chip :color="item.accent" label></v-chip>
                </template>

                <template v-slot:[`item.error`]="{ item }">
                    <v-chip :color="item.error" label></v-chip>
                </template>

                <template v-slot:[`item.info`]="{ item }">
                    <v-chip :color="item.info" label></v-chip>
                </template>

                <template v-slot:[`item.success`]="{ item }">
                    <v-chip :color="item.success" label></v-chip>
                </template>
                <template v-slot:[`item.warning`]="{ item }">
                    <v-chip :color="item.warning" label></v-chip>
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
                text: "主题名称",
                align: "start",
                sortable: false,
                value: "themeName"
            },
            { text: "导航栏图片", value: "navigationImage" },
            { text: "顶栏图片", value: "topImage" },
            { text: "primary", value: "primary" },
            { text: "secondary", value: "secondary" },
            { text: "accent", value: "accent" },
            { text: "error", value: "error" },
            { text: "info", value: "info" },
            { text: "success", value: "success" },
            { text: "warning", value: "warning" },
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
            const tagData = await this.$http.getTheme();
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

        deleteItem(item) {
            const index = this.tags.indexOf(item);
            confirm("Are you sure you want to delete this item?") &&
                this.tags.splice(index, 1);
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
