<template>
  <UContainer id="services" class="max-w-5xl mx-auto text-center py-16">
    <h2 class="text-3xl font-bold mb-4">What I Offer</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-8">
      I specialize in helping businesses grow through strategic planning, branding, and data-driven marketing.
    </p>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard v-for="service in services" :key="service.title" class="p-6 shadow-md">
        <div class="flex items-center justify-center mb-4">
          <UIcon :name="service.icon" class="text-primary w-12 h-12" />
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ service.description }}</p>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
const services = [
  {
    title: "Business Strategy",
    description: "Helping businesses develop and implement effective strategies to maximize growth.",
    icon: "i-mdi-chart-line"
  },
  {
    title: "Marketing & Branding",
    description: "Building strong brand identities and marketing strategies that drive engagement.",
    icon: "i-mdi-bullhorn"
  },
  {
    title: "Data Analytics",
    description: "Analyzing market trends and consumer behavior to optimize business performance.",
    icon: "i-mdi-chart-pie"
  },
  {
    title: "Financial Planning",
    description: "Providing insights on budgeting, investment, and financial growth strategies.",
    icon: "i-mdi-cash-multiple"
  },
  {
    title: "Customer Insights",
    description: "Understanding customer needs and behaviors to enhance business offerings.",
    icon: "i-mdi-account-group"
  },
  {
    title: "Project Management",
    description: "Leading and managing projects effectively to ensure successful outcomes.",
    icon: "i-mdi-clipboard-check"
  }
];
</script>
