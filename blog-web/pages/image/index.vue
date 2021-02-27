<template>
  <div>
    {{ recentlyData }}
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const recentlyData = await $axios.$get("comments", {
      params: {
        query: {
          limit: 5,
          page: 1
        }
      }
    });
    return { recentlyData };
  }
};
</script>
