<script setup lang="ts">
import { ref, computed } from 'vue'

interface ProjectInfo {
  name: string
  version: string
}

const project = ref<ProjectInfo>({
  name: 'Vue 3 + TS Boilerplate',
  version: '1.0.0'
})

const greeting = computed(() => `🚀 ${project.value.name}!`)
</script>

<template>
  <main class="container">
    <div class="card">
      <h1>{{ greeting }}</h1>
      
      <p class="description">
        You've successfully initialized a <strong>Type-Safe</strong> environment. 
        Ready to scale your next big idea.
      </p>

      <div class="links">
        <a href="https://github.com/sajjad101/Vue-3-TS-Enterprise-Ready-Boilerplate" target="_blank" class="btn-primary">
          View Repository
        </a>
      </div>

      <footer class="version-tag">
        v{{ project.version }} ⚡
      </footer>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at top right, #42b88322, #35495e11);
  font-family: 'Inter', system-ui, sans-serif;
  color: #2c3e50;
}

.card {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  max-width: 500px;
}

.badge {
  background: #42b883;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  margin-top: 1.5rem;
  font-size: 2.2rem;
  color: #35495e;
}

.description {
  margin: 1rem 0 2rem;
  line-height: 1.6;
  color: #64748b;
}

.links {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-primary {
  background: #42b883;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn-primary:hover { transform: translateY(-2px); }

.version-tag {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
</style>