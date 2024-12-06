<template>
  <section class="md:block lg:hidden bg-gradient-to-r from-[#160101] to-[#151212] h-screen flex text-white">
    <!-- Sidebar -->
    <aside class="w-16 flex flex-col items-center py-4 bg-red-900">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="my-4 w-full py-3 flex justify-center items-center bg-red-800 hover:bg-red-600 rounded-lg"
        @click="setActiveComponent(item.component)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
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

    <!-- Main Content -->
    <main class="flex-1 flex justify-center items-center">
      <component :is="activeComponent" />
    </main>
  </section>
</template>

---

### Script
```javascript
<script>
import { ref, onMounted } from "vue";

// Components for the menu items
import Dashboard from "../components/Dashboard.vue";
import Monitoring from "../components/Monitoring.vue";
import Settings from "../components/Settings.vue";
import Help from "../components/Help.vue";
import Documentation from "../components/Documentation.vue";

export default {
  setup() {
    const activeComponent = ref(null); // Active component to render

    const navItems = [
      {
        name: "Dashboard",
        component: Dashboard,
        iconViewBox: "0 0 24 24",
        iconPaths: ["M3 10h18M12 3v18"], // Example SVG paths for a dashboard icon
      },
      {
        name: "Monitoring",
        component: Monitoring,
        iconViewBox: "0 0 24 24",
        iconPaths: ["M9 19V5M15 19V5"], // Example SVG paths for a monitoring icon
      },
      {
        name: "Settings",
        component: Settings,
        iconViewBox: "0 0 24 24",
        iconPaths: [
          "M12 1v2M17.31 3.69l1.42-1.42M23 12h-2M20.31 17.31l1.42 1.42M12 23v-2M6.69 20.31l-1.42 1.42M1 12h2M3.69 6.69L2.27 5.27",
          "M12 8a4 4 0 100 8 4 4 0 000-8z",
        ], // Example SVG paths for a settings icon
      },
      {
        name: "Help",
        component: Help,
        iconViewBox: "0 0 24 24",
        iconPaths: [
          "M12 19h.01M12 15a4 4 0 110-8 4 4 0 010 8zM12 3C8.13 3 5 6.13 5 10a7 7 0 1014 0c0-3.87-3.13-7-7-7z",
        ], // Example SVG paths for a help icon
      },
      {
        name: "Documentation",
        component: Documentation,
        iconViewBox: "0 0 24 24",
        iconPaths: [
          "M12 4v16M8 8h8M8 12h8M8 16h8",
        ], // Example SVG paths for a documentation icon
      },
    ];

    // Set the default active component on mount
    onMounted(() => {
      activeComponent.value = Dashboard;
    });

    // Update the active component based on clicked menu item
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
