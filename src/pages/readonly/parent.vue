<script setup lang="ts">
import { reactive, provide, readonly } from 'vue';
import { StateKey, type AppState } from './types';
import ChildComponent from './child.vue';

// 1. Initialize reactive state
const state = reactive<AppState>({
  user: {
    id: 101,
    preferences: {
      theme: 'dark',
      notifications: true
    }
  }
});

// 2. Provide a readonly version to protect the Source of Truth
provide(StateKey, readonly(state));

// 3. Only the parent has functions to modify the state
const toggleTheme = () => {
  state.user.preferences.theme = 
    state.user.preferences.theme === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div class="p-4 border">
    <h2>Parent (Provider)</h2>
    <button @click="toggleTheme">Toggle Theme (Authorized)</button>
    <ChildComponent />
  </div>
</template>