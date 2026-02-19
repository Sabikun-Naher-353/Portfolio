<template>
  <section ref="sectionRef" class="activity-page">
    <h1 class="title">Extra-curricular Activities</h1>

    <div class="skills-grid">
      <div class="skill-box delay-1">Drawing</div>
      <div class="skill-box delay-2">Swimming</div>
      <div class="skill-box delay-3">Karate (Orange Belt Certified)</div>
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
.activity-page {
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

.activity-page.visible {
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 700px;
}

/* ✅ CENTER THE LAST BOX */
.skills-grid .skill-box:last-child {
  grid-column: 1 / -1;
  justify-self: center;
  max-width: 420px;
}

/* ===== Skill Box ===== */
.skill-box {
  background: #B07A4A;
  padding: 35px 25px;
  border-radius: 16px;

  font-size: 1.3rem;
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
.activity-page.visible .skill-box {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.delay-1 { transition-delay: 0.3s; }
.delay-2 { transition-delay: 0.55s; }
.delay-3 { transition-delay: 0.8s; }


/* ===== Mobile ===== */
@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .skill-box {
    font-size: 1.15rem;
    padding: 26px 18px;
  }

  /* Reset spanning on mobile (single column anyway) */
  .skills-grid .skill-box:last-child {
    grid-column: auto;
    max-width: 100%;
  }
}
</style>
