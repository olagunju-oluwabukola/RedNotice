<template>
  <section class="py-16 bg-gradient-to-r from-[#160101] to-[#151212] text-red text-center">
    <h2 class="text-3xl font-bold text-red-500 mb-8">Testimonials</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <!-- <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <img src="" alt="RedNotice" class="w-10 h-10 mx-auto mb-4" />
        <p>"{{ testimonial }}"</p>
      </div> -->
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const testimonials = ref([
      "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
      "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
      "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
    ]);

    return { testimonials };
  },
};
</script>

<style scoped></style>
