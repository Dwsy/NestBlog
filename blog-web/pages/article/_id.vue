<template>
  <div>
    <v-container>
      <Content :content="content" />
      <CommentList v-bind:comments="comments" />
    </v-container>
  </div>
</template>

<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";

export default {
  async asyncData({ $axios, params }) {
    const id = params.id;
    console.log(id);
    // const content = await $axios.$get(`contents/${id}`)
    const content = await $axios.$get(`contents/${id}`);
    const comments = await $axios.$get(`comments/${id}`);
    return { comments: comments, content: content, id: id };
  },
  components: {
    Content,
    CommentList
  }
};
// console.log(this.id);
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
