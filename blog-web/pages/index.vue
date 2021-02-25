<template>
  <v-layout column>
    <PPT />
    <v-row no-gutters>
      <v-col cols="12" sm="8">
        <v-card class="pa-2" outlined tile>
          <ArticleList />
        </v-card>
      </v-col>
      <Tag />
    </v-row>
  </v-layout>
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
