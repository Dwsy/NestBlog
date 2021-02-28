<template>
  <div>
    <v-container>
      <Content />
      <CommentList v-bind:comments="comments" />

    </v-container>
  </div>
</template>

<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";

export default {
  async asyncData({ $axios }) {
    const recentlyData = await $axios.$get("comments", {
      params: {
        query: {
          limit: 10,
          page: 1
        }
      }
    });
    return { comments:recentlyData.data };
  },
  components: {
    Content,
    CommentList
  }
};
</script>

<style>
.theme--dark.v-application code {
  background-color: rgba(0, 0, 0, 0);
}
img {
  height: 100%;
  width: 100%;
}
</style>
