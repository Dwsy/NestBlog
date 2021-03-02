<template>
  <v-card class="mx-auto" elevation="0">
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in fields" :key="i" cols="12">
          <v-card nuxt :to="'/article/' + item.contentsId" elevation="1">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-chip-group column>
                  <v-chip class="ma-2" color="light-blue darken-1" text-color="white" label>
                    <v-avatar left>
                      <v-icon>mdi-tag-multiple</v-icon>
                    </v-avatar>
                    Tag:
                  </v-chip>
                  <v-chip
                  
                  class="ma-2"
                    v-for="tag in item.tag"
                    :key="tag.name"
                    :to="`/tag/${tag._id}`"
                    outlined
                  >
                    {{ tag.name }}
                    <v-avatar v-show="tag.icon">
                      <v-icon>{{ tag.icon }}</v-icon>
                    </v-avatar>
                  </v-chip>
                </v-chip-group>

                <small align-content-end>创建时间:{{ item.createdAt }} </small>
              </div>

              <v-avatar class="ma-3" size="150" tile>
                <v-img :src="item.coverSmall" lazy-src></v-img>
              </v-avatar>
            </div>

            <!-- <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Tag from "./Tag";

export default {
  components: { Tag },
  comments: {
    Tag
  },
  props: {
    fields: {}
  },

  mounted() {

  }
};
</script>

<style></style>
