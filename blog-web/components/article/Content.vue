<template>
<v-row>
  <v-col cols="12" xl="10" lg="10" md="10">
  <div v-html="markdown" class="Language"></div>
  </v-col>
</v-row>
  
</template>

<script>
import markdown  from "../../static/第03章 栈和队列.md";
import Prism from "prismjs";

export default {
  name: "Content",
  computed: {
    markdown() {
      return markdown;
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
.theme--dark.v-application code {
  background-color: rgba(0, 255, 213, 0.1);
}
</style>
