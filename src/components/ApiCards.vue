<template>
    <section class="p-6 bg-gradient-to-r from-[#160101] to-[#151212] text-white">
      <h2 class="text-2xl font-bold mb-6">Running API Monitoring</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div
          v-for="(card, index) in monitoringCards"
          :key="index"
          class="p-4 rounded-lg  card"
        >
          <div class="relative   bg-black rounded-lg overflow-hidden">
            <img
              :src="card.image"
              alt="API Monitoring"
              class="object-cover"
            />
          </div>
          <div class="mt-4">
            <h3 class="text-red text-[10px] font-bold">PROFILE PROTECTION</h3>
            <h4 class="text-[10px] font-semibold mt-2">{{ card.title }}</h4>
            <p class="mt-2 text-[8px] text-gray-400">{{ card.description }}</p>
          </div>
          
          <div class="mt-4 flex justify-between">
            <button
              class="px-1 py-2 text-[10px] underline"
            >
              Logs
            </button>
            <button
              class="px-4 py-2 text-[10px] underline"
            >
              View API
            </button>
          </div>
        </div> 
  
       
        <div
          class="flex flex-col items-center justify-center  p-4 rounded-lg shadow-md card cursor-pointer"
          @click="showForm = true"
        >
          <div class="text-5xl text-gray-400">+</div>
          <p class="mt-4 text-center">Set up new API Monitoring</p>
        </div>
      </div>
  
    
       <div
        v-if="showForm"
        class="fixed inset-0 text-red bg-gradient-to-r from-[#160101] to-[#151212] flex items-center justify-center z-50"
      >
        <div class=" p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
          <h2 class="text-xl font-bold mb-4 text-center text-red">Add New Monitoring</h2>
          <form @submit.prevent="addMonitoring">
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Title</label>
              <input
                v-model="newMonitoring.title"
                type="text"
                placeholder="Enter title"
                class="w-full p-2 cards rounded-lg focus:outline-none"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Description</label>
              <textarea
                v-model="newMonitoring.description"
                placeholder="Enter description"
                class="w-full p-2  cards rounded-lg focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium mb-2">Image URL</label>
              <input
                v-model="newMonitoring.image"
                type="text"
                placeholder="Enter image URL"
                class="w-full p-2 cards rounded-lg focus:outline-none"
                required
              />
            </div>
            <div class="flex justify-end space-x-4">
              <button
                type="button"
                @click="showForm = false"
                class="px-4 py-2 font-bold text-white rounded-lg bg-red"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-white text-red font-bold rounded-lg hover hover:bg-red"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div> 
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const showForm = ref(false);
      const newMonitoring = ref({
        title: "",
        description: "",
        image: "",
      });
  
      const monitoringCards = ref([
        {
          image: "/img/7637c246392da89e106d50b274bc3ef4 1.png",
          title: "Name of this API Monitoring",
          description: "Description of this running API monitoring and some detailed info.",
        },
        {
          image: "/img/7637c246392da89e106d50b274bc3ef4 1.png",
          title: "Name of this API Monitoring",
          description: "Description of this running API monitoring and some detailed info.",
        },
      ]);
  
      const addMonitoring = () => {
        monitoringCards.value.push({ ...newMonitoring.value });
        newMonitoring.value = { title: "", description: "", image: "" }; // Reset form
        showForm.value = false; // Close the form
      };
  
      return {
        showForm,
        newMonitoring,
        monitoringCards,
        addMonitoring,
      };
    },
  };
  </script>
  
  <style>
  body {
    font-family: "Inter", sans-serif;
  }

  .card{
  border: 1px rgb(82, 77, 77) solid;
  }
  </style>
  