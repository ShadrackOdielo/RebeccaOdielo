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
  <UContainer id="home" class="min-h-screen flex items-center bg-navy text-white">
    <div class="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between">
      <!-- Text Content -->
      <div class="text-center lg:text-left space-y-4">
        <p class="text-yellow text-lg font-medium animate-fade-in">Hello, Welcome</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight animate-slide-in">
          I’m Rebecca Odielo
        </h1>
        <p class="text-gray-300 text-lg max-w-lg animate-fade-in">
          A passionate eCommerce specialist & UI/UX enthusiast based in Nairobi.
        </p>
        <UButton color="warning"  class="mt-4 animate-fade-in">
          Contact Me
        </UButton>
      </div>

      <!-- Image -->
      <div
        class="rounded-2xl bg-gray-800 p-2 shadow-lg transform transition-all duration-700"
        :style="{ opacity, transform: `translateY(${translateY}px)` }"
      >
        <NuxtImg
          src="/images/secondary.png"
          alt="Rebecca Odielo"
          class="rounded-lg w-[300px] lg:w-[400px] object-cover"
        />
      </div>
    </div>
  </UContainer>
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
