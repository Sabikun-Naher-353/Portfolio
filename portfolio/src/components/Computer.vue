<template>
  <section ref="sectionRef" class="computer-page">
    <h1 class="title">Computer Skills</h1>

    <div class="skills-grid">
      <div class="skill-box delay-1">C</div>
      <div class="skill-box delay-2">C++</div>
      <div class="skill-box delay-3">Java</div>
      <div class="skill-box delay-4">JavaScript</div>
      <div class="skill-box delay-5">Python</div>
      <div class="skill-box delay-6">HTML</div>
      <div class="skill-box delay-7">CSS</div>
      <div class="skill-box delay-8">Vue.js</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
/* ===== Page ===== */
.computer-page {
  min-height: 100vh;
  padding: 90px 20px 60px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0;
  transform: translateY(80px);
  transition: all 1s ease;
}

.computer-page.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Title ===== */
.title {
  font-size: 2.6rem;
  margin-bottom: 60px;
  letter-spacing: 1px;
  color: #333;
}

/* ===== Grid ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 900px;
}

/* ===== Skill Box ===== */
.skill-box {
  background: #B07A4A;
  padding: 30px 20px;
  border-radius: 14px;

  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: white;

  opacity: 0;
  transform: translateY(60px) scale(0.95);

  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    box-shadow 0.3s ease;
}

/* ===== Sequential Entrance ===== */
.computer-page.visible .skill-box {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.35s; }
.delay-3 { transition-delay: 0.5s; }
.delay-4 { transition-delay: 0.65s; }
.delay-5 { transition-delay: 0.8s; }
.delay-6 { transition-delay: 0.95s; }
.delay-7 { transition-delay: 1.1s; }
.delay-8 { transition-delay: 1.25s; }

/* ===== Hover Effect ===== */


/* ===== Mobile ===== */
@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .skill-box {
    font-size: 1.1rem;
    padding: 24px 16px;
  }
}
</style>
