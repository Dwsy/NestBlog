<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      dark
      :src="navigationsrc"
    >
      <!-- <v-list dense> -->
      <v-list>
        <v-col cols="10">
          <v-avatar size="50px">
            <img
              alt="Avatar"
              src="https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100"
            />
          </v-avatar>
          <sub>{{ greetings }}</sub>
          <!-- <v-subheader>Dwsy</v-subheader> -->
        </v-col>
        <!-- <v-list-item-avatar>
          <v-img src="https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100"></v-img>
        </v-list-item-avatar> -->

        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="7">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            :to="item.link"
            link
            v-else-if="item.children"
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

            <v-list-item v-for="(child, i) in item.children" :key="i" link nuxt :to="child.link">
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
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
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- v-app-bar -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
      :src="appbarsrc"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Dwsy-blog</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 30vw">
        <v-text-field
          placeholder="搜索..."
          append-icon="mdi-magnify"
          single-line
          filled
          rounded
          dense
          color="white"
          hide-details
        />
      </v-row>

      <!-- <v-switch v-model="$vuetify.theme.dark" ></v-switch><p>明暗切换</p> -->
      <v-btn
        elevation="0"
        @click="handleChangeTheme"
        text
        transition="fade-transition"
      >
        <v-icon v-if="$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
        <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-key</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- v-main -->
    <!-- <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-tooltip right>

          </v-tooltip>
        </v-row>
      </v-container>
    </v-main> -->

    <!-- <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn> -->

    <v-footer color=" lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" text rounded class="my-2">
          {{ link }}
        </v-btn>
        <v-col class=" lighten-2 py-4 text-center " cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
    <ScrollToTop />
  </v-app>
</template>

<script>
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  components: {
    ScrollToTop
  },
  created() {
    this.$vuetify.theme.dark = false;
    // this.$vuetify.theme.dark = true;
  },
  data() {
    return {
      dialog: false,
      drawer: null,
      islight: true,
      navigationsrc: "",
      appbarsrc: "",
      // greetings: new Date(),
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
          children: [
            { icon: "mdi-language-java", text: "Java",link: "/classification/6039284a2684e22ec8291c64" },
            { icon: "mdi-language-python", text: "Python",link: "/classification/603928522684e22ec8291c65" },
            { icon: "mdi-language-c", text: "C",link: "/classification/6603928552684e22ec8291c66" },
            { icon: "mdi-language-javascript", text: "Javascript",link: "/classification/603928572684e22ec8291c67" },
            { icon: "mdi-translate", text: "Other" ,link: "/classification/1"}
          ]
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
      ],
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },
  mounted() {
    const h = new Date().getHours();
    this.$vuetify.theme.dark = (h >= 19 && h <= 24) || (h >= 0 && h <= 7);
    if (h >= 6 && h <= 10) {
      this.greetings = "早上好！👾👾";
    } else if (h > 10 && h <= 14) {
      this.greetings = "中午好！(❁´◡`❁)";
    } else if (h > 14 && h <= 19) {
      this.greetings = "下午好ヾ(≧ ▽ ≦)ゝ";
    } else if (h > 19 && h <= 24) {
      this.greetings = "晚上好！( ఠൠఠ )ﾉ";
    } else if (h > 24 && h <= 8) {
      this.greetings = "好耶！○( ＾皿＾)っHiahiahia…";
    }
    // let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    // this.timer = setInterval(() => {
    //   _this.date = new Date(); // 修改数据date
    // }, 1000);
    if ((h >= 19 && h <= 24) || (h >= 0 && h <= 7)) {
      this.navigationsrc =
        "http://tva1.sinaimg.cn/large/005NWBIgly1gnz3zb8v92j308p0kan2h.jpg";
      this.appbarsrc =
        "http://tva1.sinaimg.cn/large/005NWBIgly1gnz3upue5sj31ea07ctkm.jpg";
      this.islight = false;
    } else {
      this.navigationsrc =
        "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg";
      this.appbarsrc = "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg";
      // this.navigationsrc = "";
      // this.appbarsrc = "";
      this.islight = true;
    }

    // this.handleLoadNoticeStatus();
  },
  methods: {
    handleChangeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.islight === true) {
        this.navigationsrc =
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz3zb8v92j308p0kan2h.jpg";
        this.appbarsrc =
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz3upue5sj31ea07ctkm.jpg";
        this.islight = !this.islight;
        console.log("夜间");
      } else {
        this.navigationsrc =
          "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg";
        this.appbarsrc =
          "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg";
        // this.navigationsrc = "";
        // this.appbarsrc = "";
        console.log("日间");
        this.islight = !this.islight;
      }
    },
    handleShowSide() {
      this.$store.commit("SET_SIDE_STATUS", true);
    }
  }
};
</script>
<style>
.theme--dark.v-application code {
  background-color: rgb(0 0 0 / 0%);
  color: currentColor;
}
</style>
