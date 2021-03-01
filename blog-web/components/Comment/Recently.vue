<template>

  <v-card max-width="450">
    <v-list three-line>
      <v-subheader>{{ header }}</v-subheader>
      <template v-for="(item, index) in recently">
        <v-divider :key="item._id" ></v-divider>
        <v-list-item :key="item._id+1" :to="'article/'+item.contentsId">
          <v-list-item-avatar>
            <v-img :src="avatar[index]"></v-img>
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
  data: () => ({
    avatar: [
      "https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=999999999&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=666666&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=5201314&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=37213824&s=100"
    ],
    header: "最近评论"
  })
};
</script>
