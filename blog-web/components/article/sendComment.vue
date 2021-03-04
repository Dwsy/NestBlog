<template>
  <v-row>
    <v-col>
      <v-card>
        <v-snackbar
          v-model="snackbar"
          color="light-blue lighten-4 lighten-5 accent-4"
          bottom
          timeout="2000"
        >
          {{ messagetext }}
          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="100"
                  label="你的名字"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="url"

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
        <v-form @submit.prevent="send" :disabled="disabledBtn">
          <v-textarea
            label="说点啥吧"
            required
            :append-icon="icon"
            @click:append="send"
            v-model="content"
            auto-grow
            color="green darken-3"
          ></v-textarea>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import md5 from "md5";
export default {
  props: {
    id: "",
    IP: ""
  },
  data() {
    return {
      snackbar: false,
      messagetext: "",

      order: false,
      valid: false,
      name: "",
      url: "",
      icon: "mdi-send",
      disabledBtn: false,
      email: "",
      content: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 100 || "Name must be less than 100 characters"
      ],

      // urlRules: [v => !!v || "Url is not required"],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    async send() {
      if (this.content != "") {
        this.messagetext = "发送成功";
        this.snackbar = true;
        await this.$axios.$post("comments", {
          contentsId: this.id,
          authorId: "",
          authorName: this.name,
          ip: this.IP,
          url: this.url,
          text: this.content,
          MD5email: md5(this.email),
          email: this.email,
          agent: navigator.userAgent,
          isChild: false
        });
        this.icon = "mdi-send-lock";
        this.disabledBtn = true;
        setTimeout(() => {
          this.disabledBtn = false;
          this.icon = "mdi-send";
        }, 5000);
        this.content = null;
      } else {
        // console.log("内容为空，请输入。");
        this.messagetext = "内容为空，请输入。";
        this.snackbar = true;
      }
    }
  }
};
</script>

<style></style>
