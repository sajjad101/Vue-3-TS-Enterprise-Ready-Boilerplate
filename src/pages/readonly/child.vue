<script setup lang="ts">
import { inject } from 'vue';
import { StateKey } from './types';

const state = inject(StateKey);

const handleIllegalChange = () => {
  if (state) {
    // ❌ TypeScript Error: 
    // Cannot assign to 'theme' because it is a read-only property.
    // state.user.preferences.theme = 'light'; 
  }
};
</script>

<template>
  <div class="p-4 mt-4 bg-gray-100">
    <h3>Child (Consumer)</h3>
    <p>Current Theme: **{{ state?.user.preferences.theme }}**</p>
    <button @click="handleIllegalChange">Try Illegal Change</button>
  </div>
</template>