<template>
  <v-card max-width="1200">
    <v-row justify="space-around">
      <v-col>
        <v-sheet class="ma-1" >

            <v-chip
            class="ma-1 imgbig"
              v-for="tag in tags"
              :key="tag.name"
              :color="tag.colours"
              :to="`/tag/${tag._id}`"
            >
              {{ tag.name }} {{ tag.contentsNum }}
              <v-avatar v-show="tag.icon">
                <v-icon>{{tag.icon}}</v-icon>
              </v-avatar>

            </v-chip>

        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    tags: {}
  }
};
</script>
