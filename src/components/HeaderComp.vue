<template>
  <header class="bg-gradient-to-r from-[#160101] to-[#151212] text-white">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
      <div class="text-2xl font-bold flex items-center">
        <img
          src="/img/R N 1.svg"
          alt="Cyber Defense Icon"
          class="max-w-full h-auto"
        />
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:block space-x-6">
        <a href="#" class="text-[#C30000]">Home</a>
        <a href="#" class="hover:text-red">Company</a>
        <a href="#" class="hover:text-red">Solutions</a>
        <a href="#" class="hover:text-red">Pricing</a>
        <a href="#" class="hover:text-red">Blog</a>
      </nav>

      <!-- Desktop Action Buttons -->
       
      <div class="hidden lg:flex space-x-4 items-center">
        <a href="#" class="flex items-center space-x-2 hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 p-1 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          <span>Sign In</span>
       
        </a>
        <button class="px-4 py-2 bg-gradient-to-r from-red text-white rounded-md shadow-md hover:opacity-90">
          Request a demo
        </button>
      </div>

      <!-- Mobile & Tablet Menu Toggle -->
      <button @click="toggleMobileMenu" class="block lg:hidden focus:outline-none">
        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile & Tablet Menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-black">
      <nav class="space-y-2 p-4">
        <a href="#" class="block text-red hover:text-white">Home</a>
        <a href="#" class="block text-white hover:text-red-600">Company</a>
        <a href="#" class="block text-white hover:text-red-600">Solutions</a>
        <a href="#" class="block text-white hover:text-red-600">Pricing</a>
        <a href="#" class="block text-white hover:text-red-600">Blog</a>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 border border-rounded"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        <a href="#" class="flex items-center space-x-2 text-white hover:underline mt-4">
          
          <span>Sign In</span>
          
        </a>
        <button class="w-full px-4 py-2 bg-gradient-to-r from-red to-black text-white rounded-md shadow-md hover:opacity-90">
          Request a demo
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    return { isMobileMenuOpen, toggleMobileMenu };
  },
};
</script>

<style scoped>
.icon{
  border: 1px solid white;
  border-radius: 50%;
}
</style>