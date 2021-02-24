<template>
  <div v-html="hello"   class="Language"></div>
</template>

<script>
import hello from "../../static/第03章 栈和队列.md";
import Prism from "prismjs";
export default {
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
