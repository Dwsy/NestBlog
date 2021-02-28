<template>
  <v-container grid-list-xs class="main">
    <div>
      <PPT v-bind:ppts="ppt" />
    </div>
    <v-row>
      <v-col cols="12" xl="8" lg="8" md="8">
        <div>
          <br />
          <!-- <h2 class="font-weight-bold pb-4">文章列表</h2> -->
          <v-row>
            <v-col>
              <ArticleList v-bind:fields="fields" />
              <Paging />
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col>
        <div cols="12" md="1" lg="1" xl="1">
          <br />
          <!-- <br />
          <br />
          <br /> -->
          <Recently v-bind:recently="recently" />
          <Top-50 />
          <p class="text-h6 pb-4">标签</p>
          <Tag v-bind:tags="tag" />
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PPT from "../components/article/PPT";
import Tag from "../components/article/Tag";
import Recently from "../components/Comment/Recently";
import Top50 from "../components/Top50";
import ArticleList from "../components/article/ArticleList";
import Paging from '../components/article/paging.vue';
export default {
  async asyncData({ $axios }) {
    const fieldsData = await $axios.$get("fields" ,{
      params: {
        query: {
          limit: 10,
          page: 1
        }
      }
    });
    // const recentlyData = await $axios.$get("comments/recently", {
    //   params: {
    //     query: {
    //       limit: 5,
    //       page: 1
    //     }
    //   }
    // });
    const recentlyData = await $axios.$get("comments/recently");
    console.log("commentscommentscommentscomments");
    const tagData = await $axios.$get("tag");
    const pptData = await $axios.$get("settingoptions");

    return {
      fields: fieldsData.data,
      ppt: pptData.data,
      recently: recentlyData,
      // recently: {},
      tag: tagData.data
    };
  },
  components: {
    PPT,
    Tag,
    Recently,
    Top50,
    ArticleList,
    Paging
  }
};
</script>
<style >
/* .v-main__wrap {
  background-image: url("http://tvax4.sinaimg.cn/large/005NWBIgly1gnjk42z6j5j31uo1rwhdt.jpg");
} */
</style>
