<template>
    <div>

        <v-list v-for="link in data">

                <a :href="link.linksUrl">
                    <v-img
                        :src="link.linksAvatar"
                        max-height="100px"
                        max-width="100px"
                    >
                    </v-img>
                <v-list-item-title>
                    名称：{{ link.linksName }}
                </v-list-item-title>
                <v-list-item-title>{{ link.linksDescription }}</v-list-item-title>
            </a>


        </v-list>
    </div>

</template>

<script>
export default {
    async asyncData({$axios, params}) {
        const data = (await $axios.$get("/links"))['data'];
        console.log(data);
        return {
            data: data
        }
    }
};
</script>

<style>
</style>
