<template>
    <v-row>
        <div v-on:keyup.enter="search">
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-text-field
                        solo
                        hide-details
                        label="请输入关键词"
                        append-icon="search"
                        v-model="text"
                        class="input-search"
                        autocomplete="off"
                        v-on="on"
                        ref="search"
                    ></v-text-field>
                </template>
                <v-list v-if="items.length > 0" class="border-list" dense>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        @click="itemClick(item)"
                    >
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-row>
</template>
<script>
export default {
    props: {
        SearchFunction: {
            type: Function
        }
    },
    data() {
        return {
            text: "",
            showSelect: true,
            items: []
        };
    },
    watch: {
        text: "inputHandle"
    },
    methods: {
        itemClick(item) {
            this.text = item.name;
            this.$refs.search.blur();
            // this.$router.push()
        },
        inputHandle(text) {
            if (text.trim() !== "") {
                this.showSelect = true;
                setTimeout(() => {
                    this.getEntity();
                }, 700);
            }
        },
        async getEntity() {
            // 请求接口更新 items 数据
            // let a= this.$emit('search',this.text);

            console.log("123");
            let Sdata = await this.SearchFunction(this.text);
            // let SD;
            // Sdata.then(data => {
            //     SD = data;
            // });
            console.log(Sdata);
            this.items=Sdata.S_tag
            // let a = this.$emit("search", this.text, val => {
            //     itemName = val;
            // });
            // console.log(itemName);

            // this.items={}
            // this.items = [
            //   {
            //     key: '1234',
            //     name: '1234'
            //   },
            //   {
            //     key: 'abc',
            //     name: 'abc'
            //   },
            //   {
            //     key: 'def',
            //     name: 'def'
            //   },
            //   {
            //     key: 'ccc',
            //     name: 'ccc'
            //   },
            //   {
            //     key: 'ccc',
            //     name: 'ccc'
            //   },
            //   {
            //     key: 'ccc',
            //     name: 'ccc'
            //   }
            // ]
        },
        search() {
            this.$refs.search.blur();
            console.log(this.text);
            // this.$router.push()
        }
    }
};
</script>
<style scoped>
.input-search {
    width: 40%;
    margin: auto;
}
.width-20-percent {
    width: 20%;
}
.img-div {
    margin: 16vh 0 40px 0;
    text-align: center;
}
.v-menu__content {
    box-shadow: none !important;
}
.border-list {
    border: 1px solid #eee !important;
}
</style>
