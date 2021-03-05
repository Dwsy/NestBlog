<template>

  <v-carousel
    cycle
    height="250"

    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    :interval="5000"
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
          <h4 class="subheading">{{ ppt.pptSubTitle }}</h4>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<!-- Vue Component -->

<script>
export default {
  props: {
    ppts: {}
  },


};
</script>
