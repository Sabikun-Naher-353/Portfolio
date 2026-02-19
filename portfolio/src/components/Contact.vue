
<template>
  <section ref="sectionRef" class="section contact" id="contact">
    <h1>Contact Me</h1><br>
    <h3>Connect with me on these platforms</h3><br>

    <div class="contact-links">
      <a :href="github" target="_blank" rel="noopener">
        <img :src="gh" alt="GitHub" />
      </a>
      <a :href="linkedin" target="_blank" rel="noopener">
        <img :src="li" alt="LinkedIn" />
      </a>
      <a :href="facebook" target="_blank" rel="noopener">
        <img :src="fb" alt="Facebook" />
      </a>
      <a :href="instagram" target="_blank" rel="noopener">
        <img :src="ig" alt="Instagram" />
      </a>
      <a :href="'https://wa.me/' + whatsapp" target="_blank" rel="noopener">
        <img :src="wa" alt="WhatsApp" />
      </a>
      <a :href="'mailto:' + email" target="_blank" rel="noopener">
        <img :src="gm" alt="Gmail" />
      </a>
      <a :href="'mailto:' + yahoo" target="_blank" rel="noopener">
        <img :src="yh" alt="Yahoo Mail" />
      </a>
      <a :href="telegram" target="_blank" rel="noopener">
        <img :src="tg" alt="Telegram" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ✅ Import logos
import gm from '@/assets/logos/gm.png'
import fb from '@/assets/logos/fb.png'
import ig from '@/assets/logos/ig.png'
import li from '@/assets/logos/li.png'
import wa from '@/assets/logos/wa.png'
import yh from '@/assets/logos/yh.png'
import gh from '@/assets/logos/gh.png'
import tg from '@/assets/logos/tg.png'

// Your contact links
const email = 's.n.i.a00134@gmail.com'
const yahoo = 'nahersabikun429@yahoo.com'
const facebook = 'https://www.facebook.com/sabikun.naher.amrin'
const instagram = 'https://www.instagram.com/naheramrin112'
const linkedin = 'https://www.linkedin.com/in/sabikun-naher-islam-amrin-2351882a9'
const whatsapp = '8801999704599' // include country code
const github = 'https://github.com/Sabikun-Naher-353'
const telegram = 'https://t.me/sabikun353'

// Intersection observer for fade-in
const sectionRef = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    },
    { threshold: 0.1 } // lower threshold to trigger easier
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
.section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
  padding: 0px 80px 100px 80px; /* more padding on top */
  text-align: center;
}
.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact {
  background: white;
  color: black;
}

.contact-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center; /* center all logos */
}

/* Logos appear one by one */
.contact-links a {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.5s forwards;
}

.contact-links a:nth-child(1) { animation-delay: 0.2s; }
.contact-links a:nth-child(2) { animation-delay: 0.4s; }
.contact-links a:nth-child(3) { animation-delay: 0.6s; }
.contact-links a:nth-child(4) { animation-delay: 0.8s; }
.contact-links a:nth-child(5) { animation-delay: 1s; }
.contact-links a:nth-child(6) { animation-delay: 1.2s; }
.contact-links a:nth-child(7) { animation-delay: 1.4s; }
.contact-links a:nth-child(8) { animation-delay: 1.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-links a img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: transform 0.3s;
}

.contact-links a:hover img {
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .contact-links {
    flex-direction: column;
    gap: 15px;
  }
}

</style> 