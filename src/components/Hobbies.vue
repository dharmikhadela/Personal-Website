<template>
  <section class="hobbies">
    <h2 class="hobbies-title">Hobbies</h2>
    <p class="hobbies-intro">
      I am a human outside of work as well! When I'm not coding, you can find me exploring the world of music or art. I also enjoy spending time in nature whenever I get the chance.
    </p>

    <div class="instagram-embed">
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DMYunBHsxb-/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
      >
      </blockquote>

       <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DL8RwuRPOY-/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
      >
      </blockquote>

      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DFEkz46sY_T/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
      >
      </blockquote>

      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DNB8Gv0MhMN/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
      >
      </blockquote>

    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()

  if (!window.instgrm) {
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process()
      }
    }
    document.body.appendChild(script)
  } else {
    window.instgrm.Embeds.process()
  }
})
</script>

<style scoped>
.hobbies {
  padding: 100px var(--side-gap) 0;
  /* min-height: 100dvh; */
}

.hobbies-title {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  color: #f7f4ff;
}

.hobbies-intro {
  font-size: 1rem;
  margin-bottom: 50px;
  letter-spacing: 0.08em;
}

.instagram-embed {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-top: 24px;
  width: 100%;
}

.instagram-embed :deep(.instagram-media) {
  width: 100% !important;
  max-width: 320px !important;
  min-width: 0 !important;
  margin: 0 !important;
}

@media (max-width: 768px) {
  .hobbies {
    padding: 80px 20px 0;
  }

  .hobbies-intro {
    font-size: 0.95rem;
    margin-bottom: 32px;
    letter-spacing: 0.04em;
  }

  .instagram-embed {
    gap: 20px;
  }

  .instagram-embed :deep(.instagram-media) {
    max-width: 100% !important;
  }
}

@media (max-width: 480px) {
  .hobbies {
    padding: 64px 16px 0;
  }

  .hobbies-title {
    font-size: 2rem;
  }

  .instagram-embed {
    gap: 16px;
  }
}
</style>