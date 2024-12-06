<template>
    <section class=" bg-gradient-to-r from-[#160101] to-[#151212] text-white text-center px-1 md:px-1">
        <div class="flex items-center justify-between header py-4 rounded mb-10 px-10">
            <h1 class="text-xl md:text-2xl font-bold text-red">Monitoring</h1>
            <button class="relative">
              <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 7.165 8 8.984 8 11v3.159c0 .538-.214 1.055-.595 1.436L6 17h5m4 0a3 3 0 01-6 0m6 0H9"
                />
              </svg>
            </button>
          </div>
      <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(monitor, index) in apiMonitors"
          :key="index"
          class="cards bg-transparent rounded-lg p-6 shadow-lg"
        >
          <div class="mb-4">
            
            <img
              :src="monitor.icon"
              :alt="monitor.title"
              class="mx-auto"
              :style="{ width: monitor.size + 'px', height: monitor.size + 'px' }"
            />
          </div>
          <h3 class=" text-red text-[10px] font-bold text-red-400 mb-2">
            {{ monitor.title }}
          </h3>
          <p class="text-10 md:text-[10px] text-white">
            {{ monitor.description }}
          </p>
        </div>
      </div>
    </section>
  </template>
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const apiMonitors = ref([
        {
          icon: "/img/6b3d34af6ac6cc8b3893fef6294f1b8adrdrfg 1.svg",
          title: "Credential Breach Monitoring",
          description: "Detect and respond to compromised credentials to enhance security.",
          size: 60, 
        },
        {
          icon: "/img/0db76ff26395b66749967398c7c82365hh 1.svg",
          title: "Fraud Prevention",
          description: "Mitigate fraudulent activities through AI-powered solutions.",
          size: 60,
        },
        {
          icon: "/img/hu 2.svg",
          title: "Threat Intelligence",
          description: "Gain insights into emerging threats to secure your systems.",
          size: 60, 
        },
        {
          icon: "/img/19a6f31addaf7db4ddb18280fe6f90f0 1.svg",
          title: "IOC Enrichment",
          description: "Enlarge your incident response toolkit with enriched indicators.",
          size: 60, 
        },
        {
          icon: "/img/450983c69204ecb00dd4b72e447c5f41 1.svg",
          title: "High-Profile Protection",
          description: "Offer elite security for high-value individuals and organizations.",
          size: 60, 
        },
        {
          icon: "/img/8b951db7af5761abb998cb0611578cbf 2.svg",
          title: "Attack Surface Management",
          description: "Identify and manage vulnerabilities in your digital footprint.",
          size: 60, 
        },
        {
          icon: "/img/9fcccdefd2f5336e989776717ac2e8f7 2.svg",
          title: "Phishing Defense",
          description: "Safeguard against malicious email-based attacks.",
          size: 60, 
        },
        {
          icon: "/img/bb 1.svg",
          title: "Impersonation Protection",
          description: "Safeguard your brand against fake websites and impersonators.",
          size:60,
        },
      ]);
  
      return { apiMonitors };
    },
  };
  </script>

  <style scoped>
  .cards{
      border: 1px solid #C30000;
  }
  .header{
    border: 1px rgb(61, 58, 58) solid;
}
</style>
 