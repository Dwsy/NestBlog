<template>
  <v-card max-width="450">
    <v-row justify="space-around">
      <v-col>
        <v-sheet elevation="0" class="pa-4">
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
