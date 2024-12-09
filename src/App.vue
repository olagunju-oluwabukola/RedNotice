<template>
  <div>
    <HeaderComp />

    <router-view /> 
    <footer>
      <FooterComp />
    </footer>
  </div>
</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>

