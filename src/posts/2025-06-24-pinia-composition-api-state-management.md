---
title: "Pinia + Composition API: State Management That Just Feels Right"
date: 2025-06-24
---

# Pinia + Composition API: State Management That Just Feels Right

With Vue 3 and the Composition API, **Pinia** is the new go-to for global state management. It’s simpler, more type-friendly, and fits modern architecture like a glove. Here’s why you’ll love it—and how to get started, chill-dev style.

---

## Why Pinia?

- 🧠 **Readable**: Each store is a clear, modular file
- 🛠️ **Devtools friendly**: Works great with Vue DevTools
- ⚡ **Type-safe**: Awesome TypeScript support
- 🎯 **Simple API**: No mutations, no boilerplate

---

## Installation

```bash
npm install pinia
```

In `main.ts`:

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

---

## Create a Store

In `stores/counter.ts`:

```ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return {
    count,
    increment,
  }
})
```

✅ Here, you’re using the **Composition API** (`ref`, functions, etc.)

---

## Use a Store in a Component

```vue
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">+1</button>
  </div>
</template>
```

* The store is **reactive** right in your template
* No need for mapState/mapActions like Vuex

---

## State, Actions, Getters

```ts
export const useUserStore = defineStore('user', () => {
  const name = ref('Alice')
  const age = ref(30)

  const incrementAge = () => age.value++

  const capitalizedName = computed(() => name.value.toUpperCase())

  return {
    name,
    age,
    incrementAge,
    capitalizedName,
  }
})
```

* `ref` → **state**
* `function` → **action**
* `computed` → **getter**

---

## Automatic Reactivity

You can use your store in any component:

```ts
const user = useUserStore()

watch(() => user.age, (newVal) => {
  console.log('New age:', newVal)
})
```

No need for extra observables—the store is **natively reactive**.

---

## Persistence (Bonus)

To keep state in `localStorage`, add this plugin:

```bash
npm install pinia-plugin-persistedstate
```

```ts
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```

And in your store:

```ts
export const useCounterStore = defineStore('counter', () => {
  // ...
}, {
  persist: true,
})
```

---

## Conclusion

Pinia + Composition API gives you:

* **Simple, modular state management**
* **Intuitive reactivity**
* A great **DX with TypeScript**

It’s the recommended solution for all Vue 3 projects. Try it—you’ll never look back!
