<template>
    <v-card class="menus_box">
        <v-card-title>导航</v-card-title>
        <ul class="menus">
            <!-- <li class="menu menu-h1">{{ data.title }}</li> -->
            <li v-for="(item, index) in toc" :key="index">
                <!-- <li
                v-for="(item, index) in toc"
                :key="index"
                :class="
                    'menu menu-' +
                        item.type +
                        ' ' +
                        (currentTitleHash == item.target ? 'active' : '')
                "
                @click="handleGoToScroll(item.target)"
            > --><a :href="`${item.target}`" style="text-decoration:none">
                    {{ item.title }}
                </a>
            </li>
        </ul>
    </v-card>
</template>

<script>
export default {
    props: {
        toc: {}
    },
    // methods: {
    //     handleGoToScroll(target) {
    //         console.log(target);
    //         const el = document.querySelector(target);

    //         if (!el) return;
    //         location.href = target;

    //         const topSize = this.getElementToPageTop(el);
    //         console.log(topSize);
    //         this.$vuetify.goTo(topSize - 20);
    //     }
    // }
    // // mounted() {
    // //     // console.log(this.menus);
    // //     const hash = this.$route.hash;
    // //     this.currentTitleHash = "#" + (hash || "");
    // //     if (hash) {
    // //         this.$nextTick(() => {
    // //             this.handleGoToScroll(hash);
    // //         });
    // //     }
    // //     this.$scrollListenCallback = this.$scrollListen.bind(this);
    // //     this.initMenuScrollListen();
    // // }
};
</script>

<style>
</style>