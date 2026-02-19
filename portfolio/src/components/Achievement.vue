<template>
  <section class="section achievements" id="achievement" ref="achievementSection">
    <h2 class="title">Achievements</h2>

    <div class="achievement-list">
      <div
        v-for="(item, index) in achievements"
        :key="index"
        class="achievement-box"
        :class="{ visible: visibleBoxes.includes(index) }"
        @click="goToDetail(index)"
      >
        <img :src="item.image" alt="achievement image" />
        <p>{{ item.short }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import psc from '@/assets/achievements/psc.jpg'
import jsc from '@/assets/achievements/jsc.jpg'
import ssc from '@/assets/achievements/ssc.jpg'
import hsc from '@/assets/achievements/hsc.jpg'
import crestPSCJSC from '@/assets/achievements/cumilla-psc-jsc.jpg'
import crestHSC from '@/assets/achievements/cumilla-hsc.jpg'
import crestSAU from '@/assets/achievements/sau-hsc.jpg'
import karate from '@/assets/achievements/karate.jpg'
import iupc from '@/assets/achievements/iupc.jpg'

const visibleBoxes = ref([])
const achievementSection = ref(null)

const achievements = [
  { image: psc, short: 'Certificate for achieving GPA 5 in PSC' },
  { image: jsc, short: 'Certificate for achieving GPA 5 in JSC' },
  { image: ssc, short: 'Certificate for achieving GPA 4.83 in SSC' },
  { image: hsc, short: 'Certificate for achieving GPA 5 in HSC' },
  { image: crestPSCJSC, short: 'Crest from Greater Cumilla Association for GPA 5 in PSC & JSC' },
  { image: crestHSC, short: 'Crest from Greater Cumilla Association for GPA 5 in HSC' },
  { image: crestSAU, short: 'Crest from Officers Association, Sylhet Agricultural University for GPA 5 in HSC' },
  { image: karate, short: 'Certificate for passing Karate Orange Belt Examination' },
  { image: iupc, short: 'Certificate of Participation in IUPC' },
]

// Animate boxes row by row (3 per row)
const animateBoxes = () => {
  visibleBoxes.value = [] // reset first
  const rowSize = 3

  for (let row = 0; row < Math.ceil(achievements.length / rowSize); row++) {
    setTimeout(() => {
      const start = row * rowSize
      const end = Math.min(start + rowSize, achievements.length)

      for (let i = start; i < end; i++) {
        setTimeout(() => {
          visibleBoxes.value.push(i)
        }, (i - start) * 300) // stagger inside row
      }
    }, row * 800) // stagger between rows
  }
}

// Trigger animation when section comes into view
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBoxes()
          obs.unobserve(entry.target) // animate only once
        }
      })
    },
    { threshold: 0.3 } // trigger when 30% of section is visible
  )

  if (achievementSection.value) {
    observer.observe(achievementSection.value)
  }
})

// Public method to re-animate (when clicking Achievement button)
window.animateAchievements = () => animateBoxes()

const goToDetail = (index) => {
  router.push(`/achievement/${index}`)
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  padding: 80px 20px;
  text-align: center;
}

.achievements {
  background: white;
}

.title {
  font-size: 2.4rem;
  margin-bottom: 80px;
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* responsive and flexible */
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.achievement-box {
  background: #B07A4A;
  border-radius: 12px;
  padding: 20px;
  min-height: 140px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: all .8s ease;
}

.achievement-box.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.achievement-box img {
  width: 100%;
  height: 90px;
  object-fit: contain;
  margin-bottom: 12px;
}

.achievement-box p {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

@media (max-width: 900px) {
  .achievement-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 500px) {
  .achievement-list {
    grid-template-columns: 1fr;
  }
}
</style>
