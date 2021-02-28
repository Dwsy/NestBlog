<template>
  <v-card class="mx-auto" max-width="1000">
    <v-card-text>
      <h2 class="title mb-2">
        文章筛选
      </h2>
      <v-chip-group v-model="amenities" column multiple>
        <v-chip filter outlined>
          Elevator
        </v-chip>
        <v-chip filter outlined>
          Washer / Dryer
        </v-chip>
        <v-chip filter outlined>
          Fireplace
        </v-chip>
        <v-chip filter outlined>
          Wheelchair access
        </v-chip>
        <v-chip filter outlined>
          Dogs ok
        </v-chip>
        <v-chip filter outlined>
          Cats ok
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    amenities: []
  }),
  watch: {
    amenities: {
      handler(val) {
        console.log(this.amenities);
      },
      deep: true
    }
  }
};
</script>
