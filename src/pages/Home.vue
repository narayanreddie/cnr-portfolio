<template>
  <Default>
    <Header />
    <Experience />
    <Projects />
    <Technologies />
    <Contacts />
  </Default>
</template>

<script setup lang="ts">
import Default from '@/layouts/Default.vue';
import Header from '@/components/home/header.vue';
import Experience from '@/components/home/experience/index.vue';
import Projects from '@/components/home/projects/index.vue';
import Technologies from '@/components/home/technologies/index.vue';
import Contacts from '@/components/home/contacts.vue';
</script>