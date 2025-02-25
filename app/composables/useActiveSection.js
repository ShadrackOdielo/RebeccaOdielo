import { ref, onMounted, onUnmounted } from 'vue';

export function useActiveSection(sectionIds) {
  const activeSection = ref('');

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.5 } // Adjust as needed
    );

    sectionIds.forEach((id) => {
      const section = document.querySelector(`#${id}`);
      if (section) observer.observe(section);
    });
    
    onUnmounted(() => observer.disconnect());
  });

  return { activeSection };
}
