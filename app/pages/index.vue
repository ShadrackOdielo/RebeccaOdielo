<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <AppNavbar />
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <ServicesSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>
<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import PortfolioSection from '~/components/sections/PortfolioSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppNavbar from '~/components/AppNavbar.vue'




definePageMeta({
   colorMode: 'dark',
 })
</script>
