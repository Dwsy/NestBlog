<template>
  <div>
    <v-container>
      <HeadImage/>
      <Content :content="content" :field="field"/>
      <CommentList :comments="comments" />
      <SendComment :id="id" :IP="IP" />
    </v-container>
  </div>
</template>

<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";
import SendComment from '../../components/article/sendComment.vue';
import HeadImage from '../../components/article/HeadImage';

export default {
  async asyncData({ $axios, params }) {
    const id = params.id;
    // console.log(id);
    // const content = await $axios.$get(`contents/${id}`)
    const content = await $axios.$get(`contents/${id}`);
    
    const field= await $axios.$get(`fields/${content.fieldsId}`);
    const comments = await $axios.$get(`comments/${id}`);

    const ipData = await $axios.$get(`http://ip-api.com/json/`);
// console.log(ipData.query);
    return { comments: comments, content: content, id: id ,IP:ipData.query,field:field};
  },
  components: {
    Content,
    CommentList,
    SendComment,
    HeadImage,
  
  }
};
// console.log(this.id);
</script>

<style>


img {
  height: 100%;
  width: 100%;
}
</style>
