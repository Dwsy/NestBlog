<template>
  <div>
    <div>
      <PPT v-bind:ppts="ppt" />
    </div>
    <v-row>
      <v-col cols="12" xl="8" lg="8" md="8">
        <div>
          <h2 class="text-h4 font-weight-bold pb-4">文章列表</h2>
          <v-row>
            <v-col>
              <ArticleList v-bind:fields="fields" />
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col>
        <div cols="12" md="1" lg="1" xl="1">
          <Top-50 />

          <Recently v-bind:recently="recently" />
          <p class="text-h6 pb-4">标签</p>
          <Tag v-bind:tags="tag" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PPT from "../components/article/PPT";
import Tag from "../components/article/Tag";
import Recently from "../components/Comment/Recently";
import Top50 from "../components/Top50";
import ArticleList from "../components/article/ArticleList";
export default {
  async asyncData({ $axios }) {
    const fieldsData = await $axios.$get("fields");
    const recentlyData = await $axios.$get("comments", {
      params: {
        query: {
          limit: 5,
          page: 1
        }
      }
    });
    console.log("commentscommentscommentscomments");
    const tagData = await $axios.$get("tag");
    const pptData = await $axios.$get("settingoptions");

    return {
      fields: fieldsData.data,
      ppt: pptData.data,
      recently: recentlyData.data,
      tag: tagData.data
    };
  },
  components: {
    PPT,
    Tag,
    Recently,
    Top50,
    ArticleList
  }
};
</script>
