<template>
  <div class="page-wrapper">
    <div class="stars"></div>

    <main class="home-page">
      <section id="home">
        <HeroSection />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blog">
        <Blogs />
      </section>

      <section id="contact">
        <Contacts />
      </section>

      <section id="hobbies">
        <Hobbies />
      </section>

      <section id="skills">
        <Skills />
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import Projects from '../components/Projects.vue'
import Contacts from '../components/ContactMe.vue'
import Skills from '../components/Skills.vue'
import Hobbies from '../components/Hobbies.vue'
import Blogs from '../components/Blogs.vue'
</script>