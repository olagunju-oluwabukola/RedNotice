<template>
  <div class="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#160101] to-[#151212] text-white">
    <!-- Left Section (Form) -->
    <div class="flex-1 flex flex-col justify-center items-center p-8 md:p-16 bg-gradient-to-b from-red-900 to-black">
      <!-- Header -->
      <div class="w-full max-w-md text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">🔒 Sign In</h2>
        <p class="text-sm md:text-lg text-gray-300 mb-8">
          Don't have an account yet? 
          <router-link class="text-red underline" to="/sign-up">Sign up here</router-link>
        </p>
      </div>

      <!-- Google OAuth -->
      <button
        class="flex items-center justify-center gap-2 bg-gradient-to-r from-red to-black hover:bg-red-700 text-white px-6 py-2 rounded-lg w-full max-w-md mb-6"
        @click="handleGoogleSignIn"
      >
        <img src="/img/🦆 icon _google icon_.png" alt="Google Icon" class="w-6 h-6" />
        Sign in with Google
      </button>

      <!-- Separator -->
      <div class="w-full max-w-md flex items-center my-4">
        <hr class="flex-1 border-gray-600" />
        <span class="text-gray-400 px-4">OR</span>
        <hr class="flex-1 border-gray-600" />
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSignIn" class="w-full max-w-md space-y-4">
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full cards text-white p-3 rounded-lg focus:ring-2 focus:ring-red outline-none"
          required
        />
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="w-full bg-transparent cards text-white p-3 rounded-lg focus:ring-2 focus:ring-red outline-none"
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-3 flex items-center text-gray-400"
            @click="togglePasswordVisibility"
          >
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h.01M12 12h.01M9 12h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h.01M12 12h.01M9 12h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
            </svg>
          </button>
        </div>
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-red to-black hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Sign In
        </button>
      </form>
    </div>

    <!-- Right Section (Image) -->
    <div class="hidden md:flex flex-1 items-center justify-center">
      <img
        src="/img/5537562 1.png"
        alt="Secure Illustration"
        class="max-w-full max-h-full object-contain"
      />
    </div>

    <!-- Popup Message -->
    <div
      v-if="message"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white text-black rounded-lg shadow-lg p-6 w-80">
        <h3 class="text-xl font-bold mb-4" :class="{'text-green-500': isSuccess, 'text-red-500': !isSuccess}">
          {{ isSuccess ? 'Success' : 'Error' }}
        </h3>
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const form = ref({
      email: "",
      password: "",
    });
    const message = ref("");
    const isSuccess = ref(false);
    const showPassword = ref(false);

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const handleGoogleSignIn = () => {
      alert("Google Sign-In is currently unavailable in this mockup.");
    };

    const handleSignIn = async () => {
  try {
    console.log("Attempting to sign in with:", form.value);

    const response = await fetch("https://rednotice1234.great-site.net/public/api/v1/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    // Log the response status and body
    console.log("Response Status:", response.status);
    const responseText = await response.text();
    console.log("Response Text:", responseText);

    // Check if the response is OK and contains a body
    if (!response.ok) {
      throw new Error(responseText || "Failed to sign in. Please check your credentials.");
    }

    let data = {};
    try {
      // Only attempt to parse if the response is not empty
      data = responseText ? JSON.parse(responseText) : {};
    } catch (error) {
      console.error("Failed to parse response JSON:", error);
    }

    // Check if the API response contains a token
    if (data.token) {
      localStorage.setItem("token", data.token);
      message.value = "Sign-in successful!";
      isSuccess.value = true;
      router.push({ name: "Dashboard" });
    } else {
      throw new Error(data.message || "Login failed. Please try again.");
    }
  } catch (error) {
    message.value = error.message || "An error occurred. Please try again.";
    isSuccess.value = false;
    console.error("Login Error:", error);
  }
};



    return { form, message, isSuccess, showPassword, togglePasswordVisibility, handleSignIn, handleGoogleSignIn };
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
