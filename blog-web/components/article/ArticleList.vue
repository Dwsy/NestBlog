<template>
  <v-card class="mx-auto" elevation="0">
    <v-container>
      <v-row dense >
        <v-col v-for="(item, i) in fields" :key="i" cols="12" >
          <v-card nuxt :to="'/article/'+item.contentsId" elevation="1">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.updatedAt"></v-card-subtitle>
                <v-card-subtitle align-content-end
                  >创建时间:{{ item.createdAt }}
                </v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="150" tile>
                <v-img :src="item.coverSmall"></v-img>
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
export default {
  // name:ArticleList,
  props: {
    fields:{},
    // titles:{}
  }
};
</script>

<style></style>
