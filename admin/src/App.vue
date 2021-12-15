<template>
    <v-app>
        <router-view />
    </v-app>
</template>
<script>

export default {
    updated() {
        
        const dom = document.getElementById('loading');
        if (dom) {
            dom.remove();
            console.log("加载完成");
        }
    },
    created() {
        // console.log(process.env);
    }
};
</script>

