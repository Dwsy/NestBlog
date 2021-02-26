<template>
<div>
  <div>
    <v-card to="detail">
      <v-img
        src="http://fp1.fghrsh.net/2021/01/31/4b9c5de00bd0979bafd4260c26b32049.png"
        gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
        aspect-ratio="16 / 9"
        height="300"
        dark
      >
        <v-card-text class="fill-height d-flex align-end">
          <v-row class="flex-column">
            <v-col>
              <v-btn color="accent" to="category">Travel</v-btn>
            </v-col>
            <v-col cols="12" md="10" lg="8" xl="7">
              <h2 class="text-h3 py-3" style="line-height: 1.2">
                Great Travel Blogs From Around The World To Inspire You
              </h2>
            </v-col>
            <v-col class="d-flex align-center">
              <v-avatar class="elevation-4" color="accent">
                <v-icon large color>mdi-feather</v-icon>
              </v-avatar>

              <div class="text-h6 pl-2">Yan Lee · 22 July 2019</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-img>
    </v-card>
  </div>

</div>

</template>

<script>
export default {};
</script>

<style></style>
