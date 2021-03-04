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

<style >
/* 列表 */
li > ol,
li > ul {
  margin: 0 0;
}

li p.first {
  display: inline-block;
}

ul,
ol {
  padding-left: 2rem;
}

ul:first-child,
ol:first-child {
  margin-top: 0;
}

ul:last-child,
ol:last-child {
  margin-bottom: 0;
}

#write ol li,
ul li {
  padding-left: 0.1rem;
}

/* 无序列表，显示为空心圆 */
/* ul {
  list-style-type: circle;
} */

/* 引用 */
blockquote {
  /* margin-left: 1rem; */
  border-left: 0.3rem solid var(--purple-light-4);
  border-radius: 0.4rem;
  padding: 10px 15px;
  color: #777;
  background-color: var(--purple-light-1);
  box-shadow: var(--purple-light-2);
  font-family: var(--quota-font);
}

/* Table Head */
thead th {
  background-color: rgb(81, 130, 187);
  color: #fff;
  border-bottom-width: 0;
}

/* Column Style */
td {
  background-color: rgba(243, 248, 255, 0.986);
  color: #000;
}
/* Heading and Column Style */
tr,
th {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(81, 130, 187);
}

/* Padding and font style */
td,
th {
  padding: 5px 10px;
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}
</style>
