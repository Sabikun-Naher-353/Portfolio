<template>
  <nav class="navbar">
    <!-- Hamburger button -->
    <div class="menu-btn" @click="toggleMenu">☰</div>

    <!-- Menu list -->
    <ul :class="{ show: isOpen }">
      <li @click="goToSection('home')">Home</li>
      <li @click="goToSection('about')">About</li>
      <li @click="goToSection('education')">Education</li>
      <li @click="goToSection('skills')">Skills</li>
      <li @click="goToSection('achievement')">Achievement</li>
      <li @click="goToSection('projects')">Projects</li>
      <li @click="goToSection('contact')">Contact</li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()
const route = useRoute()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const goToSection = async (sectionId) => {
  isOpen.value = false

  // If we are NOT on home page, go there first
  if (route.path !== '/') {
    await router.push('/')
  }

  // Wait for DOM to render, then scroll
  requestAnimationFrame(() => {
    const navbarHeight = 60
    const el = document.getElementById(sectionId)
    if (el) {
      const top = el.offsetTop - navbarHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }

  
  })
}
</script>

<style scoped>
/* Navbar container */
.navbar {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

/* Hamburger button */
.menu-btn {
  font-size: 26px;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  z-index: 1100;
}

/* Menu list */
ul {
  list-style: none;
  margin: 0;
  padding: 10px;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  gap: 10px; 
  position: absolute;
  right: 0;
  top: 45px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Show menu */
ul.show {
  display: flex;
}

/* Menu items */
li {
  cursor: pointer;
  color: black;
  font-weight: bold;
  transition: color 0.3s;
}

li:hover {
  color: #B07A4A;
}

/* Desktop */
@media (min-width: 768px) {
  .menu-btn { display: none; }

  ul {
    display: flex !important;
    flex-direction: row;
    gap: 15px;
    margin: 0;
    position: static;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }

  li { color: black; }
}
</style>
