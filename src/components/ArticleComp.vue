<template>
    <section class="bg-gradient-to-r from-[#160101] to-[#151212] text-white py-6 md:py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl text-red md:text-3xl lg:text-4xl font-bold text-center mb-10">
          Read Our Latest News
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article
            v-for="article in articles"
            :key="article.id"
            class="rounded-lg overflow-hidden shadow-md"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <p class="text-sm text-red mb-2">
                {{ article.date }}
              </p>
              <h3 class="text-[12px] md:text-[14px] font-semibold mb-4">
                {{ article.title }}
              </h3>
              <p class="text-sm">
                {{ article.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const articles = ref([
        {
          id: 1,
          image: "/img/Frame 36.svg",
          title: "Unmasking the Threat Actor Behind ONNX Store and Phishing Kit",
          date: "June 5, 2024 | 5 min read",
          description: "Explore the detailed analysis of ONNX Store...",
        },
        {
          id: 2,
          image: "/img/noescape-ransomware-wallpaper 1.svg",
          title: "Technical Analysis of NoEscape Ransomware",
          date: "May 20, 2024 | 5 min read",
          description: "Deep dive into NoEscape, a dangerous ransomware.",
        },
        {
          id: 3,
          image: "/img/Frame 37.svg",
          title: "The Rise and Fall of BreachForums",
          date: "May 15, 2024 | 6 min read",
          description: "A timeline of the infamous BreachForums...",
        },
        {
          id: 3,
          image: "/img/Frame 40.svg",
          title: "The Rise and Fall of BreachForums",
          date: "May 15, 2024 | 6 min read",
          description: "A timeline of the infamous BreachForums...",
        },
      ]);
  
      return { articles };
    },
  };
  </script>
  
  
  