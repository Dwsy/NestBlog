<template>
  <div>
    <div>
      <PPT />
    </div>

    <v-row>
      <v-col cols="12" lg="7" xl="9" md="9" >
        <div >
          <h2 class="text-h4 font-weight-bold pb-4">文章列表</h2>
          <v-row>
            <v-col >
                <ArticleList />
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16" cols="12" md="2" xl="2" lg="3">
          <h2 class="text-h4 font-weight-bold pb-4">标签</h2>
          <Tag />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ArticleList from "../components/article/ArticleList";
import PPT from "../components/article/PPT";
import Tag from "../components/article/Tag.vue";

export default {
  components: {
    ArticleList,
    PPT,
    Tag
  }
};
</script>
