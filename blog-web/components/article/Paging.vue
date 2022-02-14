<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="length"></v-pagination>
  </div>
</template>
<script>
export default {
  props: {
    // nowpage: '',
    length: ""
  },
  data() {
    return {
      page: Number
    };
  },
  created() {
    // console.log("test")
    // console.log(this.page)
  },
  watch:{
			page: {
				handler(val){
					// console.log(`当前为第${this.page}页`);
          this.$router.push(`${this.page}`)
          // this.page=this.nowpage
				},
				deep: true

			}
		}
};
</script>
