<template>
  <v-row>
    <v-col cols="12" xl="10" lg="10" md="10">
      <v-card>
        <v-list three-line>
          <v-subheader> 评论列表 </v-subheader>
          <template v-for="item in comments">
            <v-divider :key="item._id"></v-divider>
            <v-list-item :key="item._id + 1">
              <v-list-item-avatar>
                <v-img
                  :src="
                    'https://sdn.geekzu.org/avatar/' +
                      item.MD5email +
                      '?s=220&r=X&d=mm'
                  "
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.authorName"></v-list-item-title>
                <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle>
                <b
                  ><v-list-item-subtitle
                    v-html="item.createdAt"
                  ></v-list-item-subtitle
                ></b>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  props: {
    comments: {}
  }
};
</script>
