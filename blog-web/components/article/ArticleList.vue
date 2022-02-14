<template>
  <v-card elevation="0">
    <v-container>
      <v-row dense>
        <v-col v-for="item in fields" :key="item._id" cols="12">
          <v-hover v-slot:default="{ hover }" close-delay="50">

            <v-card
              :to="'/article/' + item.contentsId['_id']"
              :elevation="hover ? 4 : 1"
              class="animate__animated animate__bounce"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-container>
                  <p
                    class=" text-darken-1 mb-2"
                    v-text="item.title"
                  ></p>
                  <div>
                    <v-img
                      :src="item.cover"
                      max-height="400"
                      :aspect-ratio="8 / 5"
                      lazy-src
                      transition="slide-y-reverse-transition"
                      class="d-sm-none imgbig"
                    ></v-img>
                  </div>
                  
                  <p class="summary" v-if="item.contentsId['menus']">{{item.contentsId.menus.summary}}</p>

                  <v-chip class="ma-1" color="light-blue darken-1" outlined small>
                    <v-avatar center >
                      <v-icon >mdi-tag-outline</v-icon>
                    </v-avatar>
                    Tag
                  </v-chip>

                  <v-chip
                    class="ma-1"
                    v-for="(t, l) in item.tag"
                    :key="l"
                    outlined
                    :to="`/tag/${t._id}`"
                    small
                  >
                    <!-- :to="`/tag/${t._id}`" -->
                    {{ t.name }}
                    <v-avatar v-show="t.icon" >
                      <v-icon>{{ t.icon }}</v-icon>
                    </v-avatar>
                  </v-chip>

                  <v-col>
                    <span align-content-end>
                      <v-icon class="m2" small>mdi-calendar-clock </v-icon>
                      {{ item.createdAt | formatDate("yyyy年MM月dd日")
                      }}<v-icon small>mdi-book </v-icon>分类:{{
                        item.classification.name
                      }}</span
                    >
                    <span style="float: right"><v-icon small>mdi-comment-processing-outline </v-icon>{{
                        item.commentsNum
                      }}</span>
                  </v-col>
                </v-container>

                <v-avatar class="ma-3 d-none d-sm-block imgbig" size="150" tile>
                  <v-img
                    :src="item.coverSmall"
                    lazy-src
                    transition="slide-y-reverse-transition"
                  ></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// import Tag from "./Tag";

export default {
  // components: { Tag },
  
  props: {
    fields: {}
  },
  mounted() {
    // let a=  new Date("2021-02-28T11:35:46.277Z")
    // console.log(a);
  }
};
</script>

<style>
.summary {
    line-height: 2em;
    color: #a3a3a3;
    display: block;
    font-size: 0.4cm;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
