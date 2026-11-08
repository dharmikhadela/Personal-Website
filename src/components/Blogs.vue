<template>
  <section class="blogs">
    <h2 class="blogs-title">Blog</h2>

    <p class="blogs-intro">
      Here's where I write about my experiences in software development, insights from my projects, and my experiences as a Computer Science student.
    </p>

    <div class="blogs-list">
      <article
        v-for="(blog, index) in blogs"
        :key="blog.title"
        class="blog-card"
      >
        <button class="blog-toggle" @click="toggleBlog(index)">
          <span>{{ blog.title }}</span>
          <span class="blog-icon">{{ activeBlogs.includes(index) ? "−" : "+" }}</span>
        </button>

        <div v-if="activeBlogs.includes(index)" class="blog-content">
          <p>{{ blog.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { blogs } from "../data/blogs"

const activeBlogs = ref<number[]>([])

function toggleBlog(index: number) {
  if (activeBlogs.value.includes(index)) {
    activeBlogs.value = activeBlogs.value.filter((i) => i !== index)
  } else {
    activeBlogs.value.push(index)
  }
}
</script>

<style scoped>
.blogs {
  padding: 100px var(--side-gap) 0;
  margin: 0 auto;
}

.blogs-title {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.05;
  margin-bottom: 12px;
  color: #f7f4ff;
}

.blogs-intro {
  font-size: 1rem;
  margin-bottom: 50px;
  letter-spacing: 0.08em;
}

.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-card {
  background: rgba(18, 16, 24, 0.82);
  border: 2px solid rgba(151, 93, 255, 0.45);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 14px rgba(151, 93, 255, 0.2);
}

.blog-card:hover {
  box-shadow: 0 0 10px #a26eff;
}

.blog-toggle {
  width: 100%;
  padding: 24px 28px;
  background: transparent;
  border: none;
  color: #f7f4ff;
  font: inherit;
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
}

.blog-icon {
  font-size: 2rem;
  color: #b58cff;
}

.blog-content {
  padding: 0 28px 28px;
  border-top: 1px solid rgba(181, 140, 255, 0.45);
  color: #e8e2f0;
  font-size: 1rem;
  line-height: 1.7;
  letter-spacing: 0.04em;
  white-space: pre-line;
}
</style>