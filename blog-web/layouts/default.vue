<template>
  <v-app id="inspire">
    <v-navigation-drawer

      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      dark
      :src="navigationsrc"
    >
      <v-list>
        <v-col cols="10">
          <v-avatar size="50px" class="img-full">
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
              :to="'/classification/' + child._id"
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

    <!-- <Navigation  :navigationsrc="navigationsrc"/> -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app

      dark

      
      :src="appbarsrc"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Dwsy-blog</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 30vw">
        <!-- <v-text-field
          placeholder="搜索..."
          append-icon="mdi-magnify"
          single-line
          filled
          rounded
          dense
          color="white"
          hide-details
        /> -->
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
import Navigation from "../components/Comment/Navigation";

export default {
  components: {
    ScrollToTop,
    Navigation
  },
  async created() {
    this.$vuetify.theme.dark = true;
    const classificationData = await this.$axios.$get("classification");
    this.items[5].children = classificationData.data;
    // console.log(classificationData);
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
          children: []
        },
        {
          icon: "mdi-account-multiple-outline",
          text: "友情链接",
          link: "/firend"
        },
        {
          icon: "mdi-infinity",
          text: "infinitynewtab",
          link: "/infinitynewtab"
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
    // console.log(classificationData);
    // let classification = JSON.parse(localStorage.getItem("classifications"));
    // console.log(classification);
    // console.log(this.items[5]);
    // this.items[5].children = classificationData.data;
    // console.log(this.items[5]);
    const h = new Date().getHours();
    this.$vuetify.theme.dark = (h >= 19 && h <= 24) || (h >= 0 && h <= 7);
    if (h >= 6 && h <= 10) {
      this.greetings = "早上好！👾👾";
    } else if (h > 10 && h <= 14) {
      this.greetings = "中午好！(❁´◡`❁)🙂";
    } else if (h > 14 && h <= 19) {
      this.greetings = "下午好ヾ(≧ ▽ ≦)ゝ🤯";
    } else if (h > 19 && h <= 24) {
      this.greetings = "晚上好！( ఠൠఠ )ﾉ👻";
    } else if (h > 0 && h <= 8) {
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

.img-full {
  width: 100px;
  border-radius: 50%;
  /* animation: light 8s ease-in-out infinite; */
  transition: 0.5s;
}
.img-full:hover {
  transform: scale(1.15) rotate(720deg);
}

.imgbig:hover {
  transform: scale(1.25);
  cursor: pointer;
  transition: all 0.8s;
}
</style>
