<template>

  <v-card max-width="450">
    <v-list three-line>
      <v-subheader>最近评论</v-subheader>
      <template v-for="item in recently">
        <v-divider :key="item._id" ></v-divider>
        <v-list-item :key="item._id+1" :to="'article/'+item.contentsId">
          <v-list-item-avatar>
            <v-img :src="'https://gravatar.helingqi.com/wavatar/'+item.MD5email+'?s=220&r=X&d=mm'"></v-img>
            
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="item.authorName"></v-list-item-title>
            <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    recently: {}
  },
};
</script>
