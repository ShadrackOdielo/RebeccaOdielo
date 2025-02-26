<script setup lang="ts">
const route = useRoute()
const isHomeSection = ref(true)
const activeSection = ref('')
const progress = ref(0)

// check if the route matches the to prop
const routeMatch = (to: string) => computed(() => hash.value === to)
 
// watch for route changes
const hash = ref(route.hash)
// watch(route,()  => {
//   hash.value = route.hash
// },{deep:true, immediate:true})
const items =ref([
  {
    label: 'Home',
    slot: 'home',
    to: '/#',
    active: routeMatch('#home'),
    activeClass: 'font-bold'
  },
 
  {
    label: 'About',
    slot: 'about',
    to: '/#about',
    active: routeMatch('#about'),
    activeClass: 'font-bold'
  },
  {
    label: 'Portfolio',
    slot: 'portfolio',
    exactHash: true,
    active: routeMatch('#portfolio'),
    to: '/#portfolio',
    activeClass: 'font-bold'
  },
  {
    label: 'Services',
    slot: 'services',
    exactHash: true,
    active: routeMatch('#services'),
    to: '/#services',
    activeClass: 'font-bold'
  },
  
  {
    label: 'Contact',
    slot: 'contact',
    exactHash: true,
    active: routeMatch('#contact'),
    to: '/#contact',
    activeClass: 'font-bold'
  }
])


const handleScroll = () => {
  isHomeSection.value = window.scrollY < window.innerHeight
  progress.value = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

  const sections = items.value.map(link => document.getElementById(link.slot))
  sections.forEach(section => {
    if (section && section.getBoundingClientRect().top <= window.innerHeight / 2 && section.getBoundingClientRect().bottom >= window.innerHeight / 2) {
      activeSection.value = section.id
      if (route.path === '/') {
        history.replaceState(null, '', `#${section.id}`)
        hash.value = `#${section.id}`
      }
    }
  })
}

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
          if (route.path === '/') {
            history.replaceState(null, '', `#${entry.target.id}`)
            hash.value = `#${entry.target.id}`

          }
        }
      })
    },
    { threshold: 0.5 }
  )

  items.value.forEach((link) => {
    const section = document.getElementById(link.slot)
    if (section) {
      observer.observe(section)
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  observeSections()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <nav v-if="$device.isDesktopOrTablet" class="flex flex-row w-full sticky top-0 z-50  shadow-md">
    <div class="w-full flex items-center justify-between">
      <UButton
    :avatar="{
      src: '/file.svg',
      size: 'xl',
      alt: 'Rebecca ',
    }"
    size="xl"
    color="neutral"
    variant="ghost"
    label="Rebecca Odielo"
    to="#"
  />
   <UNavigationMenu  :items="items" variant="link" :highlight="false" color="neutral"   class=" w-full justify-center" />
   <div class="flex items-center justify-center px-8  "><UButton label="Resume" color="warning" size="md" /></div>
  </div>

    </nav>
    <MobileNavbar />
</template>