<template>
    <v-container>
        <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            hide-delimiters
            :show-arrows="false"
            :interval="6000"
            v-if="pixivTop !== null"
        >
            <v-carousel-item
                v-for="(image, i) in pixivTop.image"
                :key="pixivTop[i]"
                :href="'https://www.pixiv.net/' + pixivTop.url[i]"
                target="_blank"
                align="center"
                
            >
                <table class="img_meng_show">
                    <tr>
                        <td>
                            <v-img
                                style="width: 100%;height:100%"
                                :src="image"
                            ></v-img>
                        </td>
                    </tr>
                </table>

                <div></div>
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

<style>
.img_meng_show td {
    vertical-align: middle;
    text-align: center;
}
</style>

