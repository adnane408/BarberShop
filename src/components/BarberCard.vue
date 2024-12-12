<template>
  <v-card class="ma-3" max-width="344">
    <v-img :src="image" height="200px"></v-img>
    <v-card-title>{{ barberName }}</v-card-title>
    <v-card-subtitle>{{ specialty }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('book-appointment', barberName)">
        Réserver avec {{ barberName }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BarberCard',
  props: {
    barberName: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card-title {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}
.v-btn {
  font-weight: bold;
}
</style>
