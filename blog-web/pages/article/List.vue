<template>
  <v-col cols="12" xl="8" lg="8" md="8">
    <div>
      <h2 class="text-h4 font-weight-bold pb-4">文章列表</h2>
      <v-row>
        <v-col>
          <v-card class="mx-auto">
            <v-container>
              <v-row dense>
                <v-col v-for="(item, i) in fields" :key="i" cols="12">
                  <v-card to="article">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title
                          class="headline"
                          v-text="item.title"
                        ></v-card-title>

                        <v-card-subtitle
                          v-text="item.updatedAt"
                        ></v-card-subtitle>
                        <v-card-subtitle align-content-end
                          >创建时间{{ item.createdAt }}
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
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get("fields");
    return { fields: data.data };
  }
};
</script>

<style></style>
