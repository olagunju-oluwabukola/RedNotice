<template>
    <div class="min-h-screen flex bg-gray-900 text-white">
      <aside class="w-64 bg-gray-800 p-4 space-y-4">
        <h1 class="text-xl font-bold">RedNotice</h1>
        <nav>
          <ul>
            <li
              v-for="(item, index) in navItems"
              :key="index"
              class="py-2 px-4 cursor-pointer hover:bg-gray-700"
              @click="activeComponent = item.component"
            >
              {{ item.name }}
            </li>
          </ul>
        </nav>
      </aside>
      <main class="flex-1 p-4">
        <component :is="activeComponent" />
      </main>
    </div>
  </template>
  
  <script>
  import Dashboard from './components/Dashboard.vue';
  import Settings from './components/Settings.vue';
  import Documentation from './components/Documentation.vue';
  
  export default {
    data() {
      return {
        activeComponent: Dashboard,
        navItems: [
          { name: 'Dashboard', component: Dashboard },
          { name: 'Settings', component: Settings },
          { name: 'Documentation', component: Documentation },
        ],
      };
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  