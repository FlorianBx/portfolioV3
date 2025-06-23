<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Frontend Developer – Vue 3 Specialist & Open Source Contributor',
  meta: [
    {
      name: 'description',
      content:
        'Hi! I’m a freelance frontend developer specialized in Vue 3. I build performant web interfaces and contribute to open source projects.',
    },
    {
      property: 'og:title',
      content: 'Frontend Developer – Vue 3 Expert',
    },
    {
      property: 'og:description',
      content:
        'Freelance developer focused on modern frontend development with Vue 3, TypeScript and open-source contributions.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://ton-site.netlify.app/',
    },
  ],
})
</script>

<template>
  <router-view/>
</template>
