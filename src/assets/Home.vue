<template>
  <div>
    <!-- Header -->
    <header class="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-3xl font-extrabold">
          Barber<span class="text-green-500">Style</span>
        </div>
        <nav class="flex space-x-6">
          <router-link to="/" class="hover:text-green-500 transition">Home</router-link>
          <router-link to="/services" class="hover:text-green-500 transition">Services</router-link>
          <router-link to="/reservation" class="hover:text-green-500 transition">Reservation</router-link>
          <router-link to="/contact" class="hover:text-green-500 transition">Contact</router-link>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      id="hero"
      class="relative text-white py-32"
    >
    <div class="relative z-10">
  <div class="container mx-auto text-center">
    <h1 class="text-5xl font-extrabold mb-6">
      Premium Barber Services
    </h1>
    <p class="text-lg mb-8">
      Discover luxury grooming in a modern and stylish environment.
    </p>
    <router-link
      to="/reservation"
      class="bg-white text-green-500 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
    >
      Book Your Appointment
    </router-link>
  </div>
</div>
      <div
      class="absolute inset-0 bg-center bg-cover opacity-50"
      :style="{ backgroundImage: `url(${require('@/assets/1.webp')})` }"
    ></div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
          <img
  :src="require('@/assets/2.webp')"
  alt="Professional Barbers"
  class="w-full h-48 object-cover rounded-lg mb-4"
/>
            <h3 class="text-2xl font-bold mb-2">Professional Barbers</h3>
            <p class="text-gray-300">
              Highly skilled barbers delivering the perfect look.
            </p>
          </div>
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
          <img
  :src="require('@/assets/3.webp')"
  alt="Professional Barbers"
  class="w-full h-48 object-cover rounded-lg mb-4"
/>
            <h3 class="text-2xl font-bold mb-2">Premium Products</h3>
            <p class="text-gray-300">
              Only the finest products for your hair and beard.
            </p>
          </div>
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
          <img
  :src="require('@/assets/4.webp')"
  alt="Professional Barbers"
  class="w-full h-48 object-cover rounded-lg mb-4"
/>
            <h3 class="text-2xl font-bold mb-2">Luxury Environment</h3>
            <p class="text-gray-300">
              A classy and comfortable atmosphere to relax.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Section -->
    <section
      id="booking"
      class="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white"
    >
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Book an Appointment</h2>
        <p class="text-lg mb-8">
          Schedule your next grooming session with ease.
        </p>
        <router-link
          to="/reservation"
          class="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition"
        >
          Start Booking
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Hero Background */
#hero {
  position: relative;
}

#hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

header {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}

/* Hover animations */
img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}

/* Smooth transitions */
.transition {
  transition: all 0.3s ease-in-out;
}
</style>
