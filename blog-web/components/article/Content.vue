<template>
  <div v-html="hello" class="Language"></div>
</template>

<script>
import hello from "../../static/第03章 栈和队列.md";
import Prism from "prismjs";

export default {
  name: "Content",
  computed: {
    hello() {
      return hello;
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
