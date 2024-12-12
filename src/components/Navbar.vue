<template>
  <v-app-bar app color="gray" dark>
    <v-toolbar-title>Barbershop</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/')">Accueil</v-btn>
    <v-btn v-if="!isAuthenticated" text @click="$router.push('/login')">Login</v-btn>

    <!-- Afficher le bouton "Réservations" uniquement si l'utilisateur est connecté -->
    <v-btn v-if="isAuthenticated" text @click="$router.push('/reservations')">Réservations</v-btn>

    <v-btn v-if="isAuthenticated" text @click="logout">Déconnexion</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    // Vérifier l'état d'authentification à la création du composant
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  },
  methods: {
    logout() {
      // Supprimer l'authentification du local storage
      localStorage.removeItem('isAuthenticated');
      this.isAuthenticated = false;
      this.$router.push('/');
    },
  },
  watch: {
    // Observer les changements dans le local storage pour mettre à jour isAuthenticated
    '$route'() {
      this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    },
  },
};
</script>

<style scoped>
.v-app-bar {
  margin-bottom: 20px;
}
</style>
