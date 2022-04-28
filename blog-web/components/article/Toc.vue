<template>
    <div class="js-tocc">
        <ol ></ol>
    </div>
</template>

<script>
// import TocHelper from "toc-helper";
// import tocbot from "tocbot";
import tocbot from "tocbot";

export default {
    mounted() {
        // if (innerWidth > 660) {
        //     this.x = true;
        // } else {
        //     this.x = false;
        // }
        // const TOCBOT_OPTIONS = {};
        // console.log(tocbot);
        tocbot.init({
            // Where to render the table of contents.
            tocSelector: ".js-tocc",
            // Where to grab the headings to build the table of contents.
            contentSelector: ".js-toc-content",
            // Which headings to grab inside of the contentSelector element.
            headingSelector: "h1, h2, h3,h4,h5,h6",
            // For headings inside relative or absolute positioned containers within content.
            hasInnerContainers: true,
            includeHtml: true,
            includeTitleTags: true,
            scrollSmoothOffset: -80,
        });
    },
};
</script>

<style>
.js-tocc {
    position: sticky;

    position: -webkit-sticky;

    top: 80px; /* required */
}
</style>
