<template>
  <v-card flat tile class="pa-15">
    <v-form @submit.prevent="send">
      <v-text-field
        label="说点啥吧"
        required
        append-icon="mdi-send"
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
    <p>{{IP}}</p>
    <p>{{id}}</p>
  </v-card>
</template>

<script>
import md5 from 'md5';
export default {
  //   props: {
  //     type: {
  //       type: String,
  //       required: true
  //     },
  //     object: {
  //       type: String,
  //       required: true
  //     }
  props: {
    id: '',
    IP:''
  },
  data() {
    return {
      valid: false,
      name: '',
      url: '',

      email: '',
      content: '',
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],

      urlRules: [v => !!v || "Url is not required"],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      comments: []
    };
  },
  methods: {
    async send() {
      console.log(this.IP);
          await this.$axios.$post("comments", {
            contentsId: this.id,
            authorId: "",
            authorName: this.name,
            ip: this.IP,
            url: this.url,
            text:this.content,
            MD5email: md5(this.email),
            email: this.email,
            parentId: "",
            agent: navigator.userAgent,
            childNum: 0
          });
          this.content = null;
        },
    order() {
      $this.comments.reverse();
    }
  }
};
</script>

<style></style>
