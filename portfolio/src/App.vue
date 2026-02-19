<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>


<style>
/* 🔴 CHANGED: html is the ONLY scroll container */
html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-y: auto;        /* ✅ single scrollbar */
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: white;
  box-sizing: border-box;
}

/* 🔴 CHANGED: body does NOT create a scrollbar */
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: visible;       /* ✅ allows html to scroll */
}

/* unchanged */
*, *::before, *::after {
  box-sizing: inherit;
}

#app {
  width: 100%;
}

/* Sections */
section {
  width: 100%;

  /* 🔴 CHANGED: NO height math, NO calc */
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  scroll-margin-top: 60px;
}

/* unchanged */
section > * {
  margin: 0;
}

img, video {
  max-width: 100%;
  height: auto;
}
</style>
