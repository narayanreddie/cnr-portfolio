<template>
  <div class="bg-background text-foreground font-sans antialiased">
    <div class="w-full max-w-6xl mx-auto">
      <slot />   <!-- renders the whole page -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@import '@/assets/styles/globals.css';
</style>