<template>
    <v-app>
      <Navbar />
      <v-container>
        <v-row class="my-12" justify="center">
          <v-col cols="12" md="6">
            <v-card class="pa-5">
              <v-card-title class="headline">Connexion</v-card-title>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    label="Nom d'utilisateur"
                    v-model="username"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
  
                  <v-text-field
                    label="Mot de passe"
                    v-model="password"
                    type="password"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
  
                  <v-btn color="primary" @click="login" :disabled="!valid">
                    Connexion
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    name: 'Login',
    components: {
      Navbar,
    },
    data() {
      return {
        username: '',
        password: '',
        valid: false,
        rules: {
          required: value => !!value || 'Ce champ est requis.',
        },
      };
    },
    methods: {
      login() {
        // Simuler une authentification
        if (this.username === 'admin' && this.password === 'password') {
          // Stocker l'authentification dans le local storage
          localStorage.setItem('isAuthenticated', 'true');
          this.$router.push('/');
        } else {
          alert("Nom d'utilisateur ou mot de passe incorrect");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    transition: 0.3s;
  }
  .v-card:hover {
    transform: scale(1.02);
  }
  </style>
  