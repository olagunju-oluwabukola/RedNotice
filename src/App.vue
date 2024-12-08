<template>
  <div>
<HeaderComp/>
<Hero/>
<ApiMonitors/>
<why-choose-us/>
<Testimonials/>
<ApicardsMobile/>
<TestimonialsCard/>
<ArticleComp/>
  </div>

  <footer>
    <FooterComp/>
  </footer>

</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue';
import Hero from './components/Hero.vue';
import ApiMonitors from './components/ApiMonitors.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import Testimonials from './components/Testimonials.vue'
import ApicardsMobile from './components/ApicardsMobile.vue';
import TestimonialsCard from './components/TestimonialsCard.vue';
import ArticleComp from './components/ArticleComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<style>

</style>