<template>
  <v-row>
    <v-col cols="12" xl="10" lg="10" md="10">
      <h2>{{ content.title }}</h2>
      <p>{{ content.createdAt }}</p>
      <!-- <div id="md"></div> -->
      <div v-html="markdownString"></div>
      <!-- mdit支持感人后期换成handsome的 -->
    </v-col>
  </v-row>
</template>

<script>
import Prism from "prismjs";
import marked from "marked";
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: false,
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
export default {
  props: {
    content: {}
  },
  data() {
    return {
      markdownString: ""
    };
  },
  mounted() {
    this.markdownString = marked(this.content.text);
    Prism.highlightAll();
  }
};
</script>
<style scoped></style>
