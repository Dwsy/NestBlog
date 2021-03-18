<template>
    <v-row>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <div class="fleft">
                <v-card>
                    <v-form v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="name"
                                        :rules="nameRules"
                                        :counter="10"
                                        label="你的名字"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="url"
                                        :counter="100"
                                        label="你的网站地址"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="你的E-mail"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>

                    <v-divider></v-divider>
                    <v-form @submit.prevent="send" :disabled="disabledBtn">
                        <v-textarea
                            label="说点啥吧"
                            required
                            :append-icon="icon"
                            @click:append="send"
                            v-model="content"
                            color="green darken-1"
                            auto-grow
                        ></v-textarea>
                    </v-form>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="pink" @click="emptyFatherID" icon>
                            <v-icon>mdi-close-circle-outline</v-icon>
                            关
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>

        <v-snackbar
            v-model="snackbar"
            color="light-blue lighten-4 lighten-5 accent-4"
            bottom
            timeout="2000"
        >
            {{ messagetext }}
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-col>
            <v-card>
                <v-list>
                    <v-subheader> 评论列表 </v-subheader>
                    <template v-for="item in comments">
                        <v-divider :key="item._id"></v-divider>
                        <v-list-item :key="item._id + 1">
                            <!-- <div align="start" justify="start">
                                <v-list-item-avatar>
                                    <v-img
                                        class="img-full"
                                        :src="
                                            'https://gravatar.helingqi.com/wavatar/' +
                                                item.MD5email +
                                                '?s=220&r=X&d=mm'
                                        "
                                    ></v-img>
                                </v-list-item-avatar>
                            </div> -->

                            <v-list-item-content>
                                <div>
                                    <v-list-item-avatar style="float: left">
                                        <v-img
                                            class="img-full"
                                            :src="
                                                'https://gravatar.helingqi.com/wavatar/' +
                                                    item.MD5email +
                                                    '?s=220&r=X&d=mm'
                                            "
                                        ></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-title
                                        v-html="item.authorName"
                                    ></v-list-item-title>
                                    <!-- <v-list-item-subtitle v-html="item.text"> -->
                                    <v-list-item-subtitle>
                                        <div
                                            style="font-size:18px"
                                            v-html="'<pre>'+item.text+'</pre>'"
                                        ></div>
 
                                        <!-- {{ item.text }} -->
                                    </v-list-item-subtitle>
                                    <b>
                                        <v-list-item-subtitle
                                            >{{
                                                item.createdAt
                                                    | formatDate(
                                                        "yyyy年MM月dd日"
                                                    )
                                            }}<v-btn
                                                icon
                                                @click="
                                                    fatherID = item._id;
                                                    content = `回复@${item.authorName}:`;
                                                "
                                            >
                                                <v-icon
                                                    color="deep-purple lighten-1"
                                                    >mdi-reply-circle</v-icon
                                                >
                                            </v-btn>
                                        </v-list-item-subtitle>
                                    </b>
                                </div>

                                <v-list-item
                                    v-for="child in item.childId"
                                    :key="child._id"
                                >
                                    <v-list-item-content>
                                        <div>
                                            <v-list-item-avatar
                                                style="float: left"
                                            >
                                                <v-img
                                                    class="img-full"
                                                    :src="
                                                        'https://gravatar.helingqi.com/wavatar/' +
                                                            child.MD5email +
                                                            '?s=220&r=X&d=mm'
                                                    "
                                                ></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-title
                                                v-html="child.authorName"
                                            ></v-list-item-title>
                                            <v-divider
                                                :key="child._id"
                                            ></v-divider>
                                            <v-list-item-subtitle
                                                ><div v-html="'<pre>'+child.text+'</pre>'"></div
                                            ></v-list-item-subtitle>

                                            <b>
                                                <v-list-item-subtitle
                                                    >{{
                                                        child.createdAt
                                                            | formatDate(
                                                                "yyyy年MM月dd日hh:mm"
                                                            )
                                                    }}
                                                    <v-btn
                                                        icon
                                                        @click="
                                                            fatherID = item._id;
                                                            content = `回复@${child.authorName}:`;
                                                        "
                                                    >
                                                        <v-icon
                                                            color="light-blue lighten-2"
                                                            >mdi-reply-circle</v-icon
                                                        >
                                                    </v-btn>
                                                </v-list-item-subtitle>
                                            </b>
                                        </div>
                                    </v-list-item-content>

                                    <!-- <v-btn small rounded color="success"
                    ><v-icon>mdi-reply</v-icon></v-btn
                  > -->
                                </v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import md5 from "md5";
export default {
    props: {
        comments: {},
        id: "",
        IP: ""
    },
    data() {
        return {
            snackbar: false,
            messagetext: "",
            userinfoArr: [],
            fatherID: "",
            dialog: false,
            valid: false,
            name: "",
            url: "",
            icon: "mdi-send-circle",
            disabledBtn: false,
            email: "",
            content: "",
            nameRules: [
                v => !!v || "Name is required",
                v => v.length <= 10 || "Name must be less than 10 characters"
            ],

            urlRules: [v => !!v || "Url is not required"],

            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ]
            // comments: []
        };
    },
    methods: {
        async send() {
            if (this.content != "") {
                await this.$axios.$post("comments/child", {
                    contentsId: this.id,
                    authorId: "777",
                    authorName: this.name,
                    ip: this.IP,
                    url: this.url,
                    text: this.content,
                    MD5email: md5(this.email),
                    email: this.email,
                    fatherId: this.fatherID,
                    agent: navigator.userAgent,
                    isChild: true
                });
                this.icon = "mdi-lock-clock";
                this.disabledBtn = true;
                setTimeout(() => {
                    this.disabledBtn = false;
                    this.icon = "mdi-send-circle";
                }, 5000);
                this.messagetext = "发送成功";
                this.snackbar = true;
                this.content = null;
                this.fatherID = null;
                this.userinfoArr = [this.name, this.url, this.email];

                localStorage.setItem(
                    "userinfo",
                    JSON.stringify(this.userinfoArr)
                );
            } else {
                // console.log("内容为空，请输入。");
                this.messagetext = "内容为空，请输入。";
                this.snackbar = true;
            }
        },
        emptyFatherID() {
            this.fatherID = null;
        },
        order() {
            $this.comments.reverse();
        }
    },
    watch: {
        fatherID: function(val) {
            this.dialog = !this.dialog;
        }
    },
    mounted() {
        this.userinfoArr = JSON.parse(localStorage.getItem("userinfo"));
        if (this.userinfoArr != null) {
            if (this.name == "") {
                this.name = this.userinfoArr[0];
            }
            if (this.url == "") {
                this.url = this.userinfoArr[1];
            }
            if (this.email == "") {
                this.email = this.userinfoArr[2];
            }
        }
    }
};
</script>
<style scoped>
.fleft {
    overflow: hidden;
}
pre{ 
white-space:pre-wrap;
white-space:-moz-pre-wrap; 
} 
</style>
