<template>
    <div>{{ comments }}</div>
</template>

<script>

export default {
    props: {
        comments: []
    },
    async created() {
        this.comments = await this.$http.recently();
    }
};
</script>

<style></style>
