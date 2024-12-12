<template>
    <v-app>
      <Navbar />
      <v-container>
        <v-row class="my-12" justify="center">
          <v-col cols="12" md="8" align="center">
            <v-card class="pa-5">
              <v-card-title class="headline">Rendez-vous Confirmé !</v-card-title>
              <v-card-text>
                <p>Votre rendez-vous a bien été confirmé. Nous sommes impatients de vous accueillir au barbershop.</p>
                <v-icon color="success" size="80">mdi-check-circle</v-icon>
              </v-card-text>
              <v-btn color="primary" @click="$router.push('/')">
                Retourner à l'accueil
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-app>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Confirmation',
    components: {
      Navbar,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  .v-card-title {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
  }
  </style>
  