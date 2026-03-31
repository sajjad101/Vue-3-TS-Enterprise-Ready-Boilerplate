<template>
  <main class="container">
    <div class="card">
      <h1>{{ greeting }}</h1>
      
      <p class="description">
        Demonstrating <strong>markRaw</strong> vs reactive behavior in Vue 3.
      </p>

      <div class="counter-box">
        <div>
          <h3>Reactive Object</h3>
          <p>{{ normalObject.count }}</p>
          <button @click="updateNormal" class="btn-primary">Update Reactive</button>
        </div>

        <div>
          <h3>markRaw Object</h3>
          <p>{{ rawObject.count }}</p>
          <button @click="updateRaw" class="btn-secondary">Update Raw</button>
        </div>
      </div>

      <footer class="version-tag">
        v{{ project.version }} ⚡
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, reactive, markRaw } from 'vue'

interface ProjectInfo {
  name: string
  version: string
}

const project = ref<ProjectInfo>({
  name: 'Vue 3 + markRaw Demo',
  version: '1.0.0'
})

const greeting = computed(() => `🚀 ${project.value.name}`)

// ✅ reactive object
const normalObject = reactive({ count: 0 })

// 🚀 markRaw object
const rawObject = markRaw({ count: 0 })

function updateNormal() {
  normalObject.count++
}

function updateRaw() {
  rawObject.count++
  console.log('UI will NOT update automatically ⚠️')
}
</script>

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
  max-width: 600px;
}

h1 {
  margin-top: 1rem;
  font-size: 2rem;
  color: #35495e;
}

.description {
  margin: 1rem 0 2rem;
  line-height: 1.6;
  color: #64748b;
}

.counter-box {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 1.5rem;
}

.counter-box div {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 16px;
  width: 200px;
}

button {
  margin-top: 10px;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #42b883;
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
}

.btn-secondary {
  background: #64748b;
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
}

.version-tag {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
</style>