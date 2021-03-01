<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      dark
      :src="navigationsrc"
    >
      <v-list>
        <v-col cols="10">
          <v-avatar size="50px">
            <img
              alt="Avatar"
              src="https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100"
            />
          </v-avatar>
          <sub>{{ greetings }}</sub>
        </v-col>

        <template v-for="item in items">
          <v-list-group
            :to="item.link"
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              nuxt
              :to="'/classification/'+child._id"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.name }}
                  <v-divider></v-divider>
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="item.text" :to="item.link" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
                <v-divider></v-divider>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  props: {
    // items: [],
    navigationsrc: ""
  },
  data() {
    return {
      dialog: false,
      drawer: null,
      islight: true,
      // navigationsrc: "",
      appbarsrc: "",
      greetings: "",
      items: [
        { icon: "mdi-home-outline", text: "博客首页", link: "/" },
        {
          icon: "mdi-flag-variant-outline",
          text: "文章归档",
          link: "/archives"
        },
        { icon: "mdi-google-photos", text: "时光机", link: "/cross" },
        { icon: "mdi-image", text: "相册", link: "/image" },
        { icon: "mdi-tag-multiple-outline", text: "Tag", link: "/tag" },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "文章分类",
          model: false,
          children: []
        },
        {
          icon: "mdi-account-multiple-outline",
          text: "友情链接",
          link: "/firend"
        },
        {
          icon: "mdi-information-variant",
          text: "md文章test",
          link: "/article"
        },
        { icon: "mdi-information-variant", text: "关于", link: "/about" }
      ]
    };
  },
  mounted() {
    let classification = JSON.parse(localStorage.getItem("classifications"));
    console.log(classification);
    console.log(this.items[5]);
    this.items[5].children = classification;
    console.log(this.items[5]);
    const h = new Date().getHours();

    if (h >= 6 && h <= 10) {
      this.greetings = "早上好！👾👾";
    } else if (h > 10 && h <= 14) {
      this.greetings = "中午好！(❁´◡`❁)🙂";
    } else if (h > 14 && h <= 19) {
      this.greetings = "下午好ヾ(≧ ▽ ≦)ゝ🤯";
    } else if (h > 19 && h <= 24) {
      this.greetings = "晚上好！( ఠൠఠ )ﾉ👻";
    } else if (h > 24 && h <= 8) {
      this.greetings = "好耶！○( ＾皿＾)っHiahiahia…";
    }
  }
};
</script>

<style></style>
