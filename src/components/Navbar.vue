<template>
  <header class="navbar">
    <nav class="navbar__inner">
      <button
        class="menu-toggle"
        @click="isMenuOpen = !isMenuOpen"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div :class="['navbar__links', { 'navbar__links--open': isMenuOpen }]">
        <a href="#home" class="nav-link" @click="closeMenu">Home</a>
        <a href="#projects" class="nav-link" @click="closeMenu">Projects</a>
        <a href="#blog" class="nav-link" @click="closeMenu">Blog</a>
        <a href="#contact" class="nav-link" @click="closeMenu">Contact Me</a>
        <a href="#hobbies" class="nav-link" @click="closeMenu">Hobbies</a>
        <a href="#skills" class="nav-link" @click="closeMenu">Skills</a>
      </div>

      <a
        href="resume.pdf"
        class="resume-btn resume-btn--desktop"
        download="Dharmi_Khadela_Resume.pdf"
      >
        Download Resume
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: --primary-color;
  backdrop-filter: blur(14px);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 var(--side-gap);
  position: relative;
  background: linear-gradient(0deg, rgb(109, 40, 217, 60%) 0.14%, rgb(155, 107, 255, 60%) 99.86%);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 60px;
  font-size: 1rem;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  white-space: nowrap;
}

.resume-btn {
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 999px;
  background: #a26eff;
  color: black;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .navbar__inner {
    padding: 14px 16px;
  }

  .menu-toggle {
    display: block;
  }

  .resume-btn {
    font-size: 0.82rem;
    padding: 8px 12px;
  }

  .navbar__links {
    display: none;
    position: absolute;
    top: calc(100% + 8px);
    left: 16px;
    right: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    border-radius: 20px;
    background: rgba(18, 18, 18, 0.95);
    backdrop-filter: blur(14px);
  }

  .navbar__links--open {
    display: flex;
  }

  .nav-link {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .navbar__inner {
    gap: 10px;
  }

  .resume-btn {
    font-size: 0.72rem;
    padding: 7px 10px;
  }

  .menu-toggle {
    font-size: 1.6rem;
  }
}
</style>