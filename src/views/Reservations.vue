<template>
    <v-app>
      <Navbar />
      <v-container>
        <v-row class="my-12" justify="center">
          <v-col cols="12">
            <v-card class="pa-5 elevation-3">
              <v-card-title class="headline d-flex justify-space-between">
                Vos Réservations
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Recherche"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
  
              <v-row>
                <v-col
                  v-for="(reservation, index) in filteredReservations"
                  :key="index"
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <v-card class="mb-4 elevation-2">
                    <v-card-title class="d-flex justify-space-between">
                      <span>{{ reservation.barber }} - {{ reservation.date }}</span>
                      <v-btn icon @click="cancelReservation(reservation)">
                        <v-icon color="red">mdi-delete</v-icon>
                      </v-btn>
                    </v-card-title>
                    <v-card-subtitle>
                      Service: {{ reservation.service }}
                    </v-card-subtitle>
                    <v-card-text>
                      <p><strong>Nom :</strong> {{ reservation.name }}</p>
                      <p><strong>Créneau Horaire :</strong> {{ reservation.timeslot }}</p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" @click="viewReservation(reservation)">
                        Voir les Détails
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
  
              <!-- Bouton pour réinitialiser les données si toutes sont supprimées -->
              <v-row v-if="filteredReservations.length === 0" class="mt-6 justify-center">
                <v-btn color="primary" @click="initializeReservations">
                  Réinitialiser les Données
                </v-btn>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    name: 'Reservations',
    components: {
      Navbar,
    },
    data() {
      return {
        search: '',
        headers: [
          { text: 'Nom', value: 'name', sortable: true },
          { text: 'Barbier', value: 'barber', sortable: true },
          { text: 'Service', value: 'service', sortable: true },
          { text: 'Date', value: 'date', sortable: true },
          { text: 'Créneau Horaire', value: 'timeslot', sortable: true },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        reservations: [],
      };
    },
    created() {
      // Charger les réservations depuis le local storage lors de la création du composant
      const storedReservations = JSON.parse(localStorage.getItem('reservations'));
      if (storedReservations) {
        this.reservations = storedReservations;
      }
    },
    computed: {
      filteredReservations() {
        // Filtrer les réservations en fonction du texte recherché
        if (this.search.trim() === '') {
          return this.reservations;
        }
        return this.reservations.filter(reservation =>
          reservation.barber.toLowerCase().includes(this.search.toLowerCase()) ||
          reservation.service.toLowerCase().includes(this.search.toLowerCase()) ||
          reservation.date.includes(this.search) ||
          reservation.name.toLowerCase().includes(this.search.toLowerCase()) ||
          reservation.timeslot.includes(this.search)
        );
      },
    },
    methods: {
      initializeReservations() {
        // Ajouter des données fictives de réservation au local storage
        this.reservations = [
          {
            name: 'John Doe',
            barber: 'Ali',
            service: 'Coupe Classique',
            date: '2024-12-05',
            timeslot: '09:00 - 09:30',
          },
        ];
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
      },
      viewReservation(item) {
        // Ajouter ici la logique pour visualiser les détails de la réservation
        alert(`Détails de la réservation avec ${item.barber}`);
      },
      cancelReservation(item) {
        // Supprimer la réservation
        const index = this.reservations.indexOf(item);
        if (index > -1) {
          this.reservations.splice(index, 1);
        }
        // Mettre à jour le local storage après suppression
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
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
  .v-card-title {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
  .v-card-subtitle {
    font-style: italic;
  }
  .v-btn {
    margin-right: 10px;
  }
  </style>
  