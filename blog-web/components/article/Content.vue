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
      
      <div id="vditor" class="Language"></div>
      
      <!-- <div v-html="$md.render(content.text)" class="Language"></div> -->
      
      <p class="caption">最后修改时间：{{content.createdAt|formatDate('yyyy年MM月dd日')}}</p>
    </v-col>



  </v-row>
  
</template>

<script>
import Prism from "prismjs";

import Vditor from "vditor";
import "vditor/dist/index.css";

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

        this.contentEditor = new Vditor("vditor", {
            // theme: "dark",
            preview: {
                theme: {
                    // current: "dark"
                },
                hljs: {
                  // lineNumber:true,
                  // style:"monokai"
                    // enable: false
                }
            },
            mode: "ir",
            icon: "material",

            toolbarConfig: {
                pin: false,
                hide: true
            },
            cache: {
                enable: false
            },
            after: () => {
                this.contentEditor.setValue(this.content.text);
            }
        });

  }
};
</script>
<style scoped>
 h1,p {font-size: 30px}
 h2 {position: relative;margin: 20px 0 32px!important;font-size: 1.55em;}
 h3 {font-size: 20px}
 h4 {font-size: 15px}
 h2::after {transition:all .35s;content:"";position:absolute;background:linear-gradient(#3c67bd8c 30%,#3c67bd 70%);width:1em;left:0;box-shadow:0 3px 3px rgba(32,160,255,.4);height:3px;bottom:-8px;}
 h2::before {content:"";width:100%;border-bottom:1px solid #eee;bottom:-7px;position:absolute}
 h2:hover::after {width: 2.5em;}
 h1, h2, h3, h4, h5, h6 {color:#666;line-height:1.4;font-weight:700;margin:30px 0 10px 0}
</style>
