<template>
  <section ref="sectionRef" class="section education" id="education">
    <h2 class="title">Education</h2>

    <div class="edu-list">
      <!-- School 1 -->
      <a
        href="https://www.gaghscsyl.edu.bd"
        target="_blank"
        rel="noopener noreferrer"
        class="edu-card delay-1"
      >
        <h3>SSC</h3>
        <img :src="logo1" alt="School Logo" class="edu-logo" />
        <p class="edu-name">Govt. Agragami Girl's High School & College, Sylhet</p>
      </a>

      <!-- School 2 -->
      <a
        href="https://www.scholarshomesylhet.edu.bd"
        target="_blank"
        rel="noopener noreferrer"
        class="edu-card delay-2"
      >
        <h3>HSC</h3>
        <img :src="logo2" alt="School Logo" class="edu-logo" />
        <p class="edu-name">SCHOLARSHOME</p>
      </a>

      <!-- School 3 -->
      <a
        href="https://www.metrouni.edu.bd"
        target="_blank"
        rel="noopener noreferrer"
        class="edu-card delay-3"
      >
        <h3>B.SC in CSE</h3>
        <img :src="logo3" alt="School Logo" class="edu-logo" />
        <p class="edu-name">Metropolitan University, Sylhet, Bangladesh</p>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* ✅ RELATIVE IMPORTS (THIS FIXES THE ERROR) */
import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.jpg'
import logo3 from '../assets/logo3.jpg'

const sectionRef = ref(null)
let observer = null

const setupObserver = () => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
}

onMounted(setupObserver)

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
  padding: 60px 20px 100px;
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

.education {
  background: white;
  color: black;
}

/* ===== Title ===== */
.title {
  font-size: 2.4rem;
  margin-bottom: 90px;
  letter-spacing: 1px;
}

/* ===== Cards Wrapper ===== */
.edu-list {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ===== Card ===== */
.edu-card {
  width: 260px;
  padding: 30px 20px;
  border-radius: 14px;
  background: #B07A4A;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  text-decoration: none;
  color: white;
  font-weight: 600;

  /* Entrance animation */
  opacity: 0;
  transform: translateY(60px) scale(0.95);

  /* Separate transitions */
  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    box-shadow 0.4s ease,
}
/* ===== Logo ===== */
.edu-logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
}

/* ===== Name ===== */
.edu-name {
  font-size: 1.1rem;
  text-align: center;
}

/* ===== Animation ===== */
.section.visible .edu-card {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.delay-1 { transition-delay: 0.4s; }
.delay-2 { transition-delay: 0.7s; }
.delay-3 { transition-delay: 1s; }

/* ===== Hover ===== */


.edu-card:hover {
  transform: translateY(-6px) scale(1.18);
  background-color: #79553d;
  color: white;
  box-shadow: 0 18px 40px rgba(0,0,0,0.2);
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  .edu-list {
    flex-direction: column;
    gap: 24px;
  }

  .edu-card {
    width: 100%;
    max-width: 320px;
  }

  .title {
    font-size: 1.9rem;
  }
}
</style>
