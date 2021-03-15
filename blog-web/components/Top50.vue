<template>
    <v-container>
        <p>&nbsp;&nbsp;&nbsp;Pixiv每日排行榜Top50</p>
        <v-carousel
            cycle
            hide-delimiter-background
            style="width:100%; height:400px;"
            show-arrows-on-hover
            hide-delimiters
            :interval="5000"
        >
                        <!-- :next-icon="mdo"
                :prev-icon="mdiChevronLeft" -->
            <v-carousel-item

                v-for="(image, i) in pixivTop.image"
                :key="pixivTop[i]"
                :href="'https://www.pixiv.net/' + pixivTop.url[i]"
                target="_blank"
            >
                <div cent>
                    <v-img
                        style="justify-content: center;align-items: center;"
                        :src="image"
                    ></v-img>
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>
<script>
export default {
    props: {
        pixivTop: null
    }
};
</script>

<style></style>

