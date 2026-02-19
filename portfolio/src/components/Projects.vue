<template>
  <section ref="sectionRef" class="section projects" id="projects">
    <h2 class="title">My Projects</h2>

    <div class="project-list">
      <a
        href="https://github.com/Sabikun-Naher-353/Memory-Game.git"
        target="_blank"
        class="project delay-1"
      >
        <img src="@/assets/logos/gh.png" alt="GitHub" />
        <span>Project One</span>
      </a>

      <a
        href="https://github.com/Sabikun-Naher-353/movie-and-book-recommender.git"
        target="_blank"
        class="project delay-2"
      >
        <img src="@/assets/logos/gh.png" alt="GitHub" />
        <span>Project Two</span>
      </a>

      <a
        href="https://github.com/Sabikun-Naher-353/Diseases-Prediction.git"
        target="_blank"
        class="project delay-3"
      >
        <img src="@/assets/logos/gh.png" alt="GitHub" />
        <span>Project Three</span>
      </a>
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
.section {
  min-height: 100vh;
  padding: 0 20px 100px;
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

.projects {
  background: white;
  color: black;
}

.title {
  font-size: 2.4rem;
  margin-bottom: 90px;
  letter-spacing: 1px;
}

.project-list {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.project {
  min-width: 220px;
  text-align: center;

  background: #B07A4A;
  padding: 22px 32px;
  border-radius: 12px;

  font-weight: 600;
  text-decoration: none;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    box-shadow 0.4s ease;
}

.section.visible .project {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.delay-1 { transition-delay: 0.4s; }
.delay-2 { transition-delay: 0.7s; }
.delay-3 { transition-delay: 1s; }

.project:hover {
  transform: translateY(-6px) scale(1.08);
  background-color: #79553d;
  box-shadow: 0 18px 40px rgba(0,0,0,0.18);
}

.project img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .project-list {
    flex-direction: column;
    gap: 20px;
  }

  .project {
    width: 100%;
    max-width: 300px;
  }

  .title {
    font-size: 1.9rem;
  }
}
</style>
