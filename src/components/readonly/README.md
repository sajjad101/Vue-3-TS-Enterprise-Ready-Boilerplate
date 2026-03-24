<script setup lang="ts">
import { inject } from 'vue';
import { StateKey } from './types';

const state = inject(StateKey);

const handleIllegalChange = () => {
  if (state) {
    /**
     * ❌ TypeScript Error: 
     * Cannot assign to 'theme' because it is a read-only property.
     */
    // state.user.preferences.theme = 'light'; 
  }
};
</script>

<template>
  <div class="child-container">
    <h3>Child (Consumer)</h3>
    <p>Current Theme: **{{ state?.user.preferences.theme }}**</p>
    <button @click="handleIllegalChange">Try Illegal Change</button>
  </div>
</template>