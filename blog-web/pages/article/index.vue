<template>
  <div>
    <v-container>
      <Content />
      <CommentList />
    </v-container>
  </div>
</template>

<script>
// import Comment  from "./comment";
import Content from "../../components/article/Content";
import CommentList from "../../components/article/CommentList";

export default {
  components: {
    Content,
    CommentList
  }
};
</script>

<style>
img{
  height: 100%;
  width: 100%;
}

</style>
