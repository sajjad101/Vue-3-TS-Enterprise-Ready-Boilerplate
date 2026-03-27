<script setup lang="ts">
import { ref } from 'vue';

/**
 * Config using `as const`
 */
const CONFIG_OPTIONS = {
  endpoint: 'https://api.example.com',
  timeout: 5000,
  retries: 3
} as const;

/**
 * Type derived from config
 */
type Config = typeof CONFIG_OPTIONS;

/**
 * State
 */
const loading = ref(false);
const data = ref<any>(null);
const error = ref<string | null>(null);

/**
 * Fake API call using config
 */
const fetchData = async () => {
  loading.value = true;
  error.value = null;

  try {
    // simulate API delay
    await new Promise((resolve) =>
      setTimeout(resolve, CONFIG_OPTIONS.timeout)
    );

    // mock response
    data.value = {
      message: 'Data fetched successfully!',
      endpoint: CONFIG_OPTIONS.endpoint
    };
  } catch (err) {
    error.value = 'Something went wrong';
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <div class="container">
    <div class="card">
      <h1>Vue 3 + TypeScript (`as const`)</h1>

      <div class="config-box">
        <p><strong>Endpoint:</strong> {{ CONFIG_OPTIONS.endpoint }}</p>
        <p><strong>Timeout:</strong> {{ CONFIG_OPTIONS.timeout }}</p>
        <p><strong>Retries:</strong> {{ CONFIG_OPTIONS.retries }}</p>
      </div>

      <button @click="fetchData">Fetch Data</button>

      <p v-if="loading" class="loading">Loading...</p>
      <p v-if="error" class="error">{{ error }}</p>

      <div v-if="data" class="data-box">
        <p>{{ data.message }}</p>
        <p>Source: {{ data.endpoint }}</p>
      </div>
    </div>
  </div>
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
  box-shadow: 0 25px 60px rgba(66, 184, 131, 0.08);
  max-width: 500px;
  width: 100%;
  transition: all 0.25s ease;
  border: 1px solid rgba(66, 184, 131, 0.08);
}

h1 {
  margin-top: 1.5rem;
  font-size: 2.2rem;
  color: #2f855a;
  letter-spacing: -0.5px;
}

.description {
  margin: 1rem 0 2rem;
  line-height: 1.7;
  color: #64748b;
  font-size: 0.95rem;
}

.links {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, #42b883, #2f855a);
  color: white;
  padding: 12px 26px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.25);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 30px rgba(66, 184, 131, 0.35);
}

.version-tag {
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #94a3b8;
  letter-spacing: 0.5px;
}

.badge {
  background: #42b883;
  color: white;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 5px 15px rgba(66, 184, 131, 0.3);
}
</style>