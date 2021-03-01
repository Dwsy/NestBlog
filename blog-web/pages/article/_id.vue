<template>
  <div>
    <v-container>
      <Content :content="content" />
      <CommentList v-bind:comments="comments" />
      <SendComment :id="id" :IP="IP" />
    </v-container>
  </div>
</template>

<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";
import SendComment from '../../components/article/sendComment.vue';

export default {
  async asyncData({ $axios, params }) {
    const id = params.id;
    // console.log(id);
    // const content = await $axios.$get(`contents/${id}`)
    const content = await $axios.$get(`contents/${id}`);
    const comments = await $axios.$get(`comments/${id}`);
    const ipData = await $axios.$get(`http://ip-api.com/json/`);
console.log(ipData.query);
    return { comments: comments, content: content, id: id ,IP:ipData.query};
  },
  components: {
    Content,
    CommentList,
    SendComment
  }
};
// console.log(this.id);
</script>

<style>

body pre{
  background-color: #ffffff00 !important;
}
img {
  height: 100%;
  width: 100%;
}
</style>
