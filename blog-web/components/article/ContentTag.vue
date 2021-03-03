<template>


      <v-col cols="12" xl="10" lg="10" md="10">
        <v-sheet >
          <v-chip-group column active-class="primary--text">
            <v-chip
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
          </v-chip-group>
        </v-sheet>
      </v-col>


</template>

<script>
export default {
  props: {
    tags: {}
  }
};
</script>
