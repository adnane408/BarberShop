<template>
  <v-app>
    <Navbar />
    <v-container>
      <v-row class="my-12" justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5">
            <v-card-title class="headline">Réservez un Rendez-vous</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  label="Nom"
                  v-model="name"
                  :rules="[rules.required]"
                  required
                ></v-text-field>

                <v-select
                  :items="barbers"
                  label="Choisir un barbier"
                  v-model="selectedBarber"
                  :rules="[rules.required]"
                  required
                ></v-select>

                <v-select
                  :items="services"
                  label="Choisir un service"
                  v-model="selectedService"
                  :rules="[rules.required]"
                ></v-select>

                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Choisir une date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      @change="updateAvailableTimeslots"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu = false; updateAvailableTimeslots()"></v-date-picker>
                </v-menu>

                <!-- Sélection du créneau horaire -->
                <v-select
                  :items="availableTimeslots"
                  label="Choisir un créneau horaire"
                  v-model="selectedTimeslot"
                  :rules="[rules.required]"
                  required
                  :item-value="'value'"
                  :item-text="'text'"
                  item-disabled="disabled"
                ></v-select>

                <v-btn color="primary" @click="submit" :disabled="!valid">
                  Confirmer le Rendez-vous
                </v-btn>
              </v-form>
            </v-card-text>
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
  name: 'Booking',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      name: '',
      selectedBarber: null,
      selectedService: null,
      date: '',
      selectedTimeslot: null,
      menu: false,
      valid: false,
      rules: {
        required: value => !!value || 'Ce champ est requis.',
      },
      barbers: ['Ali', 'Youssef', 'Rachid'],
      services: ['Coupe de cheveux', 'Rasage', 'Soin complet'],
      timeslots: [
        '09:00 - 09:30',
        '09:30 - 10:00',
        '10:00 - 10:30',
        '10:30 - 11:00',
        '11:00 - 11:30',
        '11:30 - 12:00',
        '12:00 - 12:30',
        '13:00 - 13:30',
        '13:30 - 14:00',
        '14:00 - 14:30',
        '14:30 - 15:00',
        '15:00 - 15:30',
        '15:30 - 16:00',
        '16:00 - 16:30',
        '16:30 - 17:00',
      ],
      availableTimeslots: [],
    };
  },
  created() {
    // Récupérer le nom du barbier depuis les paramètres d'URL
    const barberName = this.$route.query.barber;
    if (barberName && this.barbers.includes(barberName)) {
      this.selectedBarber = barberName;
    }

    // Initialiser les créneaux horaires disponibles
    this.updateAvailableTimeslots();
  },
  methods: {
    updateAvailableTimeslots() {
      if (this.date) {
        // Récupérer les réservations existantes depuis le local storage
        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        console.log(reservations);
        // Trouver les créneaux déjà réservés pour la date sélectionnée
        const reservedTimeslots = reservations
          .filter(reservation => reservation.date === this.date)
          .map(reservation => reservation.timeslot);

        // Mettre à jour les créneaux horaires disponibles
        this.availableTimeslots = this.timeslots.map(timeslot => ({
          value: timeslot,
          text: timeslot,
          disabled: reservedTimeslots.includes(timeslot),
        }));
      } else {
        // Si aucune date n'est sélectionnée, tous les créneaux sont disponibles
        this.availableTimeslots = this.timeslots.map(timeslot => ({
          value: timeslot,
          text: timeslot,
          disabled: false,
        }));
      }
    },
    submit() {
      if (this.$refs.form.validate()) {
        // Créer un objet réservation
        const newReservation = {
          name: this.name,
          barber: this.selectedBarber,
          service: this.selectedService,
          date: this.date,
          timeslot: this.selectedTimeslot,
        };
        
        // Récupérer les réservations existantes du local storage
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        
        // Ajouter la nouvelle réservation
        reservations.push(newReservation);
        
        // Mettre à jour le local storage
        localStorage.setItem('reservations', JSON.stringify(reservations));

        // Message de confirmation et redirection
        alert(`Réservation confirmée avec ${this.selectedBarber} pour ${this.date} à ${this.selectedTimeslot}`);
        if(localStorage.getItem('isAuthenticated') === 'true') {
          this.$router.push('/reservations');
        } else {
          this.$router.push('/');
        }
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
