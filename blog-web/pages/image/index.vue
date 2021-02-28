<template>
  <div>
    {{ recentlyData }}
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const recentlyData = await $axios.$get("contents/6030e7f7381fd347b4c604fc");
    return { recentlyData };
  }
};
</script>
