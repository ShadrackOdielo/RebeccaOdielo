<template>
  <UContainer id="about" class="py-20  ">
    <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center">
      <!-- Image -->
      <div class="flex-1 flex justify-center lg:justify-start">
        <img
          src="/images/secondary.png"
          alt="Rebecca Odielo"
          class="rounded-lg shadow-xl w-[350px] lg:w-[450px] object-cover"
        >
      </div>

      <!-- Content -->
      <div class="flex-1 mt-10 lg:mt-0 lg:ml-10 space-y-4">
        <h2 class="text-4xl font-bold">About Me</h2>
        <p class="text-gray-300 text-lg">
          I am a dedicated eCommerce specialist with a passion for designing seamless
          digital experiences. My expertise lies in optimizing online stores, UI/UX, and
          conversion rate optimization.
        </p>
        <p class="text-gray-400">
          I graduated from Multimedia University and have been working on digital
          transformation for brands in Kenya and beyond.
        </p>
        <UButton color="warning" class="mt-4">Learn More</UButton>
      </div>
    </div>
  </UContainer>
</template>
