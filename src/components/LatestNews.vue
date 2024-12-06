<template>
    <section class="py-16 bg-black text-white text-center">
      <h2 class="text-3xl font-bold text-red-500 mb-8">Read Our Latest News</h2>
      <div class="grid gap-6 md:grid-cols-4">
        <div
          v-for="(news, index) in latestNews"
          :key="index"
          class="bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <img :src="news.image" :alt="news.title" class="w-full rounded-lg mb-4" />
          <p class="text-sm text-gray-400 mb-2">{{ news.date }}</p>
          <h3 class="text-lg font-bold">{{ news.title }}</h3>
          <p class="text-sm text-gray-500">{{ news.author }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const latestNews = ref([
        {
          image: "/images/news1.jpg",
          title: "Unmasking the Threat Actor Behind ONNX Store and Caffeine Phishing Kit",
          date: "June 19, 2024",
          author: "Emmanuel",
        },
        {
          image: "/images/news2.jpg",
          title: "Technical Analysis of NoEscape Ransomware",
          date: "May 25, 2024",
          author: "Emmanuel",
        },
        {
          image: "/images/news3.jpg",
          title: "The Rise and Fall of BreachForums",
          date: "May 19, 2024",
          author: "Emmanuel",
        },
        {
          image: "/images/news4.jpg",
          title: "Behind ONNX Store and Caffeine Phishing Kit",
          date: "May 16, 2024",
          author: "Emmanuel",
        },
      ]);
  
      return { latestNews };
    },
  };
  </script>
  
  <style scoped></style>
  