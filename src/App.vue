<script setup>
import Footer from './components/Footer.vue';
import { useAutoTheme } from '@/composables/useAutoTheme';

const { currentTheme } = useAutoTheme();

</script>

<template>
  <div class="stars">
    <div class="star"></div>
  </div>
  <div class="stars1">
    <div class="star"></div>
  </div>
  <div class="stars2">
    <div class="star"></div>
  </div>
  <div class="stars3">
    <div class="star"></div>
  </div>
  <div class="stars4">
    <div class="star"></div>
  </div>
  <div class="stars5">
    <div class="star"></div>
  </div>
  <div
    class="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/50 rounded-full filter blur-3xl opacity-30 pointer-events-none z-0">
  </div>
  <div
    class="fixed bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[400px] bg-sky-500/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-3xl opacity-30 pointer-events-none z-0">
  </div>

  <div class="@container max-w-[992px] mx-auto h-full z-5 relative">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style scoped></style>
