<template>
  <v-card >
    <v-list three-line>
      <v-subheader>{{ header }}</v-subheader>
      <template v-for="(item, index) in comments">
        <v-divider :key="item._id"></v-divider>
        <v-list-item :key="item._id + 1">
          <v-list-item-avatar>
            <v-img :src="avatar[index]"></v-img>
          </v-list-item-avatar>
 
          <v-list-item-content>
            <v-list-item-title v-html="item.authorName"></v-list-item-title>
            <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle>
            <b><v-list-item-subtitle v-html="item.createdAt"></v-list-item-subtitle></b>
            
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    comments: {}
  },

  data: () => ({
    avatar: [
      "https://q.qlogo.cn/g?b=qq&nk=1521986032&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=12312312&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=666666&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=5201314&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=37213824&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=123123123&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=4848906213&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=530320241&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=2358615895&s=100",
      "https://q.qlogo.cn/g?b=qq&nk=1519878134&s=100"
    ],
    header: "最近评论"
  })
};
</script>
