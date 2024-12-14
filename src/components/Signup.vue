<template>
  <div class="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#160101] to-[#151212] text-white">
    <!-- Left Section (Form) -->
    <div class="flex-1 flex flex-col justify-center items-center p-8 md:p-16 bg-gradient-to-b from-red-900 to-black">
      <!-- Header -->
      <div>
        <h1 class="mb-4 md:mb-8 text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red to-white bg-clip-text text-transparent">
          Secure Your Organization Today
        </h1>
       <p class="my-3 md:my-8 md:text-lg text-sm">
        Join RedNotice and empower your business with cutting 
        edge cyber intelligence solutions.
       </p>
      </div>

      <!-- Google OAuth -->
      <button
        class="flex items-center justify-center gap-2 bg-gradient-to-r from-red to-black hover:bg-red-700 text-white px-6 py-2 rounded-lg w-full max-w-md mb-6"
        @click="handleGoogleSignIn"
      >
        <img src="/img/🦆 icon _google icon_.png" alt="Google Icon" class="w-6 h-6" />
        Sign up with Google
      </button>

      <!-- Separator -->
      <div class="w-full max-w-md flex items-center my-4">
        <hr class="flex-1 border-gray-600" />
        <span class="text-gray-400 px-4">OR</span>
        <hr class="flex-1 border-gray-600" />
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSignUp" class="w-full max-w-md space-y-4">
        <input
          v-model="form.name"
          type="text"
          placeholder="Full Name"
          class=" w-full cards border-gray-400 text-white p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          required
        />

        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class=" w-full cards border-gray-400 text-white p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          required
        />
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="cards w-full  text-white p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
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
            <svg v-else xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
            </svg>
          </button>
        </div>
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-red to-black text-white px-6 py-3 rounded-lg"
        >
          Sign Up
        </button>
      </form>

      <!-- Popup Modal -->
      <div v-if="popupMessage" class="fixed inset-0 bg-gradient-to-r from-[#160101] to-[#151212] bg-opacity-75 flex items-center justify-center ">
        <div class="bg-white text-black p-6 rounded-lg shadow-lg">
          <p>{{ popupMessage }}</p>
          <button
            class="mt-4 px-4 py-2 bg-red text-white rounded-lg hover:bg-red-800"
            @click="closePopup"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Right Section (Image) -->
    <div class="hidden md:hidden lg:flex  flex-1 items-center justify-center">
      <img
        src="/img/mmmmmmmmmmmmmmmm 1.png"
        alt="Secure Illustration"
        class="max-w-full max-h-full object-contain"
      />
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
      name: "",
      password: "",
    });
    const popupMessage = ref("");
    const showPassword = ref(false);

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const closePopup = () => {
      popupMessage.value = "";
    };

    const handleGoogleSignIn = () => {
      popupMessage.value = "Google Sign-In is currently unavailable in this mockup.";
    };

    const handleSignUp = async () => {
  try {
    const response = await fetch("https://rednotice1234.great-site.net/public/api/v1/register", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    form.value.email = "";
    form.value.name = "";
    form.value.password = "";

    popupMessage.value = "Registration Successful";

    setTimeout(() => {
      router.push("/login");
    }, 2000); 
  } catch (error) {
    popupMessage.value = "An error occurred. Please try again.";
    console.error("Error:", error);
  }
};


    return { form, popupMessage, showPassword, togglePasswordVisibility, closePopup, handleSignUp, handleGoogleSignIn };
  },
};
</script>

<style scoped>
body {
  font-family: "Arial", sans-serif;
}
</style>
