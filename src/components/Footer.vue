<template>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <p>© 2024 Barbershop. Tous droits réservés.</p>
            <v-icon class="mx-2">mdi-facebook</v-icon>
            <v-icon class="mx-2">mdi-instagram</v-icon>
            <v-icon class="mx-2">mdi-twitter</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
  .v-icon {
    cursor: pointer;
  }
  </style>
  