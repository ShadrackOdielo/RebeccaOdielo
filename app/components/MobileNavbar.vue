<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const open = ref(false)
// toogle open on scroll
const { y } = useWindowScroll();
watchEffect(() => {
    if (y.value > 0) {
        open.value = false
    }

   
})
const items = ref([
    {
        label: 'Home',
        to: '/#home',
        exactHash: true,
        activeClass: 'font-bold'
    },
    {
        label: 'About',
        to: '/#about',
        exactHash: true,
        activeClass: 'font-bold'
    },
    {
        label: 'Portfolio',
        to: '/#portfolio',
        exactHash: true,
        activeClass: 'font-bold'
    },
    {
        label: 'Services',
        to: '/#services',
        exactHash: true,
        activeClass: 'font-bold'
    },
    {
        label: 'Contact',
        to: '/#contact',
        exactHash: true,
        activeClass: 'font-bold'
    },
])
</script>
<template>
    <nav v-if="$device.isMobile" class="w-full flex items-center justify-between py-4 px-8 z-50 fixed top-0  shadow-md">
        <UButton
        :avatar="{ src: 'file.svg', alt: 'R' }"
        label="Rebecca Odielo"
        size="md"
        variant="ghost"
        color="neutral"
        />
    <UPopover v-model:open="open" arrow>
        <UButton
            color="warning"
            label="menu"
            :trailing-icon="open ? 'i-lucide-x' : 'i-lucide-menu'"
            />
            <template #content>
                <div class="flex flex-col m-4 space-y-4">
                    <UNavigationMenu :items="items" orientation="vertical" variant="link" :highlight="false" color="neutral" @change="open= !open" />
                        <UButton label="Resume" color="warning" size="md" />
                </div>
            </template>
    </UPopover>
</nav>
    </template>