<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2"  v-bind="attrs" v-on="on" @click="emptyFatherID" >
          关闭
        </v-btn>
      </template>
      <v-card>
        <v-form @submit.prevent="send" :disabled="disabledBtn">
          <v-text-field
            label="说点啥吧"
            required
            :append-icon="icon"
            @click:append="send"
            v-model="content"
          ></v-text-field>
        </v-form>
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
                  :rules="urlRules"
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
        <v-switch v-model="order"></v-switch>
        <p>{{ IP }}</p>
        <p>{{ id }}</p>
<p>{{fatherID}}</p>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="emptyFatherID">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col>
      <v-card>
        <v-list three-line>
          <v-subheader> 评论列表 </v-subheader>
          <template v-for="item in comments">
            <v-divider :key="item._id"></v-divider>
            <v-list-item :key="item._id + 1">
              <v-list-item-avatar>
                <v-img
                  :src="
                    'https://gravatar.helingqi.com/wavatar/' +
                      item.MD5email +
                      '?s=220&r=X&d=mm'
                  "
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <div>
                  <v-list-item-title
                    v-html="item.authorName"
                  ></v-list-item-title>
                  <!-- <v-list-item-subtitle v-html="item.text"> -->
                  <v-list-item-subtitle>
                    {{ item.text }}
                  </v-list-item-subtitle>
                  <b
                    ><v-list-item-subtitle
                      >{{ item.createdAt | formatDate("yyyy年MM月dd日")
                      }}<v-btn icon @click="fatherID = item._id">
                        <v-icon color="deep-purple lighten-1"
                          >mdi-reply-circle</v-icon
                        >
                      </v-btn></v-list-item-subtitle
                    ></b
                  >
                </div>

                <v-list-item v-for="child in item.childId" :key="child._id">
                  <v-list-item-avatar>
                    <v-img
                      :src="
                        'https://gravatar.helingqi.com/wavatar/' +
                          child.MD5email +
                          '?s=220&r=X&d=mm'
                      "
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="child.authorName"
                    ></v-list-item-title>
                    <v-divider :key="child._id"></v-divider>
                    <v-list-item-subtitle
                      v-html="child.text"
                    ></v-list-item-subtitle>

                    <b
                      ><v-list-item-subtitle
                        >{{ child.createdAt | formatDate("yyyy年MM月dd日hh:mm")
                        }}<v-btn icon @click="fatherID = item._id;content=`回复@${child.authorName}:`">
                          <v-icon color="light-blue lighten-2"
                            >mdi-reply-circle</v-icon
                          >
                        </v-btn></v-list-item-subtitle
                      ></b
                    >
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
      fatherID: "",
      dialog: false,
      valid: false,
      name: "",
      url: "",
      icon: "mdi-send",
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
      ],
      // comments: []
    };
  },
  methods: {
    async send() {
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
      this.icon = "mdi-send-lock";
      this.disabledBtn = true;
      setTimeout(() => {
        this.disabledBtn = false;
        this.icon = "mdi-send";
      }, 5000);
      this.content = null;
      this.fatherID=null
    },
    emptyFatherID(){
      this.fatherID=null
    },
    order() {
      $this.comments.reverse();
    }
  },
  watch: {
    fatherID: function(val) {
      this.dialog = !this.dialog;
    }
  }
};
</script>
