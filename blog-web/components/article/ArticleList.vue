<template>
  <v-card elevation="0">
    <v-container>
      <v-row dense>
        <v-col v-for="item in fields" :key="item._id" cols="12">
          <v-card :to="'/article/' + item.contentsId" elevation="1">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-container>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
                <v-img
                  :src="item.coverSmall"
                  max-height="400"
                  :aspect-ratio="16 / 9"
                  lazy-src
                ></v-img>

                <v-chip-group column>
                  <v-chip
                    class="ma-2"
                    color="light-blue darken-1"
                    text-color="white"
                    label
                  >
                    <v-avatar center>
                      <v-icon>mdi-tag-multiple</v-icon>
                    </v-avatar>
                  </v-chip>
                  <v-chip
                    class="ma-2"
                    v-for="(t, l) in item.tag"
                    :key="l"
                    outlined
                    :to="`/tag/${t._id}`"
                  >
                    <!-- :to="`/tag/${t._id}`" -->
                    {{ t.name }}
                    <v-avatar v-show="t.icon">
                      <v-icon>{{ t.icon }}</v-icon>
                    </v-avatar>
                  </v-chip>
                </v-chip-group>

                <v-col>

                    <span align-content-end>
                    <v-icon class="m2">mdi-calendar-clock </v-icon>  
                    {{
                      item.createdAt | formatDate("yyyy年MM月dd日")
                    }}<v-icon>mdi-book </v-icon>分类:{{ item.classification.name }}</span>
                    <v-spacer></v-spacer>
                </v-col>
              </v-container>
            </div>
          </v-card>
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

<style></style>
