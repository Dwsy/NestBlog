<template>
  <div>
    <ArticleList :fields="fields" />
    <p>{{ fields }}</p>
  </div>
</template>

<script>
import ArticleList from "../../components/article/ArticleList.vue";
export default {
  async asyncData({ $axios, params }) {
    const id = params.id;
    console.log(id);
    const fields = await $axios.$get(`classification/article/${id}`);
    return { fields };
  },
  components: { ArticleList }
};
</script>

<style></style>
