<template lang="md">
  <v-row>
    <v-col cols="12" xl="10" lg="10" md="10">
      <h2>{{content.title}}</h2>
      <p>{{content.createdAt}}</p>
      <div v-html="$md.render(content.text)" class="Language"></div>
    </v-col>
  </v-row>
</template>

<script>
import Prism from "prismjs";

export default {
  props: {
    content: {}
  },
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
<style scoped></style>
