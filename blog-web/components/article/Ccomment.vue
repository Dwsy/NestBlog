<template>
  <div class="text-center">
    <v-dialog v-model="dialog"  persistent max-width="500px" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
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



        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      comments: []
    };
  },
  methods: {
    async send() {
      await this.$axios.$post("comments", {
        contentsId: this.id,
        authorId: "",
        authorName: this.name,
        ip: this.IP,
        url: this.url,
        text: this.content,
        MD5email: md5(this.email),
        email: this.email,
        parentId: "603d6253c2ec3627c8b57996",
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
    },
    order() {
      $this.comments.reverse();
    }
  }
};
</script>

<style></style>
