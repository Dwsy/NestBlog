<template>
    <div>

    </div>
</template>

<script>
export default {

    async asyncData({ $axios }) {
        let v = await $axios.$get(
            "https://infinity-api.infinitynewtab.com/c/i13EJi"
        );
return {data:v.data}
    }
};
</script>

<style>
</style>