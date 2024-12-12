<template>
  <v-app class="appV">
    <Navbar />
<div class="appV">
    <!-- Carousel Section with Background Image -->
    <v-container>
      <v-row class="my-12 appV">
        <v-col cols="12">
          <v-carousel hide-delimiters height="500" class="carousel-background">
            <v-carousel-item v-for="(image, i) in images" :key="i">
              <v-img :src="image" class="carousel-image grey lighten-2"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <!-- About Us Section -->
    <v-container class="center-content aboutUs">
      <v-row class="my-12 align-center">
        <v-col>
          <v-img src="https://i.pinimg.com/736x/74/2e/a6/742ea6bccad14b6b92535cd27f3e1f10.jpg" alt="Barbershop Image" height="400"></v-img>
        </v-col>
        <v-col >
          <h2 style="color: aliceblue;">Bienvenue au Barbershop</h2>
          <p class="subtitle-1" style="color: aliceblue;">
            Venez découvrir les meilleurs services de coiffure et soins. Nous garantissons
            une expérience incroyable avec nos barbiers professionnels. Faites l'expérience d'un service de qualité, dans une ambiance agréable et conviviale.
          </p>
          <v-btn color="primary" @click="$router.push('/booking')">Prendre Rendez-vous</v-btn>
        </v-col>
      </v-row>
    </v-container>
</div>
    <!-- Why Choose Us Section -->
    <v-container>
      <v-row class="my-12 why-choose-us">
  <v-col cols="12">
    <h2 class="text-center mb-6 animated-title color: #ffffff">
      <v-icon large color="primary">mdi-star-circle</v-icon>
      Pourquoi Nous Choisir ?
    </h2>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="3" class="pa-5">
            <v-icon color="primary" size="60">mdi-account-star</v-icon>
            <h3>Barbiers Expérimentés</h3>
            <p>
              Nos barbiers sont formés et expérimentés pour offrir des coupes et soins parfaits. Chaque barbier est dédié à vous fournir le meilleur.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="3" class="pa-5">
            <v-icon color="primary" size="60">mdi-timer-sand</v-icon>
            <h3>Prise de Rendez-vous Facile</h3>
            <p>
              Réservez votre créneau en ligne à votre convenance. Nous vous facilitons la planification de votre rendez-vous, sans tracas.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card elevation="3" class="pa-5">
            <v-icon color="primary" size="60">mdi-checkbox-marked</v-icon>
            <h3>Produits de Haute Qualité</h3>
            <p>
              Nous utilisons des produits de haute qualité pour vos cheveux et barbe. La satidfaction de nos clients chez nous est notre priorité absolue.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Meet Our Barbers Section -->
    <v-container>
      <v-row class="my-12">
        <v-col cols="12">
          <h2 class="text-center mb-6 animated-title color: #ffffff">Rencontrez Nos Barbiers</h2>
        </v-col>
        <v-col cols="12" md="4" v-for="(barber, index) in barbers" :key="index">
          <BarberCard
            :barberName="barber.name"
            :specialty="barber.specialty"
            :image="barber.image"
            @book-appointment="redirectToBooking"
          />
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action Section -->
    <v-container>
      <v-row class="my-12 align-center text-center">
        <v-col cols="12">
          <v-card elevation="3" class="pa-5">
            <h2>Prêt pour une Nouvelle Coupe ?</h2>
            <p class="subtitle-1">
              Réservez votre prochain rendez-vous avec nos barbiers qualifiés dès maintenant.
            </p>
            <v-btn color="primary" @click="$router.push('/booking')" large>Prendre Rendez-vous</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer Section (Positioned at the End) -->
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BarberCard from '@/components/BarberCard.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    BarberCard,
  },
  data() {
    return {
      images: [
        'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyYmVyfGVufDB8fDB8fHww',
        'https://cdn.magicdecor.in/com/2023/02/29221224/image-1684754300-9295.jpg',
        'https://i.etsystatic.com/29168372/r/il/aebae3/3409034905/il_fullxfull.3409034905_eyid.jpg',
      ],
      barbers: [
        { name: 'Ali', specialty: 'Coupe Classique', image: require('@/assets/Screenshot 2024-12-05 211510.png')  },
        { name: 'Youssef', specialty: 'Rasage et Soin', image: require('@/assets/Screenshot 2024-12-05 211451.png') },
        { name: 'Rachid', specialty: 'Coupe Moderne', image: require('@/assets/Screenshot 2024-12-05 211459.png') },
      ],
    };
  },
  methods: {
    redirectToBooking(barberName) {
      // Redirection vers la page de réservation avec le nom du barbier
      this.$router.push({ name: 'Booking', query: { barber: barberName } });
    },
  },
};
</script>

<style scoped>
/* Retirer toute hauteur minimum ou flex sur le v-app */
.v-app {
  display: block; /* Utiliser un display par défaut */
}

/* Réglages du Footer */
footer {
  margin-top: 50px;
}

/* Styling des titres et des éléments */
h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}
.subtitle-1 {
  font-size: 18px;
  line-height: 1.6;
}
.v-card {
  transition: 0.3s;
}
.v-card:hover {
  transform: scale(1.05);
}
.text-center {
  text-align: center;
}
.mb-6 {
  margin-bottom: 24px;
}
.appV{
    background-image: url("../assets/photo-1527049979667-990f1d0d8e7f.jpg");
}
.why-choose-us {
  animation: fadeInUp 1s ease-in-out;
}

.animated-title {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: #ffffff;  /* Le texte est maintenant en blanc */
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Animation d'apparition du titre */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-title:hover {
  transform: scale(1.05);
  text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
}
</style>
