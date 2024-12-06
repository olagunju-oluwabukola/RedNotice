<template>
  <section class="py-16 bg-gradient-to-r from-[#160101] to-[#151212] text-white text-center px-16 md:px-12">
    <h2 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red to-white bg-clip-text text-transparent mb-4">
      Our API Monitors
    </h2>
    <p class="text-white mb-10 text-[14px] md:text-xl md:w-2/4 mx-auto">
      At RedNotice, we offer a suite of AI-powered solutions to help you stay ahead of cyber threats.
    </p>


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
        <h3 class="md:text-lg text-red text-sm font-bold text-red-400 mb-2">
          {{ monitor.title }}
        </h3>
        <p class="text-sm md:text-[14px] text-white">
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
        icon: "/img/hu 2.png",
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
</style>