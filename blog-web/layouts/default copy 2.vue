<template>

    <v-app id="inspire">

      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-row v-if="item.heading" :key="item.heading" align="center">
              <v-col cols="6">
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-col>
              <v-col cols="6" class="text-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-col>
            </v-row>
            <v-list-group
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
              <v-list-item v-for="(child, i) in item.children" :key="i" link>
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else :key="item.text" link>
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
      <!-- v-app-bar -->
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span class="hidden-sm-and-down">Dwsy-blog</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="搜索"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" item>
            <v-img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify"
            ></v-img
          ></v-avatar>
        </v-btn>
      </v-app-bar>

      <!-- v-main -->
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-tooltip right>
              <template v-slot:activator="{ on }">

              </template>
              <span>Source</span>
            </v-tooltip>
          </v-row>
        </v-container>
      </v-main>

      <!-- <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn> -->


    </v-app>

</template>

<script>
export default {
  created() {
    this.$vuetify.theme.dark = false;
  },
  data() {
    return {
      dialog: false,
      drawer: null,
      items: [
        { icon: "mdi-home-outline", text: "博客首页", link: "/" },
        { icon: "mdi-flag-variant-outline", text: "文章归档", link: "/" },
        { icon: "mdi-google-photos", text: "时光机", link: "/" },
        { icon: "mdi-image", text: "相册", link: "/" },
        { icon: "mdi-tag-multiple-outline", text: "Tag", link: "/" },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "文章分类",
          model: false,
          children: [
            { icon: "mdi-language-java", text: "Java" },
            { icon: "mdi-language-python", text: "Python" },
            { icon: "mdi-language-c", text: "C" },
            { icon: "mdi-language-javascript", text: "Javascript" },
            { icon: "mdi-translate", text: "Other" }
          ]
        },

        { icon: "mdi-account-multiple-outline", text: "友情链接", link: "/" },
        { icon: "mdi-information-variant", text: "关于", link: "/" }
        // {
        //   icon: "mdi-chevron-up",
        //   "icon-alt": "mdi-chevron-down",
        //   text: "Labels",
        //   model: true,
        //   children: [{ icon: "mdi-plus", text: "Create label" }]
        // },

        // { icon: "mdi-cog", text: "Settings" },
        // { icon: "mdi-message", text: "Send feedback" },
        // { icon: "mdi-help-circle", text: "Help" },
        // { icon: "mdi-cellphone-link", text: "App downloads" },
        // { icon: "mdi-keyboard", text: "Go to the old version" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  }
};
</script>
