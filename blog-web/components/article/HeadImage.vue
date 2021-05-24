<template>
  <v-container >
    <!-- <img :src="cover" > -->
      <v-img max-height="600px" :src="cover"></v-img>
  </v-container>
</template>

<script>
export default {
  props:{
    cover:''
  }
};
</script>

    <style>

        
        img {
            width: 800px;
            height: 500px;
        }
    </style>
