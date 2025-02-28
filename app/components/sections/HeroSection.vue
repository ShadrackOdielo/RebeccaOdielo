<script setup>
import { ref, onMounted } from 'vue';
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
const opacity = ref(0);
const translateY = ref(10);

onMounted(() => {
  y.value = 0;
  opacity.value = 1;
  translateY.value = 0;
});
</script>

<template>
  <div class="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
    <!-- Background Image with Overlay -->
    <div
    class="absolute inset-0 z-0 bg-cover bg-center" 
      style="background: linear-gradient(to right, #1e3a8a, #9333ea);
">
      <div class="absolute inset-0 bg-black/70 mix-blend-overlay"/>
    </div>

    <UContainer id="home" class="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
      <!-- Text Content -->
      <div class="text-center lg:text-left space-y-4">
        <p class="text-yellow-300 text-lg font-medium animate-fade-in">Hello, Welcome</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight animate-slide-in">
          I’m Rebecca Odielo
        </h1>
        <p class="text-gray-300 text-lg max-w-lg animate-fade-in">
          A passionate Accountant and commerce enthusiast based in Nairobi.
        </p>
        <UButton color="warning" class="mt-4 animate-fade-in">
          Contact Me
        </UButton>
      </div>

      <!-- Image with Blended Effect -->
      <div
        class="relative rounded-2xl p-2 shadow-lg transform transition-all duration-700"
        :style="{ opacity, transform: `translateY(${translateY}px)` }"
      >
        <div class="absolute inset-0 bg-[inherit] bg-blend-multiply  rounded-lg"/>
        <img
          src="/images/full2.png"
          alt="Rebecca Odielo"
          class="rounded-lg w-[300px] lg:w-[400px] object-cover bg-blend-overlay animate-fade-in"
        >
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}
.animate-slide-in {
  animation: slideIn 1.2s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
