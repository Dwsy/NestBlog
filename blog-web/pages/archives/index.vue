<template>
  <v-container>
    <!--      <code>{{dataArray}}</code>-->
    <v-card-title primary-title>
      文章归档:共{{sum}}篇
      <v-spacer></v-spacer>
      <v-btn depressed small to="/archives/tree" color="primary">切换风格</v-btn>
    </v-card-title>
    <v-row>
      <v-col cols="12" xl="8" lg="8" md="8" sm="8" xs="8">
        <v-timeline v-for="(YY, index) in dataArray" :key="index">
          <v-timeline-item v-for="(MM, i) in YY" :key="i" right reverse>
            <template v-slot:opposite>
                        <span :class="`headline font-weight-bold`">
                            {{ MM.Y }}年
                        </span>
            </template>

            <v-list-group  color="primary" prepend-icon="account-circle" no-action >

              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title >{{ MM.M }}月 - {{MM.ddList.length}}篇文章</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                :to="'/article/' + DD._id"

                v-for="(DD, j) in MM.ddList"
                :key="j"
              >
                {{ DD.D }}日《{{ DD.title }}》
              </v-list-item>
            </v-list-group>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
// import dayjs from "dayjs";

export default {
  async asyncData({$axios}) {
    let data = await $axios.$get("/fields/archives")
    // console.log()
    return {
      archives: data,
      sum:data.length
    };
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      dataArray: {},
    };
  },
  methods: {
    init() {
      let data = this.archives;
      let dataArray = [];
      for (let i = 0; i < data.length; i++) {
        let date = new Date(data[i].createdAt);
        dataArray[i] = {
          title: data[i].title,
          Y: date.getFullYear().toString(),
          M: (date.getMonth() + 1).toString(),
          D: date.getDate().toString(),
          _id: data[i].contentsId
        };
      }
      this.dataArray = this.Resort(dataArray);
    },
    Resort(data) {
      let YY = [];
      let retArray = [];
      data.forEach((item, i) => {
        let index = -1;
        let isExists = YY.some((newItem, j) => {
          if (item.Y === newItem.Y) {
            index = j;
            return true;
          }
        });
        if (!isExists) {
          YY.push({
            Y: item.Y,
            mmList: [item]
          });
        } else {
          YY[index].mmList.push(item);
        }
      });
      YY.forEach((item, i) => {
        retArray[i] = this.mmResort(item.mmList);
      });
      return retArray;
    },
    mmResort(data) {
      // 定义空数组，用于存储新组装的数据
      let MM = [];
      // 遍历数组
      data.forEach((item, i) => {
        // 默认当前操作的数据下标 -1
        let index = -1;
        // 判断数组中是否已经存在当前遍历数据的时间
        let isExists = MM.some((newItem, j) => {
          if (item.M === newItem.M) {
            // 存在就保存当前数据下标  用于插入数据
            index = j;
            return true;
          }
        });
        // 如果没有就存储一条新对象数据
        if (!isExists) {
          MM.push({
            Y: item.Y,
            M: item.M,
            ddList: [item]
          });
        } else {
          // 如果有就插入到已存在的对象中
          MM[index].ddList.push(item);
        }
      });
      return MM;
    }
  }
};
</script>

<style>
</style>
