<template>
    <v-container grid-list-md>
        <v-toolbar color="#1e88e5" dark>
            <v-toolbar-title>文章列表</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading">共20篇。</span>
            <v-spacer></v-spacer>
            <v-btn text>撰写 </v-btn>
        </v-toolbar>

        <v-row>
            <v-col cols="12">
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
                        :headers="mock.employeeTable.headers"
                        :items="mock.employeeTable.employee"
                        :search="mock.employeeTable.search"
                        item-key="name"
                        show-select
                    >
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import mock from "./mock";

export default {
    props: {
        selected: [],
        search: "",
        headers: [
            {
                text: "Name",
                align: "start",
                sortable: true,
                value: "name"
            },
            { text: "Company", value: "company" },
            { text: "City", value: "city" },
            { text: "State", value: "state" }
        ]
    },
    data() {
        return {
            mock
        };
    }
};
</script>
<style></style>
