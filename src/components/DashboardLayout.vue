<template>
   <section class="block md:hidden bg-gradient-to-r from-[#160101] to-[#151212] text-white">
    <p>onclick of any of the circle aside the first one, it renders accurately. 
       the fist oenshould be dashboard and the default, I will fix it and the icons that should 
       come with it, or you provide the design for the responsiveness</p>

    <div class="flex">
      <aside class="w-16 flex flex-col items-center py-4 bg-red-900">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="my-4 w-full py-3 flex justify-center items-center bg-red-800 hover:bg-red-600 rounded-lg"
        @click="setActiveComponent(item.component)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white bg-red rounded-full p-1"
          :viewBox="item.iconViewBox"
          fill="none"
          stroke="currentColor"
        >
          <path
            v-for="(path, i) in item.iconPaths"
            :key="i"
            :d="path"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </aside>

  
    <main class="flex-1 flex justify-center items-center">
      <component :is="activeComponent" />
    </main>
    </div>
    <!-- Sidebar -->
 
  </section>
  <section class="hidden md:block bg-gradient-to-r from-[#160101] to-[#151212] py-6 md:py-16 md:px-16">
    <div class="md:grid lg:flex gap-6 text-white">
      <!-- Sidebar -->
      <aside class="out w-1/3 md:w-1/4 p-4 space-y-4">
        <img src="/img/R N 1.svg" alt="Logo" />
        <nav>
          <ul>
            <li
              v-for="(item, index) in navItems"
              :key="index"
              class="cards my-10 py-4 px-4 m-2 cursor-pointer text-gray-400 hover:bg-red-500 rounded-lg"
              @click="setActiveComponent(item.component)"
            >
              {{ item.name }}
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 md:w-2/3 lg:w-3/4">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Dynamic Component -->
          <div class="flex-1">
            <component :is="activeComponent" />
          </div>

          <!-- Side Cards -->
          <div class="w-full md:w-1/3 space-y-6">
            <div
              class="p-4 bg-gradient-to-r from-[#160101] to-[#151212] rounded-lg shadow-md border border-gray-700 text-center"
              v-for="(card, index) in sideCards"
              :key="index"
            >
              <h3 class="text-lg font-bold text-red-500">{{ card.title }}</h3>
              <p class="text-sm mt-2">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import Dashboard from "../components/Dashboard.vue";
import Settings from "../components/Settings.vue";
import Help from "../components/Help.vue";
import Documentation from "./Documentation.vue";
import Monitoring from "./Monitoring.vue";


export default {
  setup() {
    const activeComponent = ref(null);

    const navItems = [
      { name: "Dashboard", component: Dashboard },
      { name: "Monitoring", component: Monitoring },
      { name: "Settings", component: Settings },
      { name: "Help", component: Help },
      { name: "Documentation", component: Documentation },
    ];

    const sideCards = [
      {
        title: "Comprehensive Protection, Simplified",
        description:
          "RedNotice leverages AI to provide seamless, integrated security to cyber attacks, delivering actionable results effectively.",
      },
      {
        title: "Brand Integrity",
        description:
          "RedNotice monitors various platforms to protect your brand from unauthorized use and impersonation.",
      },
      {
        title: "Dark Web Surveillance",
        description:
          "Proactively monitor the dark web to prevent data leaks and unauthorized access to your sensitive information.",
      },
    ];

    // Set Dashboard as the default component
    onMounted(() => {
      activeComponent.value = Dashboard;
    });

    const setActiveComponent = (component) => {
      activeComponent.value = component;
    };

    return {
      activeComponent,
      navItems,
      sideCards,
      setActiveComponent,
    };
  },
};

</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.out {
    border: rgb(68, 67, 67) 1px solid;
  }
  
  .cards {
    border: 1px solid #c30000;
  }
</style>
