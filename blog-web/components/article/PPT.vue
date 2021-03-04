<template>
  <v-carousel
    cycle
    height="250"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <v-carousel-item
      v-for="ppt in ppts"
      :key="ppt._id"
      :to="ppt.pptLink"
      :src="ppt.pptImage"
    >
      <v-row class="fill-height" align="center" justify="center">

      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">{{ ppt.pptTitle }}</h1>
        <h4 class="subheading">{{ ppt.pptTitle }}</h4>
      </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    ppts: {}
  }
  // data() {
  //   return {
  //     colors: [
  //       "indigo",
  //       "warning",
  //       "pink darken-2",
  //       "red lighten-1",
  //       "deep-purple accent-4"
  //     ],
  //     slides: ["First", "Second", "Third", "Fourth", "Fifth"]
  //   };
  // }
};
</script>
