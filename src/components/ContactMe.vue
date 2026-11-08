<template>
  <section class="contact-me">
    <h2 class="contact-me__title">Contact Me</h2>

    <p class="contact-intro">
      Need to reach out? No worries! Drop me a mail and I'll reach out as soon as possible.
    </p>

    <form 
      action="https://api.web3forms.com/submit"
      method="POST"
      class="contact-form-box"
      @submit.prevent="handleSubmit"
    >
      <input 
        type="hidden" 
        name="access_key" 
        value="7e5e06d3-921e-4de1-a21f-292b07662113"
      />

      <div class="form-field">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div class="form-field">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-field">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit" class="cta-btn">
        Send Message
      </button>

      <p 
        v-if="statusMessage" 
        class="form-status"
        :style="{ color: statusColor }"
      >
        {{ statusMessage }}
      </p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      statusMessage: "",
      statusColor: ""
    };
  },
  methods: {
    async handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData
        });

        let data;
        try {
          data = await response.json();
        } catch {
          data = { success: false };
        }

        if (data.success) {
          this.statusMessage = "Message sent successfully!";
          this.statusColor = "lightgreen";
          setTimeout(() => {
            this.statusMessage = "";
          }, 3000);
          form.reset();
        } else {
          this.statusMessage = "Something went wrong. Try again.";
          this.statusColor = "red";
          setTimeout(() => {
            this.statusMessage = "";
          }, 3000);
        }
      } catch (error) {
        this.statusMessage = "Network error. Please try later.";
        this.statusColor = "red";
        setTimeout(() => {
            this.statusMessage = "";
          }, 3000);
      }
    }
  }
};
</script>

<style scoped>

.form-status {
  margin-top: 16px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.contact-me {
    padding: 100px var(--side-gap) 0;
    margin: 0 auto;
    
}

.contact-me__title {
    font-size: clamp(2.2rem, 4vw, 3.6rem);
    line-height: 1.05;
    margin-bottom: 12px;
    color: #f7f4ff;
}

.contact-section {
  width: 100%;
  padding: 40px 70px;
  color: #f3eefc;
}

.contact-intro {
  font-size: 1rem;
  margin-bottom: 50px;
  letter-spacing: 0.08em;
}

.contact-form-box {
  display: flex;
  flex-direction: column;
  gap: 34px;

  background: rgba(18, 16, 24, 0.82);
  border: 2px solid rgba(151, 93, 255, 0.45);
  box-shadow: 0 0 14px rgba(151, 93, 255, 0.2);
  border-radius: 16px;

  padding: 44px;
  margin-top: 35px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-field label {
  font-size: 2.0rem;
  letter-spacing: 0.08em;
  color: #e8e2f0;
}

.form-field input,
.form-field textarea {
  width: 100%;
  border: none;
  outline: none;
  border-radius: 16px;
  background: #e8e2f0;
  opacity: 75%;
  color: black;
  font-size: 0.9rem;
  padding: 20px 24px;
}

.form-field input {
  height: 60px;
  font: inherit;
}

.form-field textarea {
  min-height: 200px;
  resize: none;
}

.cta-btn{
  font: inherit;
  color: inherit;
}

</style>