<template>

  <v-row>
    <!-- <h1>nmsl</h1> -->
    <!-- <v-card>
      <v-img max-height="400"
        :src="field.cover"></v-img>
    </v-card> -->
    <v-col>
      <h2>{{field.title}}</h2>
      <br>
      <span>创建时间：{{content.createdAt|formatDate('yyyy年MM月dd日')}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp分类：{{field.classification.name}}</span>
      <!-- <div v-html="$md.render(content.text)" ></div> -->
      <div v-html="content.text" class="content"></div>

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

<style scoped>

.content >>>  p {
  margin: 0 0 20px 0;
}
.content >>>  h1 {
  font-size: 30px;
}
.content >>>  h2 {
  font-size: 24px;
}
.content >>>  h1:before,
.content >>>  h2:before {
  display: block;
  content: "";
  margin-top: 30px;
}
.content >>>  h1:after,
.content >>>  h2:after {
  display: block;
  content: "";
  margin-bottom: 10px;
}
.content >>>  h1,
.content >>>  h2 {
  background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(189, 202, 219, 0.3) 0
    )
    no-repeat;
  width: auto;
  display: inline;
}
.content >>>  h3 {
  font-size: 20px;
}
.content >>>  h4 {
  font-size: 15px;
}
.content >>>  h1,
.content >>>  h2,
.content >>>  h3,
.content >>>  h4,
.content >>>  h5,
.content >>>  h6 {
  color: #666;
  line-height: 1.4;
  font-weight: 700;
  margin: 30px 0 10px 0;
}
.content >>>  button {
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
}
.content >>>  button a {
  color: #fff !important;
  outline: 0 !important;
  border: none !important;
}
.content >>>  .table-responsive,
.content >>>  blockquote,
.content >>>  ol,
.content >>>  pre,
.content >>>  ul {
  margin: 1.5em 0;
}
.entry-content blockquote:first-child,
.entry-content h2:first-child,
.entry-content h3:first-child,
.entry-content h4:first-child,
.entry-content ol:first-child,
.entry-content p:first-child,
.entry-content pre:first-child,
.entry-content ul:first-child,
.entry-content > h1:first-child {
  margin-top: 0 !important;
}
blockquote ol:last-child,
blockquote p:last-child,
blockquote ul:last-child {
  margin-bottom: 0 !important;
}
.content >>>  blockquote {
  margin: 1.6em -31px;
  padding: 13px 45px !important;
  border-left: 3px solid #dde6e9 !important;
  background-color: #f3f5f7;
}
@media (max-width: 767px) {
  .content >>>  blockquote {
    margin: 1.6em -17px;
  }
}
#comments pre,
.content >>>  pre {
  padding: 0;
  border-radius: 0;
  overflow: hidden;
  position: relative;
}
.content >>> pre {
  padding: 0;
}
.content >>> pre code {
  display: block;
  overflow-x: auto;
  position: relative;
  margin: 0;
  padding: 15px;
}

.content >>> a:hover,
.wrapper-lg .entry-content a:hover {
  color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
}
.content >>> a {
  display: inline;
}
.content >>> a,
.content >>> a {
  color: #000000;
  border-bottom-color: #222;
  border-bottom: 1px solid #999;
  word-wrap: break-word;
  word-break: break-all;
}

.content >>> table {
  width: 100%;
  overflow: auto;
  display: table;
  font-size: 14px;
  border-spacing: 0;
  border-collapse: collapse;
  word-break: normal;
  word-wrap: normal;
  margin-bottom: 1px;
}
@media (max-width: 767px) {
  .content >>> table {
    margin-bottom: 0;
  }
}
.content >>> table th {
  font-weight: 700;
  background-color: #f8f8f8;
}
.content >>> table td,
.content >>> table th {
  padding: 6px 13px;
  word-break: keep-all;
}
.content >>> table tr {
  background-color: #fff;
}
.content >>> table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
.content >>> table th[align="left"] {
  text-align: left;
}
.content >>> table th[align="center"] {
  text-align: center;
}
.content >>> table th[align="right"] {
  text-align: right;
}




.content >>> hr {
    margin: 1.5em auto;
    border-top: 2px dotted #eee;
}
/* 列表 */
.content >>> li > ol,
.content >>> li > ul {
  margin: 0 0;
}

.content >>> li p.first {
  display: inline-block;
}

.content >>> ul,
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
.content >>> blockquote {
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
.content >>>thead th {
  background-color: rgb(81, 130, 187);
  color: #fff;
  border-bottom-width: 0;
}

/* Column Style */
.content >>>td {
  background-color: rgba(243, 248, 255, 0.986);
  color: #000;
}
/* Heading and Column Style */
.content >>>tr,
.content >>>th {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(81, 130, 187);
}

/* Padding and font style */
.content >>>td,
.content >>>th {
  padding: 5px 10px;
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}
</style>
