<template>
  <section ref="sectionRef" id="about" class="section about">
    <h2 class="animate title">About Me</h2>

    <p class="animate line line1">
      CSE student passionate about coding, web development, and continuous learning.
    </p>

    <p class="animate line line2">
      Currently building projects to strengthen my skills and grow as a future software developer.
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const section = entry.target
      if (entry.isIntersecting) {
        section.classList.add('visible')
      } else {
        section.classList.remove('visible')
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
.section {
  padding: 180px 20px;
  text-align: center;
  min-height: 80vh;
}

.about {
  background-color: white;
}

/* Base animation */
.animate {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

/* Visible state */
.about.visible .animate {
  opacity: 1;
  transform: translateY(0);
}

/* Delays for line-by-line effect */
.about.visible .title { transition-delay: 0.2s; }
.about.visible .line1 { transition-delay: 0.6s; }
.about.visible .line2 { transition-delay: 1s; }

/* Typography */
h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.line {
  font-size: 1.5rem;
  max-width: 900px;
  margin: 10px auto;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 600px) {
  .section { padding: 120px 15px; }
  h2 { font-size: 1.6rem; }
  .line { font-size: 1rem; }
}
</style>
