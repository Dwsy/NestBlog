<template>
    <v-container grid-list-xs>
        <h2 class="title mb-2">当前分类：{{ fields[0].classification.name }}</h2>
        <v-divider></v-divider>
        <ArticleList :fields="fields" />
    </v-container>
</template>

<script>
import ArticleList from "../../components/article/ArticleList";
export default {
    async asyncData({ $axios, params }) {
        const id = params.id;
        // console.log(id);
        const fields = await $axios.$get(`classification/article/${id}`);

        // console.log(fields);
        return { fields };
    },
    components: { ArticleList }
};
</script>

<style></style>
