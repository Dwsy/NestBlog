<template>
  <v-container v-if="content.key!==0">
      <div>
          <HeadImage :cover="field.cover"/>
      </div>
      <v-row>
          <v-col cols="12" xl="11" lg="11" md="11" sm="12" xs="12">
              <div>
                  <br/>
                  <v-row>
                      <v-col xl="11" lg="11" md="11">
                          <Content :content="content" :field="field"/>
              <ContentTag :tags="field.tag" />
              <CommentList :comments="comments" :id="id" :IP="IP" />
              <SendComment :id="id" :IP="IP" />
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col>
        <div cols="12" md="1" lg="1" xl="1">
          <br />
          <Catalogue />
        </div>
      </v-col>
    </v-row>
  </v-container>
    <h2 v-else>⭕没有权限访问此文章</h2>
</template>
<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";
import SendComment from "../../components/article/sendComment.vue";
import HeadImage from "../../components/article/HeadImage";
import ContentTag from "../../components/article/ContentTag";
import Catalogue from "../../components/article/Catalogue";
// import Ccomment from '../../components/article/Ccomment';
export default {
  async asyncData({ $axios, params }) {
      let id = params.id;
      if (id === undefined) {
          id = "603e751045d89d46e830734a";//直接通过前缀访问跳转
      }
      const content = await $axios.$get(`contents/${id}`);
      if (content.key == 0) {
          return {
              content: content
          }
      }
      const field = await $axios.$get(`fields/${content.fieldsId}`, {
          params: {
              query: {
                  populate: 'tag classification'
              }
          }
      });
      // const ipData = await $axios.$get(`http://ip-api.com/json/`);
      const comments = await $axios.$get(`comments/${id}`);
      const ipData = await $axios.$get(`fields/ip`);
    // console.log(ipData.query);
    return {
      comments: comments,
      content: content,
      id: id,
      // IP: ipData.query,
      IP: ipData,
      field: field
    };
  },
  components: {
    Content,
    CommentList,
    SendComment,
    HeadImage,
    ContentTag,
    Catalogue,
    // Ccomment
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
