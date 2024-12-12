<template>
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
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
          </v-menu>
  
          <v-btn color="primary" @click="submit" :disabled="!valid">
            Confirmer le Rendez-vous
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'AppointmentForm',
    data() {
      return {
        name: '',
        selectedBarber: null,
        selectedService: null,
        date: '',
        menu: false,
        valid: false,
        rules: {
          required: value => !!value || 'Ce champ est requis.',
        },
        barbers: ['Ali', 'Youssef', 'Rachid'],
        services: ['Coupe de cheveux', 'Rasage', 'Soin complet'],
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // Envoyer les données à l'API ou gérer localement
          this.$emit('appointment-confirmed', {
            name: this.name,
            barber: this.selectedBarber,
            service: this.selectedService,
            date: this.date,
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card-title {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
  }
  </style>
  