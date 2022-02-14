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
                style="text-decoration:none"
            > -->
                <a @click="handleGoToScroll(item.target)">
                    <!-- :href="`${item.target}` -->
                    {{ item.title }}
                    {{ click }}
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
    methods: {
        handleGoToScroll(target) {
            // console.log(target);
            const el = document.getElementById(target.substring(1));
            // console.log(el);
            if (!el) return;
            // location.href = target;

            const topSize = this.getElementToPageTop(el);
            // console.log(topSize);
            // console.log(target);
            this.$vuetify.goTo(topSize - 4150);
        },
        getElementToPageTop(el) {
            if (el.parentElement) {
                return (
                    this.getElementToPageTop(el.parentElement) + el.offsetTop
                );
            }
            return el.offsetTop;
        }
    }
    // mounted() {
    //     // console.log(this.menus);
    //     const hash = this.$route.hash;
    //     this.currentTitleHash = "#" + (hash || "");
    //     if (hash) {
    //         this.$nextTick(() => {
    //             this.handleGoToScroll(hash);
    //         });
    //     }
    //     this.$scrollListenCallback = this.$scrollListen.bind(this);
    //     this.initMenuScrollListen();
    // }
};
</script>

<style>
</style>