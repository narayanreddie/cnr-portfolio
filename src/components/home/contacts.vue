<!-- src/components/home/contacts.vue -->
<template>
  <nav
    class="flex items-center justify-center flex-wrap fixed top-0 left-0 right-0 z-50 p-4"
    style="backdrop-filter: blur(1.3rem);"
  >
    <a
      v-for="{ href, text } in [
        { href: 'https://www.linkedin.com/in/cinare/', text: 'LinkedIn' },
        { href: 'mailto:narayanreddieui@gmail.com', text: 'Email' },
        { href: 'https://github.com/narayanreddie', text: 'GitHub' },
        { href: 'https://drive.google.com/file/d/1M7DwtTZhttl9Wzoll7_bunZoKmqH4TNq/view?usp=sharing', text: 'Resume' },
      ]"
      :key="text"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      class="text-primary odd:text-foreground mr-2 hover:underline flex items-center"
    >
      {{ text }}<MoveUpRight class="w-3 h-3 ml-1" />
    </a>
  </nav>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';
</script>