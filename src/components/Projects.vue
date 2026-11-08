<template>
  <section class="projects-section" id="projects">
    <div class="projects-container">
      <div class="projects-header">
        <h2 class="projects-title">Projects</h2>
        <p class="projects-subtitle">
          Selected work in full-stack development, product design, and software engineering.
          Click the project cards to view detailed information: project overviews, tech stack, and key contributions.
        </p>
      </div>

      <div class="project-cards">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card-wrapper"
        >
          <div
            class="project-card"
            @click="openProjectModal(project)"
            role="button"
            tabindex="0"
            @keydown.enter="openProjectModal(project)"
            @keydown.space.prevent="openProjectModal(project)"
          >
            <img
              :src="project.cover"
              :alt="project.title"
              class="project-card__image"
            />

            <div class="project-card__content">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__stack">{{ project.stack }}</p>
              <p class="project-card__summary">{{ project.summary }}</p>

              <div class="project-card__actions">

                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-card__link"
                  @click.stop
                >
                  Live Demo
                </a>

                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-card__link"
                  @click.stop
                >
                  Github
                </a>

                <a
                  v-if="project.awards"
                  :href="project.awards.at(1) || '#'"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-card__link"
                  @click.stop
                >
                  {{ project.awards.at(0) }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isModalOpen && selectedProject"
      class="project-modal-overlay"
      @click="closeProjectModal"
    >
      <div
        class="project-modal"
        @click.stop
      >

        <div class="project-modal__top">
          <div>
            <h3 class="project-modal__title">{{ selectedProject.title }}</h3>
            <p class="project-modal__stack">{{ selectedProject.stack }}</p>
          </div>

          <div class="project-modal__actions">
            <a
              v-if="selectedProject.demoUrl"
              :href="selectedProject.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="project-modal__btn"
            >
              Live Demo
            </a>

            <a
              v-if="selectedProject.githubUrl"
              :href="selectedProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="project-modal__btn project-modal__btn--secondary"
            >
              Github
            </a>

            <button
          class="project-modal__close"
          type="button"
          @click="closeProjectModal"
          aria-label="Close project details"
        >
          ×
        </button>

          </div>
        </div>

        <div class="project-modal__gallery">
          <img
            v-for="(image, index) in selectedProject.images"
            :key="index"
            :src="image"
            :alt="`${selectedProject.title} screenshot ${index + 1}`"
            class="project-modal__image"
            @click="openImagePreview(image, index)"
          />
        </div>

        <div class="project-modal__meta">
          <p><span>Role:</span> {{ selectedProject.role }}</p>
          <p><span>Tech:</span> {{ selectedProject.tech }}</p>
          <p><span>Description:</span> {{ selectedProject.description }}</p>
        </div>

        <div class="project-modal__contributions">
          <h4>Key Contributions:</h4>
          <ul>
            <li
              v-for="(item, index) in selectedProject.contributions"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          v-if="previewImage"
          class="image-preview-overlay"
          @click="closeImagePreview"
        >
          <button class="preview-arrow left" @click.stop="prevImage">
            <img src="/prev-arrow.svg" alt="Next" />
          </button>

          <img
            :src="previewImage"
            class="image-preview"
            @click.stop
          />

          <button class="preview-arrow right" @click.stop="nextImage">
            <img src="/next-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '../data/projects'

type Project = {
  id: number
  title: string
  stack: string
  summary: string
  role: string
  tech: string
  description: string
  contributions: string[]
  cover: string
  images: string[]
  demoUrl?: string | null
  githubUrl?: string | null
  awards?: string[] | null
}

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const previewImage = ref<string | null>(null)
const previewIndex = ref(0)

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  previewImage.value = null
  document.body.style.overflow = ''
}

const openImagePreview = (img: string, index: number) => {
  previewImage.value = img
  previewIndex.value = index
}

const closeImagePreview = () => {
  previewImage.value = null
}

const nextImage = () => {
  if (!selectedProject.value) return

  previewIndex.value =
    (previewIndex.value + 1) % selectedProject.value.images.length

  previewImage.value =
    selectedProject.value.images[previewIndex.value]
}

const prevImage = () => {
  if (!selectedProject.value) return

  previewIndex.value =
    (previewIndex.value - 1 + selectedProject.value.images.length) %
    selectedProject.value.images.length

  previewImage.value =
    selectedProject.value.images[previewIndex.value]
}
</script>

<style scoped>


.projects-section {
  padding: 100px var(--side-gap) 0;
  margin: 0 auto;
}

.projects-container {
  width: 100%;
}

.projects-header {
  margin-bottom: 34px;
}

.projects-eyebrow {
  font-size: 0.95rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #b391ff;
  margin-bottom: 10px;
}

.projects-title {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.05;
  margin-bottom: 12px;
  color: #f7f4ff;
}

.projects-subtitle {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #d4cfe3;
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 34px;
}

.project-card {
  border: none;
  text-align: left;
  cursor: pointer;
  border-radius: 24px;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(89, 58, 132, 0.95), rgba(52, 33, 82, 0.96));
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.28),
    0 0 30px rgba(109, 40, 217, 0.18);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    outline-color 0.2s ease;
  outline: 2px solid transparent;
}

.project-card:hover {
  box-shadow: 0 0px 10px rgb(154, 107, 255, 0.75);
  transform: translateY(-6px);
}

.project-card__image {
  width: 100%;
  opacity: 85%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.project-card__content {
  padding: 18px 18px 16px;
}

.project-modal-overlay {
  position: fixed;
  top: 68px;          /* navbar height */
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2000;
  background: rgba(7, 4, 14, 0.78);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;
}

.project-modal {
  position: relative;
  width: min(1100px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 28px;
  padding: 28px;
  background: linear-gradient(180deg, rgba(67, 46, 104, 0.98), rgba(39, 23, 61, 0.98));
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.45),
    0 0 40px rgba(109, 40, 217, 0.18);
}

.project-modal__close {
  top: 16px;
  right: 16px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.8rem;
  line-height: 1;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.project-modal__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.project-modal__title {
  font-size: clamp(2rem, 3vw, 3rem);
  color: #f7f4ff;
  line-height: 1.1;
  margin-bottom: 8px;
}

.project-modal__stack {
  font-size: 1.05rem;
  color: #b391ff;
}

.project-modal__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.project-modal__btn {
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(180deg, #a26eff 0%, #6d28d9 100%);
}

.project-modal__btn--secondary {
  white-space: nowrap;
  flex-shrink: 0;
  background: rgba(28, 17, 45, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-modal__gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.project-modal__image {
  cursor: pointer;
  transition: transform 0.2s ease;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 14px;
  display: block;
}

.project-modal__image:hover {
  transform: scale(1.02);
}

.preview-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;

  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(6px);
}

.preview-arrow img {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.preview-arrow.left {
  left: 28px;
}

.preview-arrow.right {
  right: 28px;
}

.preview-arrow:hover {
  background: rgba(255,255,255,0.18);
  transform: translateY(-50%) scale(1.06);
}

.project-modal__meta {
  display: grid;
  gap: 10px;
  margin-bottom: 24px;
  color: #f5f0ff;
  font-size: 1rem;
  line-height: 1.7;
}

.project-modal__meta span {
  font-weight: 700;
}

.project-modal__contributions {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 18px;
}

.project-modal__contributions h4 {
  font-size: 1.25rem;
  color: #f7f4ff;
  margin-bottom: 12px;
}

.project-modal__contributions ul {
  padding-left: 20px;
  display: grid;
  gap: 12px;
  color: #f1ecfb;
  line-height: 1.7;
}

.image-preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-preview {
  width: min(1100px, 90vw);
  height: min(700px, 85vh);

  object-fit: contain;   /* shows full image */
  border-radius: 12px;
  background: transparent;      /* fills empty space */
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.project-card__title {
  font-size: 1.7rem;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 6px;
}

.project-card__stack {
  font-size: 1rem;
  color: #a86fff;
  margin-bottom: 10px;
}

.project-card__summary {
  font-size: 1rem;
  line-height: 1.5;
  color: #f2eefc;
  margin-bottom: 16px;
}

.project-card__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.project-card__view,
.project-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  text-decoration: none;
}

.project-card__link:hover {
  box-shadow: 0 0 8px rgba(162, 110, 255, 0.75);
  border-color: rgba(162, 110, 255, 0.75);
  border-width: 2px;
}

.project-card__view {
  background: linear-gradient(180deg, #a26eff 0%, #6d28d9 100%);
  color: #fff;
}

.project-card__link {
  background: rgba(28, 17, 45, 0.72);
  color: #f7f4ff;
  border: 1px solid rgba(255, 255, 255, 0.08);
}




@media (max-width: 1100px) {


  .project-cards {
    grid-template-columns: 1fr;
  }

  .project-modal__gallery {
    grid-template-columns: 1fr;
  }

  .project-modal__top {
    flex-direction: column;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .project-modal-overlay {
    padding: 16px;
  }

  .project-modal {
    padding: 20px;
    border-radius: 22px;
  }

  .projects-section {
    padding: 100px 28px 72px 28px;
  }

  .project-card__title {
    font-size: 1.45rem;
  }
}
</style>