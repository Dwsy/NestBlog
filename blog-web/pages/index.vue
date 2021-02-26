<template>
  <div>
    <div>
      <PPT />
    </div>

    <v-row>
      <v-col cols="12" xl="8" lg="8" md="8">
        <div>
          <h2 class="text-h4 font-weight-bold pb-4">文章列表</h2>
          <v-row>
            <v-col>
              <ArticleList />
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col>
        <div cols="12" md="1" lg="1" xl="1">
          <Top-50 />

          <Recently />
          <p class="text-h6 pb-4">标签</p>
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
import Recently from '../components/Recently'
import Top50 from '../components/Top50';

export default {
  components: {
    ArticleList,
    PPT,
    Tag,
    Recently,
    Top50
  }
};
</script>
