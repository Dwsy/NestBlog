<template>
    <v-container>
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
                <v-container fluid>
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
                                        >". 请按 <kbd>enter</kbd> to create a
                                        new one
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-combobox>
                </v-container>

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

                <v-text-field v-model="cover" label="大头图url"></v-text-field>
                <v-text-field
                    v-model="coverSmall"
                    label="小头图url"
                ></v-text-field>
                <v-row justify="end">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#2196f3"
                        @click="draft"
                        outlined
                        class="ma-3"
                        >{{ state0 }}</v-btn
                    >

                    <v-btn color="success" class="ma-3" @click="send">{{
                        state
                    }}</v-btn>
                    <v-btn color="success" @click="mdtheme">text</v-btn>
                </v-row>
            </v-col>
        </v-row>
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
            fieldsId: "",
            contentsId: "",
            title: "",
            cover: "",
            coverSmall: "",
            selectTag: [],
            originalSelectTag: [],
            selectClass: "",
            search: null,
            state: "...",
            state0: "...",
            isDraft: Boolean
        };
    },
    mounted() {
        // this.contentEditor = new Vditor("vditor", {
        //     height: 360,
        //     toolbarConfig: {
        //         pin: true
        //     },
        //     cache: {
        //         enable: true
        //     },
        //     IHint: {},
        //     after: () => {
        //         // this.contentEditor.setValue();
        //     }
        // });
    },
    beforeCreate() {},
    created() {
        this.fieldsId = this.$route.params.id;
        this.getParams();
        this.getTag();
        this.getClassification();
    },

    methods: {
        mdtheme() {
            // console.log(this.originalSelectTag);
        },
        async getParams() {
            const fields = await this.$http.getFieldsById(this.fieldsId);
            // console.log(fields);
            this.isDraft = fields[0].isDraft;
            if (this.isDraft == true) {
                this.state0 = "更新草稿";
                this.state = "发布";
            } else {
                this.state0 = "存为草稿";
                this.state = "更新";
            }
            this.title = fields[0].title;
            this.coverSmall = fields[0].coverSmall;
            this.cover = fields[0].cover;
            this.selectTag = fields[0].tag;
            this.selectClass = fields[0].classification;
            let content = fields[0].contentsId.mdText;
            // console.log(this.content);
            this.contentsId = fields[0].contentsId._id;
            this.$refs.editor.setData(content);
        },
        async draft() {
            let ContentData = {
                text: this.$refs.editor.getHTML(),
                mdText: this.$refs.editor.getData()
            };
            const Content = await this.$http.updataContent(
                this.contentsId,
                ContentData
            );
            let FieldData = {
                title: this.title,
                tag: this.selectTag.map(value => value._id),
                classification: this.selectClass._id,
                cover: this.cover,
                coverSmall: this.coverSmall,
                isDraft: true
            };
            const Field = await this.$http.updataField(
                this.fieldsId,
                FieldData
            );
            let ContentId=Content[0]._id
            let addData = {
                fieldsId: Field[0]._id,
                ContentId: ContentId
            };
            if (this.isDraft == true) {
                // await this.$http.ClassificationContentsNum(
                //     this.selectClass._id,
                //     1
                // );
                // await this.$http.TagContentsNum(
                //     this.selectTag.map(val => val._id),
                //     1
                // );
            } else {
                let newTag = this.selectTag.map(val => val._id);
                let originalTag = this.originalSelectTag.map(val => val._id);

                const _arr1Set = new Set(newTag),
                    _arr2Set = new Set(originalTag);
                console.log("originalTag", originalTag);
                let add = newTag.filter(item => !_arr2Set.has(item));
                let rm = originalTag.filter(item => !_arr1Set.has(item));
                // console.log("add", add);
                // console.log("rm", rm);
                // await this.$http.TagContentsNum(add, 1);
                await this.$http.TagContentsNum(rm, -1);
                await this.$http.ClassificationContentsNum(
                    this.selectClass._id,
                    -1
                );
            }

            const add = await this.$http.addField(addData);
            const toc = await this.$http.createdToc(ContentId);
            if (Field[0].contentsId === ContentId) {
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
                mdText: this.$refs.editor.getData()
            };
            const Content = await this.$http.updataContent(
                this.contentsId,
                ContentData
            );
            let FieldData = {
                title: this.title,
                tag: this.selectTag.map(value => value._id),
                classification: this.selectClass._id,
                cover: this.cover,
                coverSmall: this.coverSmall,
                isDraft: false
            };

            if (this.isDraft == true) {
                await this.$http.ClassificationContentsNum(
                    this.selectClass._id,
                    1
                );
                await this.$http.TagContentsNum(
                    this.selectTag.map(val => val._id),
                    1
                );
            } else {
                await this.$http.ClassificationContentsNum(
                    this.selectClass._id,
                    1
                );
                let newTag = this.selectTag.map(val => val._id);
                let originalTag = this.originalSelectTag.map(val => val._id);

                const _arr1Set = new Set(newTag),
                    _arr2Set = new Set(originalTag);
                // console.log("originalTag", originalTag);
                let add = newTag.filter(item => !_arr2Set.has(item));
                let rm = originalTag.filter(item => !_arr1Set.has(item));
                // console.log("add", add);
                // console.log("rm", rm);
                await this.$http.TagContentsNum(add, 1);
                await this.$http.TagContentsNum(rm, -1);
            }

            const Field = await this.$http.updataField(
                this.fieldsId,
                FieldData
            );
            let ContentId= Content[0]._id
            let addData = {
                fieldsId: Field[0]._id,
                ContentId: ContentId
            };
            const add = await this.$http.addField(addData);
            const toc = await this.$http.createdToc(ContentId);
            // console.log(toc);
            if (Field[0].contentsId === ContentId) {
                // console.log("保存成功");
                this.success("发送成功");
                this.$router.push("/manage/manageArticles");
            } else {
                // console.log("保存失败");
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
            this.originalSelectTag = this.selectTag;
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
        }
    }
};
</script>
