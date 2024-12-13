<template>
     
  <section class="block md:hidden bg-gradient-to-r from-[#160101] to-[#151212] text-white">
    

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
</template>


<script>
import { ref, onMounted } from "vue";


import Dashboard from "../components/Dashboard.vue";
import Monitoring from "../components/Monitoring.vue";
import Settings from "../components/Settings.vue";
import Help from "../components/Help.vue";
import Documentation from "../components/Documentation.vue";

export default {
  setup() {
    const activeComponent = ref(null); 

    const navItem = [
      {
        name: "Dashboard",
        component: Dashboard,
        iconViewBox: "0 0 24 24",
        iconPaths: ["M3 10h18M12 3v18"], 
      },
      {
        name: "Monitoring",
        component: Monitoring,
        iconViewBox: "0 0 24 24",
        iconPaths: ["M9 19V5M15 19V5"], 
      },
      {
        name: "Settings",
        component: Settings,
        iconViewBox: "0 0 24 24",
        iconPaths: [
          "M12 1v2M17.31 3.69l1.42-1.42M23 12h-2M20.31 17.31l1.42 1.42M12 23v-2M6.69 20.31l-1.42 1.42M1 12h2M3.69 6.69L2.27 5.27",
          "M12 8a4 4 0 100 8 4 4 0 000-8z",
        ], 
      },
      {
        name: "Help",
        component: Help,
        iconViewBox: "0 0 24 24",
        iconPaths: [
          "M12 19h.01M12 15a4 4 0 110-8 4 4 0 010 8zM12 3C8.13 3 5 6.13 5 10a7 7 0 1014 0c0-3.87-3.13-7-7-7z",
        ], 
      },
      {
        name: "Documentation",
        component: Documentation,
        iconViewBox: "0 0 24 24",
        iconPaths: [
          "M12 4v16M8 8h8M8 12h8M8 16h8",
        ], 
      },
    ];


    onMounted(() => {
      activeComponent.value = Dashboard;
    });

   
    const setActiveComponent = (component) => {
      activeComponent.value = component;
    };

    return {
      activeComponent,
      navItems,
      setActiveComponent,
    };
  },
};
</script>
