<template>
  <section :id="id" class="px-4 mb-8 scroll-mt-10">
    <header class="mb-4">
      <h2>{{ title }}</h2>
      <p v-if="description" class="text-muted-foreground -mt-2 text-sm">
        {{ description }}
      </p>
    </header>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  description?: string;
}>();
</script>