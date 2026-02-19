<template>
  <section ref="sectionRef" class="section skills" id="skills">
    <h2 class="title">My Skills</h2>

    <div class="skill-list">
      <router-link to="/computer" class="skill delay-1">
        Computer Language
      </router-link>

      <router-link to="/language" class="skill delay-2">
        Language
      </router-link>

      <router-link to="/activity" class="skill delay-3">
        Extra Curricular
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sectionRef = ref(null)
let observer = null

const setupObserver = () => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        // 🔁 reset when leaving viewport
        entry.target.classList.remove('visible')
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
}

onMounted(() => {
  setupObserver()
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
/* ===== Section ===== */
.section {
  min-height: 100vh;
  padding: 00px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0;
  transform: translateY(80px);
  transition: all 1s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.skills {
  background: white;
  color: black;
}

/* ===== Title ===== */
.title {
  font-size: 2.4rem;
  margin-bottom: 90px;
  letter-spacing: 1px;
}

/* ===== Skill List ===== */
.skill-list {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ===== Skill Card ===== */
.skill {
  min-width: 220px;
  text-align: center;

  background: #B07A4A;   
  padding: 22px 32px;
  border-radius: 12px;

  font-weight: 600;
  text-decoration: none;
  color: white;

  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    box-shadow 0.4s ease;
}

/* ===== Sequential Animation ===== */
.section.visible .skill {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.delay-1 { transition-delay: 0.4s; }
.delay-2 { transition-delay: 0.7s; }
.delay-3 { transition-delay: 1s; }

/* ===== Hover Effect ===== */
.skill:hover {
  transform: translateY(-6px) scale(1.08);
  background-color: #79553d;
  transition: background-color 0.25s ease;
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  .skill-list {
    flex-direction: column;
    gap: 20px;
  }

  .skill {
    width: 100%;
    max-width: 300px;
  }

  .title {
    font-size: 1.9rem;
  }
}
</style>
