<template>
    <section class="py-12 md:py-16 text-center relative bg-gradient-to-r from-[#160101] to-[#151212]">
     
      <div class="relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-red md:mb-8">Testimonials</h2>
  
        <!-- Grid layout for medium and larger screens -->
        <div class="hidden md:grid gap-6 md:grid-cols-3 text-center md:mx-1 lg:mx-0 py-2 lg:py-10">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="md:p-0 lg:p-6"          >
          
            <div class="md:p-10 lg:p-16 text-center text-red text-[12px] test">
                <img src="/public/img/R N 1.svg" alt="logo" class="w-20 mb-8">
              <p>"{{ testimonial.text }}"</p>
            </div>
          </div>
        </div>
  
        <!-- Slider for small screens -->
        <div class="md:hidden w-[90%] mx-5 p-10">
          <div class="relative overflow-hidden">
            <!-- Slider Container -->
            <div
              class="flex transition-transform duration-500"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="w-full flex-shrink-0 text-red h-64"
                :style="{ backgroundImage: `url(${testimonial.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
              >
                <div class="p-6 text-[12px] rounded-lg text-red test">
                    <img src="/public/img/R N 1.svg" alt="logo" class="w-20 mb-8">
                  <p>"{{ testimonial.text }}"</p>
                </div>
              </div>
            </div>
  
            
            <div class="flex justify-center space-x-2">
              <div
                v-for="(_, index) in testimonials.length"
                :key="index"
                :class="[ 
                  'h-2 w-2 rounded-full cursor-pointer', 
                  index === activeSlide ? 'bg-white' : 'bg-red' 
                ]"
                @click="goToSlide(index)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    setup() {
      const testimonials = ref([
        {
          text: "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
       
        },
        {
          text: " I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer. ",

        },
        {
          text: " I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer. ", 
       
        },
      ]);
  
      const activeSlide = ref(0);
      let autoSlideInterval;
  
      const goToSlide = (index) => {
        activeSlide.value = index;
      };
  
      const autoSlide = () => {
        autoSlideInterval = setInterval(() => {
          activeSlide.value = (activeSlide.value + 1) % testimonials.value.length;
        }, 3000); // 3 seconds per slide
      };
  
      onMounted(() => {
        autoSlide();
      });
  
      onUnmounted(() => {
        clearInterval(autoSlideInterval);
      });
  
      return {
        testimonials,
        activeSlide,
        goToSlide,
      };
    },
  };
  </script>
  
  <style scoped>
  /* h2 {
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  } */
  
  /* Add debugging background color */
  .bg-cover {
    background-color: #f0f0f0; 
  }

  .test{
    background-image: url('/img/Rectangle 11.svg');
    width: 100%;
  }
  </style>
  