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
    <v-switch v-model="order" ></v-switch>
    <v-list two-line>
      <v-list-item v-for="(item, i) in comments" :key="i">
        <v-list-item-avatar color="blue">
          <span class="white--text">{{
            item.user.username[0].toUpperCase()
          }}</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.content }}</v-list-item-title>
          <v-list-item-subtitle>
            <span>{{ item.user.username }}</span>
            <span>{{ item.createdAt }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    object: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      name: "",

      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      url: "",
      //   urlRules: [v => !!v || "Url is not required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      content: null,
      comments: []
    };
  },
  methods: {
    async send() {
      await this.$axios.$post("http://localhost:3008/comments", {
        type: this.type,
        object: this.object,
        content: this.content
      });
      this.content = null;
      await this.fetch();
    },
    async fetch() {
      this.comments = await this.$axios.$get("http://localhost:3008/comments", {
        params: {
          query: {
            where: {
              type: this.type,
              object: this.object
            }
          }
        }
      });
    },
    order() {
      $this.comments.reverse();
    }
  },
  watch: {
    object: {
      handler: "fetch",
      immediate: true
    }
  }
};
</script>

<style></style>
