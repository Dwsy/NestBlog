<template>
    <main>
        <div class="list" v-for="i in data" :key="i.id">
            <span>
                {{ i.text }}
            </span>
            <div class="date">2022-3-16 15:50:46</div>
            <!-- .pull-right {  } -->
        </div>
        <!-- <p>
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
        </p>
        <p>
            Shoober shooberino adorable doggo many pats, heckin good boys many
            pats pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow
            very biscit.
        </p>
        <p>
            Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot
            for pats big ol, he made many woofs doing me a frighten puggo wow
            very biscit, ruff fat boi ruff long doggo.
        </p>
        <p>
            Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big
            ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats
            snoot. I am bekom fat ur givin me a spook length boy wow very biscit
            very good spot.
        </p>
        <p>
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
        </p> -->
    </main>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    text: "一寸光阴一寸金，寸金难买寸光阴。",
                },
                {
                    id: 2,
                    text: "人需要真理，就像瞎子需要明快的引路人一样。——高尔基",
                },
                {
                    id: 3,
                    text: "人的美德的荣誉比他的财富的荣誉不知大多少倍。——达·芬奇",
                },
                {
                    id: 4,
                    text: "时间最不偏私，给任何人都是二十四小时；时间也最偏私，给任何人都不是二十四小时。——赫胥黎",
                },
            ],
        };
    },
};
</script>
<style scoped>
.list {
    border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%)
}
.date {
    text-align: right;
    /* top: 20px; */
}
</style>
<style  lang="sass" scoped>
//Text Styles 
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700")
$font-sans: 'Open Sans', sans-serif

//Colors
$black: #34435E
$white: #ffffff

body
  font-family: $font-sans
  margin: 0
  padding: 0 4em

main
  min-width: 300px
  max-width: 70%
  margin: auto

.list
  font-size: 1em
  line-height: 1.75em
  border-top: 3px solid
  // border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%)

  border-image-slice: 1
  border-width: 3px
  margin: 0
  padding: 40px
  counter-increment: section
  position: relative
  // color: $black

  //numbers
  &:before
    content: counter(section)
    position: absolute
    border-radius: 50%
    // padding: 10px
    height: 1.25em
    width: 1.25em
    background-color: $black
    text-align: center
    line-height: 1.25em
    color: $white
    font-size: 1em

//odd number borders
.list:nth-child(odd)
  border-right: 3px solid
  padding-left: 0

  &:before
    left: 100%
    margin-left: -20px

//even number borders
.list:nth-child(even)
  border-left: 3px solid
  padding-right: 0

  &:before
    right: 100%
    margin-right: -20px

//handle first and last
.list:first-child
  border-top: 0
  border-top-right-radius: 0
  border-top-left-radius: 0

.list:last-child
  border-bottom-right-radius: 0
  border-bottom-left-radius: 0
</style>