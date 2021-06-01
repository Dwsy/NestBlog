<template>
    <v-container>
        <p>&nbsp;&nbsp;&nbsp;Pixiv每日排行榜Top50</p>
        <v-carousel
        
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            hide-delimiters
            :interval="6000"
            height="400px"
            v-if="pixivTop!==null"
        >
            <v-carousel-item
                
                v-for="(image, i) in pixivTop.image"
                :key="pixivTop[i]"
                :href="'https://www.pixiv.net/' + pixivTop.url[i]"
                target="_blank"
                align="center"
            >
                <div style="width: 100%;height:100%;text-align: center;">
                    <v-img


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

