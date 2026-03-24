# Vue 3 + TypeScript: Secure State Pattern

This repository demonstrates a professional pattern for managing shared state between components using **Vue 3 Composition API** and **TypeScript**. It focuses on **Immutability**, **Type Safety**, and **Performance**.

---

## 🚀 The Problem: Prop Drilling & State Mutation

In large Vue applications, passing data down multiple levels (Prop Drilling) is tedious. Using a simple global object often leads to "Hidden Mutations," where a child component accidentally changes data, causing bugs that are hard to trace and heavy re-renders.

## 💡 The Solution: Provider Pattern with `readonly`

We use Vue's `provide` and `inject` combined with TypeScript's `DeepReadonly` to ensure:

1. **One-Way Data Flow:** Only the parent (Source of Truth) can modify the state.
2. **Type Safety:** Full Autocomplete and compile-time errors for protected properties.
3. **Efficiency:** Reduces reactive overhead by preventing unauthorized deep-tracking updates.

---

## 🛠 Implementation Guide

### 1. Define the Schema (`types.ts`)

```typescript
import { InjectionKey, DeepReadonly } from 'vue';

export interface AppState {
  user: {
    id: number;
    preferences: {
      theme: 'dark' | 'light';
      notifications: boolean;
    };
  };
}

/**
 * The key acts as a unique identifier and a type-carrier.
 * Using Symbol ensures no naming collisions.
 */
export const StateKey: InjectionKey<DeepReadonly<AppState>> = Symbol('AppState');
```

---

### 2. The Provider (Parent Component)

The parent holds the reactive state and provides a readonly version to all descendants.

```vue
<script setup lang="ts">
import { reactive, provide, readonly } from 'vue';
import { StateKey, AppState } from './types';
import ChildComponent from './Child.vue';

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
// This prevents children from mutating the state directly.
provide(StateKey, readonly(state));

// 3. Only the parent has functions to modify the state
const toggleTheme = () => {
  state.user.preferences.theme = 
    state.user.preferences.theme === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div class="parent-container">
    <h2>Parent (Provider)</h2>
    <button @click="toggleTheme">Toggle Theme (Authorized)</button>
    <hr />
    <ChildComponent />
  </div>
</template>
```

---

### 3. The Consumer (Child Component)

The child injects the state. TypeScript will prevent any attempt to modify the values at compile-time.

```vue
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
```

---

## 📈 Performance Benefits

* **Optimized Dependency Tracking:** Vue knows the injected data is readonly for the child, reducing the complexity of the reactivity graph.
* **Predictable Re-renders:** Since state can only change in the parent, debugging "why did this component re-render?" becomes significantly easier.
* **Memory Safety:** Prevents accidental memory leaks caused by unwanted deep observers in large data structures.

---

## 📝 Best Practices

* Always use **Symbols** for `InjectionKey` to avoid naming collisions in large teams.
* Use `DeepReadonly<T>` to ensure even nested arrays and objects are protected from methods like `.push()` or `.splice()`.
* If a child needs to update the state, provide a separate update function alongside the state.
