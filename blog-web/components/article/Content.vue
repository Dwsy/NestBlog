<template>
    <!-- <v-row>
    <v-col cols="12" xl="10" lg="10" md="10">
      <h2>{{content.title}}</h2>
      <p>{{content.createdAt}}</p> -->
    <div id="vditor" class="Language"></div>
    <!-- <div v-html="$md.render(content.text)" class="Language"></div> -->
    <!-- mdit支持感人后期换成handsome的 -->
    <!-- </v-col>
  </v-row> -->
</template>

<script>
import Prism from "prismjs";

import Vditor from "vditor";
import "vditor/dist/index.css";

export default {
    props: {
        content: {}
    },
    data() {
        return {
            contentEditor: ""
        };
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

.c {
  filter: invert(1) hue-rotate(180deg);
}
</style>
