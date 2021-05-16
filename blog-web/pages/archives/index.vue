<template>
    <v-container>
        <!--      <code>{{dataArray}}</code>-->
        <v-list v-for="(YY, index) in dataArray" :key="index">
            <v-list-tile-content v-for="(MM, i) in YY" :key="i">
                {{ MM.Y }}年{{ MM.M }}月 - {{MM.ddList.length}}篇文章
                <v-list-group no-action color="primary">
                    <v-list-item
                        :to="'article/' + DD._id"
                        color="pink"
                        v-for="(DD, j) in MM.ddList"
                        :key="j"
                    >
                        {{ DD.D }}日《{{ DD.title }}》
                        <v-divider></v-divider>
                    </v-list-item>
                </v-list-group>
                <v-divider></v-divider>
            </v-list-tile-content>
        </v-list>
    </v-container>
</template>

<script>
import dayjs from "dayjs";

export default {
    async asyncData({ $axios }) {
        return {
            archives: await $axios.$get("/fields/archives")
        };
        // const archives = await $axios.$get("/fields/archives");
        // console.log(archives);
    },
    mounted() {
        this.init();
    },
    data() {
        return {
            dataArray: {}
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
            // console.log(dataArray);
            // this.dataArray = dataArray;
            // console.log("-----------------------");
            // console.log(this.yyResort(dataArray));
            // console.log(this.mmResort(dataArray));
            // console.log("-----------------------");
            this.dataArray = this.Resort(dataArray);
        },
        Resort(data) {
            // 定义空数组，用于存储新组装的数据
            let YY = [];
            let retArray = [];
            // 遍历数组
            data.forEach((item, i) => {
                // 默认当前操作的数据下标 -1
                let index = -1;
                // 判断数组中是否已经存在当前遍历数据的时间
                let isExists = YY.some((newItem, j) => {
                    if (item.Y === newItem.Y) {
                        // 存在就保存当前数据下标  用于插入数据
                        index = j;
                        return true;
                    }
                });
                // 如果没有就存储一条新对象数据
                if (!isExists) {
                    YY.push({
                        Y: item.Y,
                        mmList: [item]
                    });
                } else {
                    // 如果有就插入到已存在的对象中
                    YY[index].mmList.push(item);
                }
            });
            YY.forEach((item, i) => {
                // console.log('1111111111111111111')
                // console.log(item.Y)
                // console.log(this.mmResort(item.mmList))
                // retArray[i].item.Y.push(this.mmResort(item.mmList))
                retArray[i] = this.mmResort(item.mmList);

                // console.log('1111111111111111111')
            });
            console.log(retArray);
            console.log("1111111111111111111");
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
