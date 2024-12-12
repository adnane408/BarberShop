<template>
    <v-card class="ma-3" max-width="300">
      <v-card-title>{{ serviceName }}</v-card-title>
      <v-card-subtitle>{{ description }}</v-card-subtitle>
      <v-card-actions>
        <v-btn text color="primary" @click="$emit('choose-service')">Choisir</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'ServiceCard',
    props: {
      serviceName: {
        type: String,
        required: true,
      },
      description: {
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
  