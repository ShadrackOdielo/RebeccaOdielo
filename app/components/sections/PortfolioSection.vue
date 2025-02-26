    <template>
      <UContainer id="portfolio" class="bg-(--ui-bg-elevated) max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-6">Work & Education Timeline</h2>
        <div class="relative border-l border-gray-300 dark:border-gray-700 ml-4">
          <div v-for="(item, index) in timelineItems" :key="index" class="mb-8 ml-6">
            <div class="absolute -left-3 w-6 h-6 flex items-center justify-center bg-primary rounded-full">
              <UIcon :name="item.icon" class="text-white text-lg" />
            </div>
            <UCard class="shadow-lg">
              <div class="p-4">
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-sm text-gray-500">{{ item.date }}</p>
                <p class="mt-2 text-gray-700 dark:text-gray-300">{{ item.description }}</p>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </template>
    
    <script setup>
    const timelineItems = [
      {
        title: "Bank XYZ - Junior Analyst",
        description: "Assisted in financial analysis and market research.",
        date: "2025",
        icon: "i-heroicons-banknotes"
      },
      {
        title: "Marketing Intern - ABC Company",
        description: "Developed marketing strategies and conducted consumer analysis.",
        date: "2024",
        icon: "i-heroicons-chart-bar"
      },
      {
        title: "Business Strategy Intern - DEF Firm",
        description: "Worked on competitive analysis and business development strategies.",
        date: "2023",
        icon: "i-heroicons-briefcase"
      },
      {
        title: "Graduated - Multimedia University",
        description: "Bachelor of Commerce, specializing in Business Strategy & Marketing.",
        date: "2023",
        icon: "i-heroicons-academic-cap"
      }
    ];
    </script>
    