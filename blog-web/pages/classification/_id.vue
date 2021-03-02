<template>
  <v-container grid-list-xs>
    <h1>当前分类：</h1>
    <v-divider></v-divider>
    <ArticleList :fields="fields" />
  </v-container>
</template>

<script>
import ArticleList from "../../components/article/ArticleList.vue";
export default {
  async asyncData({ $axios, params }) {
    const id = params.id;
    // console.log(id);
    const fields = await $axios.$get(`classification/article/${id}`);

    return { fields };
  },
  components: { ArticleList }
};
</script>

<style></style>
