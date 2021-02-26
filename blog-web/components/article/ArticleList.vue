<template>
  <v-card class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" to="article">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                <v-card-subtitle align-content-end
                  >2021年2月24日16:36:57 模拟数据
                </v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="150" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>

            <!-- <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src:
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
        title: "这是文章标题",
        artist:
          "原理我们没启动一个docker容器， docker就会给docker容器分配一个ip"
      },
      {
        src:
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        src:
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        src:
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        src:
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        src:
          "http://tva1.sinaimg.cn/large/005NWBIgly1gnz4ieffuxj30i00prhdt.jpg",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ]
  })
};
</script>
