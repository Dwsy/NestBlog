<template>

  <v-carousel
    cycle
    class="carousel"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    :interval="6000"
    :height="carouselHeight"
  >
    <v-carousel-item
      v-for="ppt in ppts"
      :key="ppt._id"
      :to="ppt.pptLink"
      :src="ppt.pptImage"
    >

      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 ppt">{{ ppt.pptTitle }}</h1>
          <h4 class="subheading ppt">{{ ppt.pptSubTitle }}</h4>
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
  mounted() {
    let innerWidth=window.innerWidth
    if (innerWidth>660){
      this.carouselHeight='500px'
    }else {
      this.carouselHeight='200px'
    }

  },
  data(){
    return {
      innerWidth:0,
      carouselHeight:'',
    }
  },
  watch: {
    innerWidth: function(val) {

      // console.log(this.innerWidth)
    }
  },
  // data: function() {
  //   return {
  //     visible: false,
  //     windowWidth: Document.DocumentElement.clientWidth, //实时屏幕宽度
  //     windowHeight: Document.ocumentElement.clientHeight, //实时屏幕高度
  //   }
  // },


};
</script>
<style>



.ppt{
  text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;

  -webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;

  -moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;


}
</style>
