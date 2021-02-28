<template>
  <v-card max-width="900" class="mx-auto">
    <v-row justify="space-around">
      <v-col>

        <v-sheet elevation="0" class="pa-10">
                  <h2 class="title mb-2">
          文章筛选
        </h2>
          <v-chip-group column multiple>
            <v-chip
              v-for="tag in tags"
              :key="tag._id"
              :color="tag.colours"
              filter
              label
              
            >
              {{ tag.name }} <b>{{ tag.contentsNum }}</b>
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  // props: {
  //   tags:[]
  // }
  async asyncData({ $axios }) {
    const data = await $axios.$get("tag");
    return { tags: data.data };
  }
  // data: () => ({
  //   tags: [
  //     "Work",
  //     "Home Improvement",
  //     "Vacation",
  //     "Food",
  //     "Drawers",
  //     "Shopping",
  //     "Art",
  //     "Tech",
  //     "Creative Writing"
  //   ]
  // })
};
</script>
