<template> 
  <section ref="sectionRef" id="home" class="home">
    <!-- 1️⃣ Hello text -->
    <h2 class="animate hello">Hello everyone <br></h2><br><br>

    <!-- 2️⃣ Profile Image -->
    <img src="/profile.jpg" alt="Profile" class="profile-pic animate pic" /><br>

    <!-- 3️⃣ Name with wave animation -->
    <h1 class="name">
      <span
        v-for="(char, index) in nameChars"
        :key="index"
        class="wave"
        :style="{ 'animation-delay': `${1.1 + index * 0.02}s` }"

      >
        {{ char }}
      </span>
    </h1>

    <!-- 4️⃣ Welcome text -->
    <p class="animate text"><br>Welcome to my portfolio!</p>
  </section>
</template> 

<script setup>
import { ref, onMounted, computed } from 'vue'

const sectionRef = ref(null)

const name = "I'm Sabikun Naher Islam Amrin"
const nameChars = computed(() =>
  name.split('').map(char => (char === ' ' ? '\u00A0' : char))
)

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
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  background: white;
}

/* ===== Profile ===== */
.profile-pic {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 20px solid #79553d;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

/* ===== Base animation ===== */
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.home.visible .animate {
  opacity: 1;
  transform: translateY(0);
}

/* ===== ORDER TIMING ===== */
.home.visible .hello { transition-delay: 0.1s; }
.home.visible .pic   { transition-delay: 0.6s; }
.home.visible .name  { transition-delay: 1.1s; }
.home.visible .text  { transition-delay: 2.1s; }

/* ===== Name wave animation ===== */
.name {
  display: inline-block;
  white-space: nowrap;
}

.wave {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
}

.home.visible .wave {
  animation: waveUp 0.4s forwards;
  animation-delay: .5s;
}

@keyframes waveUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Typography ===== */
.hello {
  font-size: 2.8rem;
  margin-bottom: 10px;
  color: black;
  ont-family: 'Dancing Script', cursive;

  font-weight: 600;
  letter-spacing: 1px;
}

.name {
  font-size: 2.4rem;
  color: black;
}

.text {
  font-size: 1.6rem;
  color: black;
  margin-top: 10px;
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .profile-pic { width: 120px; height: 120px; }
  .hello { font-size: 1.2rem; }
  .name { font-size: 1.8rem; }
  .text { font-size: 1.3rem; }
}
</style>    for this section to background i want tp add pic that take whole section as background pic