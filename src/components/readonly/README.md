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
We use an `InjectionKey` to ensure the data injected in the child exactly matches the type provided by the parent.

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