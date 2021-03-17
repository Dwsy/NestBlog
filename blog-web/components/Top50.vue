<template>
    <v-container>
        <p>&nbsp;&nbsp;&nbsp;Pixiv每日排行榜Top50</p>
        <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            hide-delimiters
            :interval="5000"
        >
            <v-carousel-item
                v-for="(image, i) in pixivTop.image"
                :key="pixivTop[i]"
                :href="'https://www.pixiv.net/' + pixivTop.url[i]"
                target="_blank"
            >
                <div cent>
                    <v-img
                        style="width:100%; height:100%;"
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

