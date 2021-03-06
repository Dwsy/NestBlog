<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" xl="11" lg="11" md="11" sm="12" xs="12">
                <h3>撰写文章</h3>
                <v-divider></v-divider>
                <v-text-field
                    label="标题"
                    hide-details="auto"
                    prepend-icon="mdi-format-title"
                ></v-text-field>
                <div id="vditor" style="height: 640px; width: auto;"></div>

                <!-- <v-col cols="12">
                    <v-combobox
                        v-model="select"
                        :items="items"
                        label="选择标签"
                        multiple
                        chips
                    >
                        <template v-slot:selection="data">
                            <v-chip
                                :key="JSON.stringify(data.item)"
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                :disabled="data.disabled"
                                @click:close="data.parent.selectItem(data.item)"
                            >
                                <v-avatar
                                    class="accent white--text"
                                    left
                                    v-text="data.item.slice(0, 1).toUpperCase()"
                                ></v-avatar>
                                {{ data.item }}
                            </v-chip>
                        </template>
                    </v-combobox>
                </v-col> -->
                <v-container fluid>
                    <v-combobox
                        v-model="model"
                        :items="tag"
                        :search-input.sync="search"
                        hide-selected
                        hint="最多4个"
                        label="添加标签"
                        multiple
                        persistent-hint
                        small-chips
                        append-icon="mdi-tag-plus"
                    >
                        <template v-slot:no-data>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        No results matching "<strong>{{
                                            search
                                        }}</strong
                                        >". Press <kbd>enter</kbd> to create a
                                        new one
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-combobox>
                </v-container>

                <v-divider></v-divider>

                <v-combobox
                    label="选择分类"
                    :items="classifications"
                    append-icon="mdi-book-plus"
                ></v-combobox>
                <v-divider></v-divider>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="大头图url"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="小头图url"
                    required
                ></v-text-field>
                <v-row justify="end">
                    <v-spacer></v-spacer>
                    <v-btn color="#2196f3" outlined class="ma-3"
                        >存为草稿</v-btn
                    >

                    <v-btn color="success" class="ma-3">发布</v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Vditor from "vditor";
import "vditor/dist/index.css";

export default {
    data() {
        return {
            contentEditor: "",
            tag: ["Gaming", "Programming", "Vue", "Vuetify"],
            classifications: ["学习笔记", "吐槽", "算法"],
            model: ["Vuetify"],
            search: null
        };
    },
    mounted() {
        this.contentEditor = new Vditor("vditor", {
            height: 360,
            toolbarConfig: {
                pin: true
            },
            cache: {
                enable: false
            },
            after: () => {
                this.contentEditor.setValue("hello,Vditor+Vue!");
            }
        });
    },
    methods: {},
    watch: {
        model(val) {
            if (val.length > 5) {
                this.$nextTick(() => this.model.pop());
            }
        }
    }
};
</script>
