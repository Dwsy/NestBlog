<template lang="md">
  <v-row>
    <!-- <v-card>
      <v-img max-height="400"
        :src="field.cover"></v-img>
    </v-card> -->
    <v-col>
      <h2>{{field.title}}</h2>
      <br>
      <span>创建时间：{{content.createdAt|formatDate('yyyy年MM月dd日')}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分类：{{field.classification.name}}</span>
      <div v-html="$md.render(content.text)" class="Language"></div>
      <p class="caption">最后修改时间：{{content.createdAt|formatDate('yyyy年MM月dd日')}}</p>
    </v-col>



  </v-row>
  
</template>

<script>
import Prism from "prismjs";

export default {
  // components: {
  //   ContentTag
  // },
  props: {
    content: {},
    field: {}
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style scoped></style>
