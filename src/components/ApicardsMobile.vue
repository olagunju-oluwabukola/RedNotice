<template>
    <section class="hidden lg:hidden p-6 bg-gradient-to-r from-[#160101] to-[#151212] text-white w-full">
      <h2 class=" text-red text-2xl mx-auto md:mx-0  md:text-3xl font-bold mb-6 text-center">Running API Monitoring</h2>
      <!-- Slider for small screens -->
      <div class="md:block lg:hidden flex flex-col items-center">
        <div class="relative w-full  overflow-hidden">
          <!-- Slider Container -->
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
          >
            <!-- Cards and Form Trigger -->
            <div
              v-for="(item, index) in allItems"
              :key="index"
              class="w-full flex-shrink-0 "
            >
              <!-- Card Content -->
              <div v-if="index < monitoringCards.length" class="card p-4">
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    :src="item.image"
                    alt="API Monitoring"
                    class="object-cover"
                  />
                </div>
                <div class="mt-4">
                  <h3 class="text-red text-[10px] md:text-xl font-bold">
                    PROFILE PROTECTION
                  </h3>
                  <h4 class="text-[12px] md:text-xl font-semibold mt-2">{{ item.title }}</h4>
                  <p class="mt-2 text-gray-400 text-[12px] md:text-[15px]" >{{ item.description }}</p>
                </div>
                <div class="mt-4 flex justify-between">
                  <button class="px-1 py-2 text-[10px] md:text-[14px] underline">Logs</button>
                  <button class="px-4 py-2 text-[10px] md:text-[14px] underline">View API</button>
                </div>
              </div>
  
              <!-- "Set up new API Monitoring" Trigger -->
              <div v-else class="card flex flex-col items-center justify-center p-20">
                <div
                  class="text-5xl text-gray-400 cursor-pointer w-10 h-10"
                  @click="showForm = true"
                >
                  +
                </div>
                <p class="mt-4 text-center">Set up new API Monitoring</p>
              </div>
            </div>
          </div>
  
          <!-- Indicators -->
          <div class="flex justify-center mt-4 space-x-2">
            <div
              v-for="(_, index) in allItems.length"
              :key="index"
              :class="[
                'h-2 w-2 rounded-full cursor-pointer',
                index === activeSlide ? 'bg-red' : 'bg-white',
              ]"
              @click="goToSlide(index)"
            ></div>
          </div>
        </div>
      </div>
  
      <!-- Add New Monitoring Form -->
      <div
        v-if="showForm"
        class="fixed inset-0 text-red bg-gradient-to-r from-[#160101] to-[#151212]  flex items-center justify-center z-50"
      >
        <div class="p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
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
                class="w-full p-2 cards rounded-lg focus:outline-none"
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
                class="px-4 py-2 bg-white text-red font-bold rounded-lg hover:bg-red"
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
  import { ref, onMounted, onUnmounted } from "vue";
  
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
          title: "API Monitoring 1",
          description: "Details about API Monitoring 1",
        },
        {
          image: "/img/7637c246392da89e106d50b274bc3ef4 1.png",
          title: "API Monitoring 2",
          description: "Details about API Monitoring 2",
        },
      ]);
      const activeSlide = ref(0);
      let autoSlideInterval;
  
      const allItems = ref([...monitoringCards.value, { trigger: true }]);
  
      const addMonitoring = () => {
        monitoringCards.value.push({ ...newMonitoring.value });
        newMonitoring.value = { title: "", description: "", image: "" };
        showForm.value = false;
      };
  
      const goToSlide = (index) => {
        activeSlide.value = index;
      };
  
      const autoSlide = () => {
        autoSlideInterval = setInterval(() => {
          activeSlide.value =
            (activeSlide.value + 1) % allItems.value.length;
        }, 3000);
      };
  
      onMounted(() => {
        autoSlide();
      });
  
      onUnmounted(() => {
        clearInterval(autoSlideInterval);
      });
  
      return {
        showForm,
        newMonitoring,
        monitoringCards,
        allItems,
        activeSlide,
        addMonitoring,
        goToSlide,
      };
    },
  };
  </script>
  
  <style>
  .card {
    border: 1px solid rgb(82, 77, 77);
    
    border-radius: 8px;
  }
  </style>
  