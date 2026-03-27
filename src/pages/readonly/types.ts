import { type InjectionKey, type DeepReadonly } from 'vue';

export interface AppState {
  user: {
    id: number;
    preferences: {
      theme: 'dark' | 'light';
      notifications: boolean;
    };
  };
}

// The key acts as a unique identifier and a type-carrier
export const StateKey: InjectionKey<DeepReadonly<AppState>> = Symbol('AppState');