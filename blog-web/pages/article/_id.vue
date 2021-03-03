<template>
  <div>
    <v-container>
      <HeadImage />
      <Content :content="content" :field="field" />
      <Catalogue />
      <ContentTag :tags="field.tag" />
      <CommentList :comments="comments" />
      <SendComment :id="id" :IP="IP" />
    </v-container>
  </div>
</template>

<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";
import SendComment from "../../components/article/sendComment.vue";
import HeadImage from "../../components/article/HeadImage";
import ContentTag from "../../components/article/ContentTag";
import Catalogue from "../../components/article/Catalogue";

export default {
  async asyncData({ $axios, params }) {
    let id = params.id;
    if (id === undefined) {
      id = "603e751045d89d46e830734a";
    }
    // console.log(id);
    // const content = await $axios.$get(`contents/${id}`)
    const content = await $axios.$get(`contents/${id}`);
    // console.log(content.fieldsId);
    const field = await $axios.$get(`fields/${content.fieldsId}`, {
      params: {
        query: {
          populate: "tag classification"
        }
      }
    });
    const comments = await $axios.$get(`comments/${id}`);

    const ipData = await $axios.$get(`http://ip-api.com/json/`);
    // console.log(ipData.query);
    return {
      comments: comments,
      content: content,
      id: id,
      IP: ipData.query,
      field: field
    };
  },
  components: {
    Content,
    CommentList,
    SendComment,
    HeadImage,
    ContentTag,
    Catalogue
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
