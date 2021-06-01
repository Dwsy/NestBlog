<template>
    <v-container app>
        <v-row align="center" justify="center">
            <v-col cols="12" xl="11" lg="11" md="11" sm="12" xs="12">
                <h3>撰写文章</h3>
                <v-divider></v-divider>
                <v-text-field
                    label="标题"
                    hide-details="auto"
                    v-model="title"
                    prepend-icon="mdi-format-title"
                ></v-text-field>
                <br />
                <Mdedit ref="editor"></Mdedit>

                <v-combobox
                    v-model="selectTag"
                    :items="tag"
                    :search-input.sync="search"
                    clearable
                    hint="最多4个"
                    label="添加标签"
                    item-text="name"
                    item-value="_id"
                    multiple
                    persistent-hint
                    small-chips
                    prepend-icon="mdi-tag-plus"
                >
                    <template v-slot:no-data>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    没有搜索到 "<strong>{{ search }}</strong
                                    >". 请手动前往标签管理添加
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-combobox>

                <v-divider></v-divider>

                <v-combobox
                    v-model="selectClass"
                    label="选择分类"
                    :items="classifications"
                    item-text="name"
                    item-value="_id"
                    prepend-icon="mdi-book-plus"
                ></v-combobox>
                <v-divider></v-divider>

                <v-text-field
                    v-model="cover"
                    label="大头图url"
                    prepend-icon="mdi-image-plus"
                ></v-text-field>
                <v-text-field
                    v-model="coverSmall"
                    label="小头图url"
                    prepend-icon="mdi-image-plus"
                ></v-text-field>
                <v-row justify="end">
                    <v-spacer></v-spacer>
                    <v-btn color="#2196f3" @click="draft" outlined class="ma-3"
                        >存为草稿</v-btn
                    >

                    <v-btn color="success" class="ma-3" @click="send"
                        >发布</v-btn
                    >
                </v-row>
            </v-col>
        </v-row>
        <v-btn color="success" @click="mdtheme">text</v-btn>
    </v-container>
</template>
<script>
// import Vditor from "vditor";
import "vditor/dist/index.css";
import Mdedit from "../../components/mdedit";
export default {
    components: {
        Mdedit
    },
    data() {
        return {
            tag: [],
            classifications: [],

            title: "",
            cover: "",
            coverSmall: "",

            selectTag: [],
            selectClass: "",

            search: null
        };
    },
    created() {
        this.getTag();
        this.getClassification();
    },
    methods: {
        mdtheme() {
            // console.log(this.$refs.editor.getHTML());
            // console.log(this.selectTag.map(value => value));
            // console.log(this.sel);
            this.$refs.editor.settheme();
        },
        async draft() {
            let ContentData = {
                text: this.$refs.editor.getHTML(),
                mdText: this.$refs.editor.getData(),
                isPublish: true,
                allowComment: false
            };
            const Content = await this.$http.createContent(ContentData);
            let FieldData = {
                title: this.title,
                contentsId: Content[0]._id,
                tag: this.selectTag.map(value => value._id),
                classification: this.selectClass._id,
                cover: this.cover,
                coverSmall: this.coverSmall,
                commentsNum: 0,
                isDraft: true,
                view:0
            };
            const Field = await this.$http.createField(FieldData);
            // console.log(Field[0].contentsId);
            // console.log(Content[0]._id);
            let addData = {
                fieldsId: Field[0]._id,
                ContentTd: Content[0]._id
            };
            const add = await this.$http.addField(addData);
            // console.log(add);
            if (Field[0].contentsId === Content[0]._id) {
                // console.log("保存成功");
                this.success("保存成功");
                this.$router.push("/write/draft");
            } else {
                // console.log("保存失败");
                this.error("保存失败");
            }
        },
        async send() {
            let ContentData = {
                text: this.$refs.editor.getHTML(),
                mdText: this.$refs.editor.getData(),
                isPublish: true,
                allowComment: false
            };
            const Content = await this.$http.createContent(ContentData);
            let FieldData = {
                title: this.title,
                contentsId: Content[0]._id,
                // tag: this.selectTag.map(value => value._id),
                tag: this.selectTag,
                classification: this.selectClass._id,
                cover: this.cover,
                coverSmall: this.coverSmall,
                commentsNum: 0,
                isDraft: false,
                view:0
            };
            const Field = await this.$http.createField(FieldData);

            await this.$http.ClassificationContentsNum(this.selectClass._id,1);
            await this.$http.TagContentsNum(this.selectTag.map(val=>val._id),1);
            
            // console.log(Field[0].contentsId);
            // console.log(Content[0]._id);
            let addData = {
                fieldsId: Field[0]._id,
                ContentTd: Content[0]._id
            };
            const add = await this.$http.addField(addData);
            // console.log(add);
            if (Field[0].contentsId === Content[0]._id) {
                // console.log("发送成功");
                this.success("发送成功");
                this.$router.push("/manage/manageArticles");
            } else {
                // console.log("发送失败");
                this.error("发送失败");
            }
        },
        
        async getTag() {
            const tagData = await this.$http.getTag();
            this.tag = tagData[0].data;
        },
        async getClassification() {
            const ClassificationData = await this.$http.getClassification();
            this.classifications = ClassificationData[0].data;
            // console.log(this.classifications);
        },

        success(message) {
            this.$toast.success(message, {
                position: "bottom-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
            });
        },
        error(message) {
            this.$toast.error(message, {
                position: "bottom-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
            });
        }
    },
    watch: {
        model(val) {
            if (val.length > 5) {
                this.$nextTick(() => this.model.pop());
            }
        },
        theme(val) {
            // console.log(123);
            // console.log(val);
        }
    }
};
</script>
