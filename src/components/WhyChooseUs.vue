<template>
  <section class=" lg:block bg-gradient-to-r from-[#160101] to-[#151212] py-6 md:py-16 md:px-16">
    <div class="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red to-white bg-clip-text text-center mb-4 md:mb-8 text-transparent">
      Why choose RedNotice
    </div>

    <div class="md:grid lg:flex gap-6 text-white">
      <img src="/img/Rectangle 6.svg" class="px-6" alt="">
      <!-- Sidebar -->
      <!-- <aside class="w-64 p-4 space-y-4 out">
        <img src="/img/R N 1.svg" alt="" />
        <nav>
          <ul>
            <li
              v-for="(item, index) in navItems"
              :key="index"
              class="py-2 px-4 m-10 cursor-pointer text-gray-400 hover:bg-red cards"
              @click="setActiveComponent(item.component)"
            >
              {{ item.name }}
            </li>
          </ul>
        </nav>
      </aside> -->

      <!-- Main Content -->
      <main class="flex-1 p-4">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- <div class="flex-1">
           
            <component :is="activeComponent" />
          </div> -->

          <!-- Side Cards -->
          <div class="space-y-6">
            <div
              class="p-4 bg-gradient-to-r from-[#160101] to-[#151212] mx-auto rounded-lg shadow-md border border-gray-700 text-center"
              v-for="(card, index) in sideCards"
              :key="index"
            >
              <h3 class="text-lg font-bold text-red">{{ card.title }}</h3>
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
