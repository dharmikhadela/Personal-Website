<template>
  <section class="skills">
    <h2 class="skills-title">Skills</h2>
    <p class="skills-intro">
      Need to reach out? No worries! Drop me a mail and I'll reach out as soon as possible.
    </p>

    <div class="skills-container">
      <div 
        v-for="(category, index) in skills" 
        :key="index" 
        class="skill-card"
      >
        <h3 class="skill-heading">{{ category.title }}</h3>

        <div class="skill-tags">
          <span 
            v-for="(item, i) in category.items" 
            :key="i" 
            class="skill-tag"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "Languages",
          items: ["Java", "Python", "C/C++", "SQL", "TypeScript", "JavaScript"]
        },
        {
          title: "Backend & APIs",
          items: ["Flask", "FastAPI", "REST APIs", "WebSockets", "OAuth 2.0"]
        },
        {
          title: "Databases",
          items: ["PostgreSQL", "PostGIS", "MongoDB", "MySQL"]
        },
        {
          title: "Infrastructure",
          items: ["Docker", "AWS EC2", "Nginx", "CI/CD", "Linux"]
        },
        {
          title: "AI & Data",
          items: ["OpenAI API", "LLM Integration", "Prompt Engineering"]
        },
        {
          title: "Concepts",
          items: ["Distributed Systems", "Algorithms", "Networking", "Concurrency"]
        }
      ]
    };
  }
};
</script>

<style scoped>

.skills {
  padding: 100px var(--side-gap) 0;
  min-height: 120dvh;
}

.skills-title {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  color: #f7f4ff;
}

.skills-intro {
  font-size: 1rem;
  margin-bottom: 50px;
  letter-spacing: 0.08em;
}


/* Grid Layout */
.skills-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* Card */
.skill-card {
  background: #15151b;
  border-radius: 18px;
  padding: 24px;
  border: 1px solid #2a2a35;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

/* Hover glow */
.skill-card:hover {
  transform: translateY(-6px);
  border-color: #7c3aed;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
}

/* Heading */
.skill-heading {
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: #a78bfa;
}

/* Tags container */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Individual tag */
.skill-tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  color: #dcd6ff;
  font-size: 0.85rem;
  border: 1px solid rgba(124, 58, 237, 0.25);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(124, 58, 237, 0.3);
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 900px) {
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
}

</style>