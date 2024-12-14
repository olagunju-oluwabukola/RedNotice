<template>
    <div class="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#160101] to-[#151212] text-white">
      <!-- Left Section (Form) -->
      <div class="flex-1 flex flex-col justify-center items-center p-8 md:p-16 bg-gradient-to-b from-red-900 to-black">
        <!-- Header -->
        <div class="w-full max-w-md text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">🔑 Forgot Password</h2>
          <p class="text-sm md:text-lg text-gray-300 mb-8">
            Enter your email address, and we'll send you a link to reset your password.
          </p>
        </div>
  
        <!-- Form -->
        <form @submit.prevent="handleForgotPassword" class="w-full max-w-md space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email Address"
            class="w-full cards text-white p-3 rounded-lg focus:ring-2 focus:ring-red outline-none"
            required
          />
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-red to-black hover:bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            Send Reset Link
          </button>
        </form>
  
        <!-- Back to Login -->
        <div class="w-full max-w-md mt-4 text-center">
          <router-link class="text-gray-300 text-sm underline hover:text-red" to="/login">
            Back to Sign In
          </router-link>
        </div>
      </div>
  
      <!-- Right Section (Image) -->
      <div class="hidden md:flex flex-1 items-center justify-center">
        <img
          src=""
          alt="Forgot Password Illustration"
          class="max-w-full max-h-full object-contain"
        />
      </div>
  
      <!-- Popup Message -->
      <div
        v-if="message"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white text-black rounded-lg shadow-lg p-6 w-80">
          <h3 class="text-xl font-bold mb-4" :class="{'text-green-500': isSuccess, 'text-red-500': !isSuccess}">{{ isSuccess ? 'Success' : 'Error' }}</h3>
          <p class="text-sm mb-4">{{ message }}</p>
          <button
            @click="message = ''"
            class="w-full bg-gradient-to-r from-red to-black hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const email = ref("");
      const message = ref("");
      const isSuccess = ref(false);
  
      const handleForgotPassword = async () => {
        try {
          const response = await fetch("https://rednotice1234.great-site.net/v1/forgot-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value }),
          });
  
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Failed to send reset link. Please try again.");
          }
  
          message.value = "Password reset link sent! Check your email.";
          isSuccess.value = true;
          email.value = "";
        } catch (error) {
          message.value = error.message || "An error occurred. Please try again.";
          isSuccess.value = false;
          console.error("Forgot Password Error:", error);
        }
      };
  
      return { email, message, isSuccess, handleForgotPassword };
    },
  };
  </script>
  
  <style scoped>
  button:focus {
    outline: none;
  }
  </style>
  