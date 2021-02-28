<template>
  <v-card max-width="450">
    <v-row justify="space-around">
      <v-col>
        <v-sheet elevation="0" class="pa-10">
          <v-chip-group column>
            <v-chip v-for="tag in tags" :key="tag._id" :color="tag.colours">
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
