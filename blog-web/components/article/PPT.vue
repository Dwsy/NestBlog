<template>
  <v-carousel
    cycle
    height="300"
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
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3" style="color:red;">{{ ppt.pptTitle }} </div>
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
