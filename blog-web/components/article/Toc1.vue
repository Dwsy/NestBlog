<template>
    <div >
        <div v-if="x">
            <div class="toc">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.min.js"></script>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
                />
                <h5>
                    12312312312
                </h5>
                <ol class="js-toc toc"></ol>
            </div>
        </div>
        <div v-else></div>
    </div>
</template>

<script>
// import TocHelper from "toc-helper";
// import tocbot from "tocbot";
// import tb from "tocbot"

export default {
    props: {
        toc: {},
    },
    data() {
        return {
            drawer: null,
            items: [
                { title: "aome", icon: "mdi-view-dashboard" },
                { title: "about", icon: "mdi-forum" },
            ],
            x: true,
        };
    },
    // mounted() {
    //     if (innerWidth > 660) {
    //         this.x = true;
    //     } else {
    //         this.x = false;
    //     }
    //     const TOCBOT_OPTIONS = {};
    //     tocbot.init({
    //         // Where to render the table of contents.
    //         tocSelector: ".js-toc",
    //         // Where to grab the headings to build the table of contents.
    //         contentSelector: ".js-toc-content",
    //         // Which headings to grab inside of the contentSelector element.
    //         headingSelector: "h1, h2, h3,h4,h5,h6",
    //         // For headings inside relative or absolute positioned containers within content.
    //         hasInnerContainers: true,
    //         includeHtml: true,
    //         includeTitleTags: false,
    //         scrollSmoothOffset: -80,
    //     });
    // },
};
</script>

<style>
.toc {

}
</style>