<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <ArticleList />
    </v-flex>
  </v-layout>
</template>

<script>
import ArticleList from "../components/article/ArticleList";

export default {
  components: { ArticleList }
};
</script>
